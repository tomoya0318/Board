import React, { useEffect, useState, useRef, LegacyRef } from "react";
import { ColumnItem } from "./ColumnItem";
import { Board, Column } from "@/types/board";
import MenuIcon from '@mui/icons-material/Menu';
import AddIcon from "@mui/icons-material/Add";
import { AddColumnForm } from "./AddColumnForm";
import { EditColumnMenu } from "./EditColumnMenu";

export type BoardColumnProps = {
  columns: Column[];
  setBoard: React.Dispatch<React.SetStateAction<Board>>;
  menuRef: LegacyRef<HTMLDivElement>;
  showMenu: Record<number, boolean>;
  setShowMenu:React.Dispatch<React.SetStateAction<Record<number, boolean>>>;
};

export const BoardColumn = ({
  columns,
  setBoard,
  menuRef,
  showMenu,
  setShowMenu
}: BoardColumnProps): JSX.Element => {
  const [isEditing, setIsEditing] = useState<Record<number, boolean>>({});
  const prevColumnsLengthRef = useRef(columns.length);
  const [showAddForm, setShowAddForm] = useState<boolean>(false);

  useEffect(() => {
    if (columns.length > prevColumnsLengthRef.current) {
      const newIsEditing = columns.reduce(
        (acc, column) => {
            acc[column.id] = false;
          return acc;
        },
        { ...isEditing } as Record<number, boolean>,
      );
      const newShowMenu = columns.reduce(
        (acc, column) => {
            acc[column.id] = false;
          return acc;
        },
        { ...showMenu } as Record<number, boolean>
      )
      setIsEditing(newIsEditing);
      setShowMenu(newShowMenu);
    }
    prevColumnsLengthRef.current = columns.length;
  }, [columns]);

  const handleShowMenu = (columnId: number) => {
    const newShowMenu = columns.reduce((acc, column) => {
      // クリックされたcolumnId以外は全てfalse
      acc[column.id] = column.id === columnId;
      return acc;
    }, {} as Record<number, boolean>);
    setShowMenu(newShowMenu);
  };

  const handleLabelChange = (columnId: number, newLabel: string) => {
    setBoard((prevBoard) => ({
      ...prevBoard,
      columns: prevBoard.columns.map((column) =>
        column.id === columnId ? { ...column, label: newLabel } : column,
      ),
    }));
  };

  const handleBlur = (columnId: number) => {
    setIsEditing((prev) => ({
      ...prev,
      [columnId]: false,
    }));
  };

  return (
    <div className="flex p-2">
      {columns.map((column) => (
        <div key={column.id} className="flex-none w-80 h-dvh mr-2 bg-slate-100">
          <div className="relative">
            <div className="flex bg-red-100 items-center">
              <div className="text-2xl pl-2 flex-grow">
                {isEditing[column.id] ? (
                  <input
                    type="text"
                    value={column.label}
                    onChange={(e) => handleLabelChange(column.id, e.target.value)}
                    onBlur={() => handleBlur(column.id)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        handleBlur(column.id)
                      }
                    }}
                    className="border rounded px-1 w-full"
                    autoFocus
                  />
                ) : (
                  column.label
                )}
              </div>
              <button
                onClick={() => handleShowMenu(column.id)}
                className="p-2"
                aria-label={`Edit ${column.label}`}
                is-menu="true"
              >
                <MenuIcon />
              </button>
            </div>
            {showMenu[column.id] && (
              <EditColumnMenu
                columnId={column.id}
                menuRef={menuRef}
                setIsEditing={setIsEditing}
                setShowMenu={setShowMenu}
              />
            )}
          </div>
          <ColumnItem items={column.items} />
        </div>
      ))}
      <button
        onClick={() => setShowAddForm(true)}
        className="p-2 bg-gray-100 w-10 h-10"
      >
        <AddIcon />
      </button>
      {showAddForm && (
        <AddColumnForm
          setBoard={setBoard}
          onClose={() => setShowAddForm(false)}
        />
      )}
    </div>
  );
};