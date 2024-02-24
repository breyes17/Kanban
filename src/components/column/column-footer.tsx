import { Button } from "../ui/button";
import { CardContent } from "../ui/card";

const ColumnFooter = () => {
  return (
    <CardContent className="flex justify-center">
      <Button className="text-white w-full bg-transparent duration-300 hover:bg-slate-700">
        + Add Card
      </Button>
    </CardContent>
  );
};

export default ColumnFooter;
