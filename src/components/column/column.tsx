import ColumnContentContainer from "./column-content-container";
import ColumnFooter from "./column-footer";
import ColumnHeader from "./column-header";

const Column = () => {
  return (
    <div className="w-72 min-h-fit h-auto border-2 rounded-md p-2 flex flex-col gap-2 bg-[var(--background)]">
      <ColumnHeader />
      <ColumnContentContainer />
      <ColumnFooter />
    </div>
  );
};

export default Column;
