import React from 'react';
import Colors from '../../help/rootcss';
import { Card } from 'antd';

const data = ['BIRD SERVER-003', 'BIRD SERVER-002', 'UPS - 002'];


const BlockBirdBackup = () => (
  <Card
    title="12. BIRD BACUP"
    headStyle={{
      background: Colors.block.ups,
      color: '#1f1f1f',
      textAlign: 'center',
    }}
    bodyStyle={{
      background: 'none',
      color: Colors.text,
      padding: 0
    }}
    bordered={true}
    style={{
      width: '100%',
      height: '100%',
      background: 'none',
      border: '1px solid rgba(255, 255, 255, 0.5)',

    }}
  >
    {data.map((item, idx) => (
      <div
        key={idx}
        style={{
          background: Colors.purple,
          padding: '8px',
          margin: '50px 10px 10px 10px',
          borderRadius: 6,
          color: Colors.text,
          border: '1px solid rgba(255, 255, 255, 0.5)',
          boxShadow: '1px 1px 2px rgba(0,0,0,0.5)',
          cursor: 'move',
        }}
      >
        {item}
      </div>
    ))}
  </Card>
);

export default BlockBirdBackup;