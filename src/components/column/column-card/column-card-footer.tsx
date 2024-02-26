import { CardFooter } from "@/components/ui/card";
import { ChatBubbleBottomCenterTextIcon } from "@heroicons/react/24/solid";
import { IComment } from "@/interface";

interface IColumnCardFooter {
  comments: IComment[];
}

const ColumnCardFooter: React.FC<IColumnCardFooter> = ({ comments }) => {
  return (
    <CardFooter className="flex gap-2">
      <ChatBubbleBottomCenterTextIcon className="h-4 w-4 text-[var(--offWhite)]" />
      <p className="text-xs text-[var(--offWhite)]">{comments.length}</p>
    </CardFooter>
  );
};

export default ColumnCardFooter;
