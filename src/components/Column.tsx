interface ColumnProps {
  state: string;
}

const Column: React.FC<ColumnProps> = ({ state }) => {
  return (
    <div className="w-80 bg-slate-600 h-96 rounded-md relative overflow-hidden">
      <div className="absolute h-10 w-full bg-blue-600 top-0 flex items-center p-3">
        {state}
      </div>
      <div className="p-3 bg-stone-50 h-full">
        <div className="bg-red-500 w-full h-60"></div>
      </div>
    </div>
  );
};

export default Column;
