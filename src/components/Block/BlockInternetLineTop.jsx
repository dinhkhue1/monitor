import React from 'react';
import Colors from '../../help/rootcss';
import { Row, Col } from 'antd';
import { GlobalOutlined, LinkOutlined } from '@ant-design/icons';


const data = ['VNPT(main)', 'VNPT(main)'];


const BlockInternetLineTop = () => (
  <Col span={14}>
    {data.map((item, idx) => (
      <Row style={{ margin: 15 }}>
        <Col span={6}>
          <GlobalOutlined style={{ color: '#ffffff', fontSize: '50px' }} />
        </Col>
        <Col span={18}>
          <div style={{
            background: Colors.orange,
            padding: '10px 20px',
            marginBottom: 8,
            borderRadius: 6,
            color: Colors.text,
            fontWeight: 'bold',
            border: '1px solid rgba(255, 255, 255, 0.5)',
            boxShadow: '1px 1px 2px rgba(0,0,0,0.5)',
            cursor: 'move',
          }}>
            {item}
          </div>
        </Col>
      </Row>
    ))}
  </Col>
);

export default BlockInternetLineTop;