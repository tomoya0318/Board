import { Board } from "@/types/board";

type EditColumnMenuProps = {
  columnId: number;
  setBoard: React.Dispatch<React.SetStateAction<Board>>;
  setIsEditing: React.Dispatch<React.SetStateAction<Record<number, boolean>>>;
  setShowMenu: React.Dispatch<React.SetStateAction<Record<number, boolean>>>;
};

export const EditColumnMenu = ({
  columnId,
  setBoard,
  setIsEditing,
  setShowMenu,
}: EditColumnMenuProps) => {
  const handleEditing = (columnId: number) => {
    setIsEditing((prev) => ({
      ...prev,
      [columnId]: true,
    }));
    setShowMenu((prev) => ({
      ...prev,
      [columnId]: false,
    }));
  };

  const handleDeleting = (columnId: number) => {
    setBoard((prev) => ({
      ...prev,
      columns: prev.columns.filter(column => column.id != columnId)
    }))
  }

  return (
    <div
      is-menu="true"
      className="absolute right-0 top-full mt-1 mr-2 bg-white p-2 border rounded divide-y shadow-lg z-10"
    >
      <button
        onClick={() => handleEditing(columnId)}
        className="w-full text-left py-2 hover:bg-gray-100"
      >
        Edit name
      </button>
      <button
        onClick={() => handleDeleting(columnId)}
        className="w-full text-left py-2 hover:bg-gray-100 text-red-600"
      >
        Delete Column
      </button>
    </div>
  );
};
