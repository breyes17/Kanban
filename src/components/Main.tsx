import Column from './Column';

const MainBoard = () => {
  return (
    <div>
      <div className="flex justify-between p-5 items-center">
        <div>
          <div className="flex items-center">
            <h1 className="font-bold text-3xl mr-5">Title</h1>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
              />
            </svg>
          </div>
          <p className="text-gray-500">this is some text here</p>
          <button className="mt-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-4 h-4 inline-block mr-3"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
            Add Task
          </button>
        </div>
        <div>icon here (day|night)</div>
      </div>
      <div>
        <Column state="TODO" />
        <Column state="INPROGRESS" />
        <Column state="DONE" />
      </div>
    </div>
  );
};

export default MainBoard;
