import React from "react";
import Todo from "./Todo";

import style from './todos.module.css'

const Todos = (props) => {
  //  const todos = props.todos
  return (
    <section className={style.todos}>
      {props.todos.map((todo) => (
        <Todo todo={todo.todo} key={todo.id} onRemoveTodo={props.onRemoveTodo} id={todo.id} />
      ))}
    </section>
  );
};

export default Todos;
