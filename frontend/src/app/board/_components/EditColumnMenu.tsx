import { LegacyRef } from "react";
　
type EditColumnMenuProps = {
  columnId: number;
  menuRef: LegacyRef<HTMLDivElement>;
  setIsEditing: React.Dispatch<React.SetStateAction<Record<number, boolean>>>;
  setShowMenu: React.Dispatch<React.SetStateAction<Record<number, boolean>>>;
}

export const EditColumnMenu = ({
  columnId,
  menuRef,
  setIsEditing,
  setShowMenu
  }: EditColumnMenuProps) => {
  const handleEditing = (columnId: number) => {
    setIsEditing(prev => ({
      ...prev,
      [columnId]: true,
    }));
    setShowMenu(prev => ({
      ...prev,
      [columnId]: false
    }));
  };

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
        onClick={() => {
          // ここに列削除のロジックを実装
          console.log(`Delete column ${columnId}`);
        }}
        className="w-full text-left py-2 hover:bg-gray-100 text-red-600"
      >
        Delete Column
      </button>
    </div>
  );
};