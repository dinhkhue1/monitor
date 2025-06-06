import React from 'react';
import Colors from '../../help/rootcss';
import { Card } from 'antd';

const data = ['UPS - FAC 2', 'UPS - FAC 3', 'UPS - 001', 'UPS - 004', 'UPS - 005'];


const BlockServerMes = () => (
  <Card
    title="1.UPS"
    headStyle={{
      background: Colors.block.ups,
      color: '#1f1f1f',
      textAlign: 'center',
    }}
    bodyStyle={{
      background: '#1f1f1f',
      color: Colors.text,
    }}
    bordered={true}
  >
    {data.map((item, idx) => (
      <div
        key={idx}
        style={{
          background: Colors.component,
          padding: '8px 12px',
          marginBottom: 8,
          borderRadius: 6,
          color: Colors.text,
          fontWeight: 'bold',
          border: '1px solid white',
          boxShadow: '1px 1px 2px rgba(0,0,0,0.5)',
          cursor: 'move', // giống biểu tượng cross cursor của bạn
        }}
      >
        {item}
      </div>
    ))}
  </Card>
);

export default BlockServerMes;