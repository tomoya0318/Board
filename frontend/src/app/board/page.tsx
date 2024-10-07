'use client';
import { useState } from "react";
import { BoardColumn } from "./_components/BoardColumn";
import { Board as BoardProps } from "@/types/board";

const itemList = [
  {
    id: 1,
    content: `## GFM\n## Autolink literals\nwww.example.com, https://example.com, and contact@example.com.`,
    order: 0
  },
  {
    id: 2,
    content: `## goodbye`,
    order: 1
  }
];

const defaultData: BoardProps = {
  id: 1,
  columns: [
    {
      id: 1,
      label: "Todo",
      items: itemList,
    },
    {
      id: 2,
      label: "Inprogress",
      items: itemList,
    },
    {
      id: 3,
      label: "Done",
      items: itemList,
    }
  ]
};

const Board = ():JSX.Element => {
  const [columns, setColumns] = useState(defaultData.columns);
  return (
    <div className="p-2 mt-2 mb-8 h-screen overflow-hidden">
      <div className="text-3xl font-bold bg-gray-200">board page</div>
      <BoardColumn columns={columns} setColumns={setColumns}/>
    </div>
  );
};

export default Board;