import { Column } from "./column";
import { useStore } from "@/provider/store";

const Board = () => {
  const kanban = useStore((state) => state.currentKanban);

  return (
    <div className="bg-slate-100 grow p-4">
      <div className="flex gap-5 overflow-x-scroll">
        {kanban.boards.map((board) => (
          <Column column={board} key={board.boardId} />
        ))}
      </div>
    </div>
  );
};

export default Board;
