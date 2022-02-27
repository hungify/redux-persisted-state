import { List, Typography } from "antd";
import React, { PropTypes } from "react";

function Todo({ onClick, completed, text }) {
  return (
    <List.Item onClick={onClick}>
      <Typography.Text>{text}</Typography.Text>
    </List.Item>
  );
}

export default Todo;
