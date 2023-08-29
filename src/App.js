import { Typography } from "@mui/material";
import Theme from "./components/theme/Theme";
import { TodoForm } from "./components/TodoForm";
import { TodoList } from "./components/TodoList";


function App() {
  return (
    <div >
      <Typography variant="h3">Todo App</Typography>
      <Theme />
      <TodoForm />
      <TodoList />
    </div>
  );
}

export default App;

