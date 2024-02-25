import { Column } from "./column";

const Board = () => {
  return (
    <div className="bg-slate-100 grow p-4">
      <div className="flex gap-5 overflow-x-scroll">
        <Column />
        <Column />
      </div>
    </div>
  );
};

export default Board;
