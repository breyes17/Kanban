import { Button } from "../ui/button";

const ColumnFooter = () => {
  return (
    <div className="flex justify-center">
      <Button className="w-full bg-transparent hover:bg-slate-700">
        + Add Card
      </Button>
    </div>
  );
};

export default ColumnFooter;
