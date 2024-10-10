// AddColumnForm.tsx
import { Board } from "@/types/board";
import { useState } from "react";

interface AddColumnFormProps {
  setBoard: React.Dispatch<React.SetStateAction<Board>>;
  onClose: () => void;
}

export const AddColumnForm = ({ setBoard, onClose }: AddColumnFormProps) => {
  const [columnName, setColumnName] = useState<string>("");

  const handleLabelAdd = (e: React.FormEvent) => {
    e.preventDefault();
    setBoard((prev) => {
      const tempId = Math.max(...prev.columns.map((col) => col.id), 0) + 1;
      const newColumn = {
        id: tempId,
        label: columnName,
        items: [],
      };
      return {
        ...prev,
        columns: [...prev.columns, newColumn],
      };
    });
    setColumnName("");
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-4 rounded">
        <form onSubmit={handleLabelAdd}>
          <input
            type="text"
            value={columnName}
            onChange={(e) => setColumnName(e.target.value)}
            placeholder="Enter column name"
            className="border p-2 mr-2"
          />
          <button type="submit" className="bg-blue-500 text-white p-2 rounded">
            Save
          </button>
          <button
            type="button"
            onClick={onClose}
            className="bg-gray-300 p-2 rounded ml-2"
          >
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
};
