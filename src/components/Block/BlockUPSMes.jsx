import React from 'react';
import Colors from '../../help/rootcss';
import { Card } from 'antd';
import ItemList from '../common/ItemList'

const data = ['UPS MES SERVER', 'Packpin', 'Packpin', 'Packpin', 'Packpin', 'Packpin'];

const BlockUPSMes = () => (
  <Card
    title="6.UPS MES SERVER"
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
      height: '100%',
      width: '100%',
      background: 'none',
      border: '1px solid rgba(255, 255, 255, 0.5)',
    }}
  >
    <div
      style={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        margin: '220px 0px 0px 0px'
      }}
    >
      <ItemList data={data} color = {Colors.component}/>
    </div>
  </Card>
);

export default BlockUPSMes;

