import { Card, CardHeader } from "@/components/ui/card";
// import ColumnCardOwner from "./column-card-owner"; // TODO: Not sure if this should be included
import ColumnCardFooter from "./column-card-footer";
import { ICard } from "@/interface";

const ColumnCard: React.FC<ICard> = ({
  // assignedTo,
  // cardId,
  cardName,
  comments,
}) => {
  return (
    <Card className="bg-[var(--gray)] border-0 flex flex-col gap-3">
      <CardHeader className="font-semibold">{cardName}</CardHeader>
      {/* <ColumnCardOwner /> */}
      <ColumnCardFooter comments={comments} />
    </Card>
  );
};

export default ColumnCard;
