import React from "react";
import TodoItem from "./TodoItem";
import "./TodoList.css";

const TodoList = ({todos, onCheckedToggle, onInsertToggle, onChangeSelectedTodo})=> {
  return (
    <div className="TodoList">
      {todos.map(todo =>(
        <TodoItem todo = {todo} key={ todo.id } onCheckedToggle ={onCheckedToggle} onInsertToggle ={onInsertToggle}
        onChangeSelectedTodo={onChangeSelectedTodo} />
      ))}
    </div>
  );
};

export default TodoList;