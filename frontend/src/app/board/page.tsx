"use client";
import { useState, useRef } from "react";
import { BoardColumn } from "./_components/BoardColumn";
import { Board as BoardProps } from "@/types/board";

const itemList = [
  {
    id: 1,
    content: `## GFM\n## Autolink literals\nwww.example.com, https://example.com, and contact@example.com.`,
    order: 0,
  },
  {
    id: 2,
    content: `## goodbye`,
    order: 1,
  },
];

const defaultData: BoardProps = {
  id: 1,
  title: "board",
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
    },
  ],
};

const Board = (): JSX.Element => {
  const [board, setBoard] = useState(defaultData);
  const [showMenu, setShowMenu] = useState<Record<number, boolean>>({});

  const closeWithClickOutSide = (e: React.MouseEvent) => {
    // コラムのメニューボタンと，メニューの中身に触ったかを判定
    const isRelatedMenuButton = (e.target as HTMLElement).closest(
      '[is-menu="true"]',
    );

    if (!isRelatedMenuButton) {
      const allMenusClosed = board.columns.reduce(
        (acc, column) => {
          acc[column.id] = false;
          return acc;
        },
        {} as Record<number, boolean>,
      );

      setShowMenu(allMenusClosed);
    }
  };
  return (
    <div
      className="p-2 mt-2 mb-8 h-screen overflow-hidden"
      onClick={closeWithClickOutSide}
    >
      <div className="text-3xl font-bold bg-gray-200">{board.title}</div>
      <BoardColumn
        columns={board.columns}
        setBoard={setBoard}
        showMenu={showMenu}
        setShowMenu={setShowMenu}
      />
    </div>
  );
};

export default Board;
