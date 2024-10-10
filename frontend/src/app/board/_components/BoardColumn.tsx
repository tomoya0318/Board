import React, { useEffect, useState } from "react";
import { ColumnItem } from "./ColumnItem";
import { Column } from "@/types/board";
import EditIcon from "@mui/icons-material/Edit";

type BoardColumnProps = {
  columns: Column[],
  setColumns: React.Dispatch<React.SetStateAction<Column[]>>
}

export const BoardColumn = ({ columns, setColumns }: BoardColumnProps): JSX.Element => {
  const [isEditing, setIsEditing] = useState<Record<number, boolean>>({});

  useEffect(() => {
    const newIsEditing = columns.reduce((acc, column) => {
      acc[column.id] = false;
      return acc;
    }, {} as Record<number, boolean>);
    setIsEditing(newIsEditing);
  }, []);

  const handleEditing = (columnId: number) => {
    setIsEditing(prev => ({
      ...prev,
      [columnId]: !prev[columnId]
    }));
  };

  const handleLabelChange = (columnId: number, newLabel: string) => {
    setColumns(prevColumns => (
      prevColumns.map(column => (
        column.id === columnId ? {...column, label: newLabel} : column
      ))
    ));
  };

  const handleBlur = (columnId: number) => {
    setIsEditing(prev => ({
      ...prev,
      [columnId]: false
    }));
  };

  return (
    <div className="flex p-2">
      {columns.map(column => (
        <div
          key={column.id}
          className="flex-none w-80 h-dvh mr-2 bg-slate-100"
        >
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
          <ColumnItem items={column.items}/>
        </div>
      ))}
    </div>
  );
};