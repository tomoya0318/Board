import { BoardColumn } from "./_components/BoardColumn";

const titleList = ["todo", "In progress", "done"]
const Board = () => {
  return (
    <div className="p-2 mt-2 mb-8 h-screen overflow-hidden">
      <div className="text-3xl font-bold bg-gray-200">board page</div>
      <BoardColumn titleList={titleList}/>
    </div>
  );
};

export default Board;