import ColumnCard from "./column-card";

function ColumnContent() {
  const arr = Array.from(Array(5).keys());
  return arr.map((_, i) => <ColumnCard key={i} />);
}

export default ColumnContent;
