import { useState } from "react";
import clsx from "clsx";

interface IColumnHeader {
  header: string;
}

const ColumnHeader: React.FC<IColumnHeader> = ({ header }) => {
  const [edit, setIsEdit] = useState(false);
  const [value, setValue] = useState(header);

  return (
    <div className="flex w-full justify-between gap-1">
      <input
        type="text"
        value={value}
        className={clsx(
          "w-full rounded-md p-1 bg-transparent outline-none duration-200 border-2",
          {
            "bg-white border-gray-300 text-black": edit,
            "border-transparent cursor-pointer font-bold text-md text-white":
              !edit,
          }
        )}
        readOnly={!edit}
        onFocus={() => setIsEdit(() => true)}
        onBlur={() => setIsEdit(() => false)}
        onChange={(e) => setValue(e.target.value)}
      />
      <button>...</button>
    </div>
  );
};

export default ColumnHeader;
