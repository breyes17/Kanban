import { CardFooter } from "@/components/ui/card";
import { ChatBubbleBottomCenterTextIcon } from "@heroicons/react/24/solid";

const ColumnCardFooter = () => {
  return (
    <CardFooter className="flex gap-2">
      <ChatBubbleBottomCenterTextIcon className="h-4 w-4 text-[var(--offWhite)]" />
      <p className="text-xs text-[var(--offWhite)]">3</p>
    </CardFooter>
  );
};

export default ColumnCardFooter;
