import './App.css';
import 'antd/dist/antd.css';
import { Layout, Menu, Breadcrumb, Form, Input, Button } from 'antd';

const { Header, Content, Footer } = Layout;


function App() {
    const onFinish = (values) => {
      console.log('Success:', values);
      fetch('/api', { method: "POST", headers: {'Content-Type': 'application/json'}, body: JSON.stringify(values) })
      .then((res) => {
        console.log(res)
      })
    };
  return (
  <Layout className="layout" style={{ minHeight: '100vh' }}>
    <Header>
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
        <Menu.Item key="1">nav 1</Menu.Item>
        <Menu.Item key="2">nav 2</Menu.Item>
        <Menu.Item key="3">nav 3</Menu.Item>
      </Menu>
    </Header>
    <Content style={{ padding: '0 50px', background: 'white', margin: '20px' }}>
    <Form
      name="basic"
      onFinish={onFinish}
    >
      <Form.Item
        label="Title"
        name="title">      
        <Input />
      </Form.Item>

      <Form.Item
        label="Description"
        name="description"
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Author"
        name="author"
      >
        <Input />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>List</Breadcrumb.Item>
        <Breadcrumb.Item>App</Breadcrumb.Item>
      </Breadcrumb>
    </Content>
    <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
  </Layout>
  );
};

export default App;
