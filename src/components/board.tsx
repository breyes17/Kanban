import { Column } from "./column";
import { useStore } from "@/provider/store";

const Board = () => {
  const kanban = useStore((state) => state.currentKanban);

  return (
    <div className="bg-slate-100 flex flex-col">
      <div className="flex-grow">
        <ol className="inset-0 overflow-x-auto overflow-y-hidden flex">
          {kanban.boards.map((board) => (
            <li
              key={board.boardId}
              className="self-start shrink-0 block h-full whitespace-nowrap px-2"
            >
              <Column column={board} />
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default Board;
