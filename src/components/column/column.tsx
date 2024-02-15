import ColumnContent from "./column-content";
import ColumnFooter from "./column-footer";
import ColumnHeader from "./column-header";

const Column = () => {
  return (
    <div className="w-72 min-h-fit h-auto bg-slate-500 rounded-md p-2">
      <ColumnHeader />
      <ColumnContent />
      <ColumnFooter />
    </div>
  );
};

export default Column;
