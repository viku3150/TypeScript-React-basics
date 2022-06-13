import React, { useState } from "react";
import Todo from "../models/todo";

type TodosContextObj = {
  items: Todo[];
  addTodo: (text: string) => void;
  removeTodo: (id: string) => void;
};

export const TodosContext = React.createContext<TodosContextObj>({
  items: [],
  addTodo: () => {},
  removeTodo: (id: string) => {},
});

const TodosContextProvider: React.FC = (props) => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const addTodohandler = (todotext: string) => {
    const newTodo = new Todo(todotext);
    setTodos((prevtodos) => {
      console.log(prevtodos);
      return prevtodos.concat(newTodo);
    });
    // isse last state snapshit aajata h
  };
  const removeTodoHandler = (todoid: string) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.id !== todoid);
    });
  };

  const contextValue: TodosContextObj = {
    items: todos,
    addTodo: addTodohandler,
    removeTodo: removeTodoHandler,
  };
  return (
    <TodosContext.Provider value={contextValue}>
      {props.children}
    </TodosContext.Provider>
  );
};

export default TodosContextProvider;
