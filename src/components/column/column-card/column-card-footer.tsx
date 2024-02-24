import { CardFooter } from "@/components/ui/card";
import { ChatBubbleBottomCenterTextIcon } from "@heroicons/react/24/solid";

const ColumnCardFooter = () => {
  return (
    <CardFooter className="flex gap-2">
      <ChatBubbleBottomCenterTextIcon className="h-4 w-4" />
      <p className="text-xs">3</p>
    </CardFooter>
  );
};

export default ColumnCardFooter;
