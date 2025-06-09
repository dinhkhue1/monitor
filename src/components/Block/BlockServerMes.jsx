import React from 'react';
import Colors from '../../help/rootcss';
import { Card } from 'antd';
import ItemList from '../common/ItemList'


const data1 = [
  {
    label : 'SWITCH L2- MES SERVER',
    status: 'START'
  },
  {
    label : 'SANSWITCH',
    status: 'STOP'
  },
  {
    label : 'SWITCH L3- MES SERVER',
    status: 'STOP'
  }
]
const data2 = [
  {
    label : 'SPC Server',
    status: 'START'
  },
  {
    label : 'Nakivo Server',
    status: 'STOP'
  },
  {
    label : 'VIPM',
    status: 'STOP'
  },
  {
    label : 'EXSI-04',
    status: 'STOP'
  },
  {
    label : 'EXSI-03',
    status: 'STOP'
  },
  {
    label : 'EXSI-02',
    status: 'STOP'
  },
  {
    label : 'EXSI-01',
    status: 'STOP'
  },
  {
    label : 'Storage',
    status: 'STOP'
  }
]

const BlockServerMes = () => (
  <Card
    title="7.SERVER MES"
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
  </Card>
);

export default BlockServerMes;