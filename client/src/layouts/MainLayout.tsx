import React, { FunctionComponent } from 'react';
import { Layout, Typography } from 'antd';
import { Link } from 'react-router-dom';
import Routes from '../constants/Routes';
import ApiStatus from '../components/ApiStatus';

const { Content } = Layout;

const MainLayout: FunctionComponent<{}> = (props) => {
  return (
    <Layout style={{ minHeight: '100vh' }}>

      <Layout.Header className="app-header">
        <Link to={Routes.Home}>
          <Typography.Title level={2}>React Express App</Typography.Title>
        </Link>
        <ApiStatus />
      </Layout.Header>

      <Layout className="site-layout">
        <Content style={{ margin: '0 16px' }}>
          <Content
            className="content-background"
            style={{
              margin: 0
            }}>
            {props.children}
          </Content>
        </Content>
      </Layout>
    </Layout>
  );
}

export default MainLayout