import React from 'react';
import { Layout, Menu } from 'antd';
import Manage from './Manage/Manage';
import './Layouts.css';
const { Header, Content } = Layout;

export default () => {
  return <Layout className="layout">
    <Header>
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['manage']}>
        <Menu.Item key="manage">员工管理</Menu.Item>
        <Menu.Item key="setting">系统设置</Menu.Item>
      </Menu>
    </Header>
    <Content style={{ padding: '20px' }}
      className="content">
      <Manage />
    </Content>
  </Layout>
}
