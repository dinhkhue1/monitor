import React from 'react';
import Colors from '../../help/rootcss';
import { Card } from 'antd';
import Window from '../../style/images/Window.png';

const BlockEmpty = () => (
  <Card
    title="3.EMPTY"
    headStyle={{
      background: Colors.block.ups,
      color: '#1f1f1f',
      textAlign: 'center',
    }}
    bodyStyle={{
      background: '#1f1f1f',
      padding: 0,
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
    }}
    bordered
    style={{
      height: '100%',
      width: '100%',
      background: '#1f1f1f',
      display: 'flex',
      flexDirection: 'column',
      border: '1px solid rgba(255, 255, 255, 0.5)',
    }}
  >
    <div style={{ flex: 1, position: 'relative' }}>
      <img
        src={Window}
        alt="Empty Rack"
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0
        }}
      />
    </div>
  </Card>
);

export default BlockEmpty;