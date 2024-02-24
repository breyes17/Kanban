import { ColumnCard } from "./column-card";

function ColumnContentContainer() {
  const arr = Array.from(Array(5).keys());
  return (
    <div className="flex flex-col gap-2">
      {arr.map((_, i) => (
        <ColumnCard key={i} />
      ))}
    </div>
  );
}

export default ColumnContentContainer;
