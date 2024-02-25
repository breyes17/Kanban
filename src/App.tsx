import BoardContainer from "./components/board-container";
import {
  ThemeProvider,
  //useTheme
} from "@/provider/theme-provider";
import { useStore } from "@/provider/store";

const App = () => {
  // const { setTheme } = useTheme();
  // params can be light | dark | system
  // const handleSetTheme = () => setTheme('light')
  const store = useStore();
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <BoardContainer />
    </ThemeProvider>
  );
};

export default App;
