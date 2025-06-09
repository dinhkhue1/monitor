import React from 'react';
import Colors from '../../help/rootcss';
import { Card } from 'antd';
import ItemList from '../common/ItemList'

const data1 = [
  {
    label : 'FIREWALL ( 150.254)',
    status: 'START'
  },
  {
    label : 'FIREWALL ( 204.1)',
    status: 'STOP'
  }
]

const data2 = [
  {
    label : 'DNS',
    status: 'START'
  },
  {
    label : 'EPP-SERVER',
    status: 'STOP'
  },
  {
    label : 'MESDB OLD-SERVE',
    status: 'START'
  },
  {
    label : 'MESAPP OLD-SERVER',
    status: 'START'
  },
  {
    label : 'ERPAPP OLD -SERVER',
    status: 'START'
  },
  {
    label : 'MESDB OLD-SERVE',
    status: 'START'
  }
]

const data3 = [
  {
    label : 'SWITCH L3- LINE',
    status: 'START'
  },
  {
    label : 'SWITCH L3- OFFICE',
    status: 'STOP'
  }
]
const BlockNetwork = () => (
  <Card
    title="5. NETWORK"
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
    <div><ItemList data={data1} color = {Colors.orange} /></div>
    <div><ItemList data={data2} color = {Colors.purple} /></div>
    <div><ItemList data={data3} color = {Colors.orange} /></div>
  </Card>
);

export default BlockNetwork;