import BoardContainer from "./components/board-container";
import {
  ThemeProvider,
  //useTheme
} from "@/provider/theme-provider";

const App = () => {
  // const { setTheme } = useTheme();
  // params can be light | dark | system
  // const handleSetTheme = () => setTheme('light')
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <BoardContainer />
    </ThemeProvider>
  );
};

export default App;
