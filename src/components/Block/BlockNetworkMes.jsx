import React from 'react';
import Colors from '../../help/rootcss';
import { Card } from 'antd';
import ItemList from '../common/ItemList'; 

const data1 = [
  {
    label : 'SWITCH L3- MES NETWORK',
    status: 'START'
  }
]
const data2 = [
  {
    label : 'UPS MES NETWORK',
    status: 'START'
  },
  {
    label : 'Packpin',
    status: 'STOP'
  },
  {
    label : 'Packpin',
    status: 'STOP'
  }
]


const BlockNetworkMes = () => (
  <Card
    title="8. NETWORK MES"
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
    }}
  >
    <div style={{margin: '260px 0px 0px 0px'}}><ItemList data={data1} color = {Colors.orange} /></div>
    <div style={{margin: '80px 0px 0px 0px'}}><ItemList data={data2} color = {Colors.component} /></div>
  </Card>
);

export default BlockNetworkMes;