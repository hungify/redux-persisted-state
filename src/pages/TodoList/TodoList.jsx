import { List } from "antd";
import React, { PropTypes } from "react";
import AddTodo from "../../components/AddTodo";
import Todo from "../../components/Todo";

const TodoList = ({ todos, onTodoClick }) => {
  return (
    <>
      <AddTodo />
      <List
        grid={{ gutter: 16, column: 4 }}
        dataSource={todos}
        renderItem={(todo) => (
          <List.Item>
            <Todo key={todo.id} {...todo} onClick={() => onTodoClick(todo.id)} />
          </List.Item>
        )}
      />
    </>
  );
};

export default TodoList;
