import React, { useEffect, useState, useRef } from "react";
import { ColumnItem } from "./ColumnItem";
import { Board, Column } from "@/types/board";
import EditIcon from "@mui/icons-material/Edit";
import AddIcon from "@mui/icons-material/Add";
import { AddColumnForm } from "./AddColumnForm";

export type BoardColumnProps = {
  columns: Column[];
  setBoard: React.Dispatch<React.SetStateAction<Board>>;
};

export const BoardColumn = ({
  columns,
  setBoard,
}: BoardColumnProps): JSX.Element => {
  const [isEditing, setIsEditing] = useState<Record<number, boolean>>({});
  const prevColumnsLengthRef = useRef(columns.length);
  const [showAddForm, setShowAddForm] = useState<boolean>(false);

  useEffect(() => {
    if (columns.length > prevColumnsLengthRef.current) {
      const newIsEditing = columns.reduce(
        (acc, column) => {
          if (!(column.id in acc)) {
            acc[column.id] = false;
          }
          return acc;
        },
        { ...isEditing } as Record<number, boolean>,
      );
      setIsEditing(newIsEditing);
    }
    prevColumnsLengthRef.current = columns.length;
  }, [columns]);

  const handleEditing = (columnId: number) => {
    setIsEditing((prev) => ({
      ...prev,
      [columnId]: !prev[columnId],
    }));
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
          <div className="flex bg-red-100 items-center">
            <div className="text-2xl pl-2 flex-grow">
              {isEditing[column.id] ? (
                <input
                  type="text"
                  value={column.label}
                  onChange={(e) => handleLabelChange(column.id, e.target.value)}
                  onBlur={() => handleBlur(column.id)}
                  className="border rounded px-1 w-full"
                  autoFocus
                />
              ) : (
                column.label
              )}
            </div>
            <button
              onClick={() => handleEditing(column.id)}
              className="p-2"
              aria-label={`Edit ${column.label}`}
            >
              <EditIcon />
            </button>
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
