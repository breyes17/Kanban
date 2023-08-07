interface ColumnProps {
  state: string;
}

const Column: React.FC<ColumnProps> = ({ state }) => {
  return <h1>Column - {state}</h1>;
};

export default Column;
