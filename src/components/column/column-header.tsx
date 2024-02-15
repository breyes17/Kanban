import { useState } from "react";
import clsx from "clsx";

function ColumnHeader() {
  const [edit, setIsEdit] = useState(false);

  return (
    <div className="flex w-full justify-between gap-1">
      {/* {!showTextBox && (
        <div
          className="p-1 cursor-pointer w-full rounded-md border-2 border-transparent hover:border-2 hover:border-white duration-300"
          onClick={() => setShowTextBox((val) => !val)}
        >
          <h1 className="font-bold text-md text-white">Column Header</h1>
        </div>
      )}
      {showTextBox && <input type="text" value={"Column Header"} />} */}
      <input
        type="text"
        value={"Column Header"}
        className={clsx(
          "w-full rounded-md p-1 bg-transparent outline-none duration-200",
          {
            "bg-white border-2 border-gray-300": edit,
            "border-none cursor-pointer font-bold text-md text-white": !edit,
          }
        )}
        readOnly={!edit}
        onFocus={() => setIsEdit(() => true)}
        onBlur={() => setIsEdit(() => false)}
      />
      <button>...</button>
    </div>
  );
}

export default ColumnHeader;
