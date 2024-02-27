import Board from "./board";
import Nav from "./nav";

const BoardContainer = () => {
  return (
    <>
      <Nav />
      <main className="w-full bg-inherit relative">
        <Board />
      </main>
    </>
  );
};

export default BoardContainer;
