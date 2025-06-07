import React from 'react';
import Colors from '../../help/rootcss';
import { Card } from 'antd';

const data = ['UPS - FAC 2', 'UPS - FAC 3', 'UPS - 001', 'UPS - 004', 'UPS - 005', 'UPS - 001', 'UPS - 004', 'UPS - 005'];


const BlockEmpty = () => (
  <Card
    title="3. EMPTY"
    headStyle={{
      background: Colors.block.ups,
      color: '#1f1f1f',
      textAlign: 'center',
    }}
    bodyStyle={{
      background: '#1f1f1f',
      color: Colors.text,
      padding: 0
    }}
    bordered={true}
    style={{
      height: '100%',
      width: '100%',
      background: '#1f1f1f',
    }}
  >
    {data.map((item, idx) => (
      <div
        key={idx}
        style={{
          background: Colors.component,
          padding: '8px',
          margin: 8,
          borderRadius: 6,
          color: Colors.text,
          border: '1px solid white',
          boxShadow: '1px 1px 2px rgba(0,0,0,0.5)',
          cursor: 'move',
        }}
      >
        {item}
      </div>
    ))}
  </Card>
);

export default BlockEmpty;