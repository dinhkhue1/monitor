import React from 'react';
import Colors from '../../help/rootcss';
import { Card } from 'antd';
import ItemList from '../common/ItemList'

const data1 = ['FIREWALL ( 150.254)', 'FIREWALL ( 204.1)'];
const data2 = [ 'DNS', 'EPP-SERVER', 'EPS-SERVER', 'MESDB OLD-SERVER', 'MESAPP OLD-SERVER', 'ERPDB OLD -SERVER', 'ERPAPP OLD -SERVER'];
const data3 = ['SWITCH L3- LINE','SWITCH L3- OFFICE'];
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
    }}
  >
    <div><ItemList data={data1} color = {Colors.orange} /></div>
    <div><ItemList data={data2} color = {Colors.purple} /></div>
    <div><ItemList data={data3} color = {Colors.orange} /></div>
  </Card>
);

export default BlockNetwork;