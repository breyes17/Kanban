import Board from "./board";
import Nav from "./nav";

const BoardContainer = () => {
  return (
    <>
      <Nav />
      <main className="w-full px-6 bg-inherit">
        <Board />
      </main>
    </>
  );
};

export default BoardContainer;
