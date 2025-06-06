import React from 'react';
import { Layout, Typography } from 'antd';
import Colors from '../help/rootcss';

const { Header } = Layout;
const { Title } = Typography;

const Navbar = () => (
  <Header
    style={{
      background: Colors.component,
      padding: '0 20px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    <Title
      style={{
        color: Colors.text,
        margin: 0,
        fontSize: '20px',
      }}
    >
      IT ROOM DASHBOARD
    </Title>
  </Header>
);

export default Navbar;