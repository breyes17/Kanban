import { Card, CardHeader } from "@/components/ui/card";
import ColumnCardOwner from "./column-card-owner";
import ColumnCardFooter from "./column-card-footer";

const ColumnCard = () => {
  const sample = [
    "Title",
    "Hello World",
    "Lets do this shit",
    "FInish this project",
    "You can do it",
    "Watashi no namae wa borayan desu",
    "Watashi no namae wa borayan desu. Hello world",
  ];
  const random = Math.floor(Math.random() * sample.length);
  const title = sample[random];
  return (
    <Card className="bg-[var(--gray)] border-0 flex flex-col gap-3">
      <CardHeader>{title}</CardHeader>
      <ColumnCardOwner />
      <ColumnCardFooter />
    </Card>
  );
};

export default ColumnCard;
