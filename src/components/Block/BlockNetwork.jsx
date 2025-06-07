import React from 'react';
import Colors from '../../help/rootcss';
import { Card } from 'antd';

const data1 = ['UPS - FAC 2'];
const data2 = [ 'UPS - 001', 'UPS - 004', 'UPS - 005', 'UPS - 001'];
const data3 = ['UPS - FAC 2','UPS - 005'];
const BlockNetwork = () => (
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
      padding: 0
    }}
    bordered={true}
    style={{
      height: '100%',
      width: '100%'
    }}
  >
    {data1.map((item, idx) => (
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
        }}
      >
        {item}
      </div>
    ))}
    {data2.map((item, idx) => (
      <div
        key={idx}
        style={{
          background: Colors.purple,
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
    {data3.map((item, idx) => (
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
        }}
      >
        {item}
      </div>
    ))}
  </Card>
);

export default BlockNetwork;