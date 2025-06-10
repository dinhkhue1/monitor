import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router';
import { Layout } from 'antd';

import Navbar from './components/navbar';
import Dashboard from './components/DashBoard';
import Chart from './components/Chart';

const App = () => (
  <BrowserRouter>
    <Layout>
      <Navbar />
      <Layout.Content>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/chart" element={<Chart />} />
          <Route path="*" element={<div>Page Not Found</div>} />
        </Routes>
      </Layout.Content>
    </Layout>
  </BrowserRouter>
);

export default App;