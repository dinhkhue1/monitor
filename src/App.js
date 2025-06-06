import React from 'react';
import { Layout } from 'antd';
import Navbar from './components/navbar';
import Dashboard from './components/DashBoard';

const App = () => (
  <Layout>
    <Navbar />
    <Dashboard />
  </Layout>
);

export default App;