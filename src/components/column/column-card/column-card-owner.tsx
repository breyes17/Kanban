import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const ColumnCardOwner = () => {
  return (
    <div className="flex gap-2 items-center">
      <Avatar className="h-4 w-4">
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>BR</AvatarFallback>
      </Avatar>
      <h3 className="text-xs">Bryan Reyes</h3>
    </div>
  );
};

export default ColumnCardOwner;
