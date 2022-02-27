import { Col, Layout, Menu, Row } from "antd";
import "antd/dist/antd.css";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import "./App.css";
import RequireAuth from "./components/RequireAuth/RequiredAuth";
import Login from "./pages/Login/Login";
import TodoList from "./pages/TodoList/TodoList";
import { toggleTodo } from "./redux/actions";

function App() {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state?.todos?.todos?.items);

  const handleOnTodoClick = (id) => {
    dispatch(toggleTodo(id));
  };

  return (
    <BrowserRouter>
      <Layout>
        <Layout.Header>
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
            <Menu.Item key="1">
              <Link to={"/todo"}>Todo</Link>
            </Menu.Item>
          </Menu>
        </Layout.Header>
        <Layout.Content>
          <Row style={{ display: "flex", justifyContent: "center" }}>
            <Col span={8}>
              <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/login" element={<Login />} />
                <Route
                  path="/todo"
                  element={
                    <RequireAuth>
                      <TodoList todos={todos} onTodoClick={handleOnTodoClick} />
                    </RequireAuth>
                  }
                />
              </Routes>
            </Col>
          </Row>
        </Layout.Content>
        <Layout.Footer style={{ textAlign: "center" }}>Ant Design ©2022</Layout.Footer>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
