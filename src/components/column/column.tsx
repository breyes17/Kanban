import ColumnContentContainer from "./column-content-container";
import ColumnFooter from "./column-footer";
import ColumnHeader from "./column-header";

const Column = () => {
  return (
    <div className="columnDefault">
      <ColumnHeader />
      <ColumnContentContainer />
      <ColumnFooter />
    </div>
  );
};

export default Column;
