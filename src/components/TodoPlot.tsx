import React from "react";
import classes from "./TodoPlot.module.css";

const TodoPlot: React.FC<{
  key: string;
  content: string;
  onRemoveTodo: () => void;
}> = ({ key, content, onRemoveTodo }) => {
  return (
    <li onClick={onRemoveTodo} className={classes.item} key={key}>
      {content}
    </li>
  );
};

export default TodoPlot;
