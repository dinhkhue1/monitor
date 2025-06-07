import React from 'react';
import Colors from '../../help/rootcss';
import { Card } from 'antd';

const data = ['SWITCH L2 - FLOOR 4th', 'SWITCH L2 - FLOOR 3rd', 'SWITCH L2 - FLOOR 2nd'];


const BlockWelfareNetwork = () => (
  <Card
    title="11. NETWORK"
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
      width: '100%',
      height: '100%',
      background: '#1f1f1f',
    }}
  >
    {data.map((item, idx) => (
      <div
        key={idx}
        style={{
          background: Colors.orange,
          padding: '8px',
          margin: 8,
          borderRadius: 6,
          color: Colors.text,
          border: '1px solid white',
          boxShadow: '1px 1px 2px rgba(0,0,0,0.5)',
          cursor: 'move',
          marginTop: idx === 0 ? 50 : 8
        }}
      >
        {item}
      </div>
    ))}
  </Card>
);

export default BlockWelfareNetwork;