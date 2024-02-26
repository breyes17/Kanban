import ColumnContentContainer from "./column-content-container";
import ColumnFooter from "./column-footer";
import ColumnHeader from "./column-header";
import { IBoard } from "@/interface";

interface IColumn {
  column: IBoard;
}

const Column: React.FC<IColumn> = ({ column }) => {
  return (
    <div className="columnDefault">
      <ColumnHeader header={column.header} />
      <ColumnContentContainer cards={column.cards} />
      <ColumnFooter />
    </div>
  );
};

export default Column;
