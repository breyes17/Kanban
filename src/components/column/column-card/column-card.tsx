import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import ColumnCardOwner from "./column-card-owner";

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
    <Card>
      <CardHeader>{title}</CardHeader>
      <CardContent>Content</CardContent>
      <CardFooter>
        <p>Card Footer</p>
      </CardFooter>
    </Card>
  );
};

export default ColumnCard;
