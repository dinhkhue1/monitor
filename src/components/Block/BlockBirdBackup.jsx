import React from 'react';
import Colors from '../../help/rootcss';
import { Card } from 'antd';
import ItemList from '../common/ItemList';

const data = [
  {
    label : 'BIRD SERVER-003',
    status: 'START'
  },
  {
    label : 'BIRD SERVER-002',
    status: 'STOP'
  },
  {
    label : 'UPS - 002',
    status: 'START'
  }
]

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

    <div style={{margin: '100px 0px 0px 0px'}}><ItemList data={data} color = {Colors.purple} margin={'50px 10px 10px 10px'} /></div>
  </Card>
);

export default BlockBirdBackup;