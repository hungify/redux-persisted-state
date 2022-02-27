import { Button, Card, Form, Input } from "antd";
import React from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/actions";

const AddTodo = () => {
  const dispatch = useDispatch();
  const [form] = Form.useForm();

  const onAddTodo = ({ todo }) => {
    dispatch(addTodo(todo));
    form.resetFields();
  };
  return (
    <Card title="Login">
      <Form name="basic" labelCol={{ span: 4 }} onFinish={onAddTodo} form={form}>
        <Form.Item
          label="Todo"
          name="todo"
          rules={[{ required: true, message: "Please input your todo!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Add Todo
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
};

export default AddTodo;
