import { ColumnCard } from "./column-card";
import { ICard } from "@/interface";

interface IColumnContentContainer {
  cards: ICard[];
}

const ColumnContentContainer: React.FC<IColumnContentContainer> = ({
  cards,
}) => {
  return (
    <div className="flex flex-col gap-2">
      {cards.map((card) => (
        <ColumnCard {...card} key={card.cardId} />
      ))}
    </div>
  );
};

export default ColumnContentContainer;
