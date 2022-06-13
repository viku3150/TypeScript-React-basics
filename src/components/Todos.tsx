import React, { useContext } from "react";
// import Todo from "../models/todo";
import TodoPlot from "./TodoPlot";
import classes from "./Todos.module.css";
import { TodosContext } from "../store/todos-context";

const Todos: React.FC =
  // < { items: Todo[]; onRemoveTodo: (id: string) => void } >
  () => {
    const todosCtx = useContext(TodosContext);
    return (
      <ul className={classes.todos}>
        {todosCtx.items.map((item) => (
          <TodoPlot
            key={item.id}
            content={item.text}
            onRemoveTodo={todosCtx.removeTodo.bind(null, item.id)}
          />
        ))}
      </ul>
    );
  };

export default Todos;
