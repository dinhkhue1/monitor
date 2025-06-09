import React from 'react';
import Colors from '../../help/rootcss';
import { Card } from 'antd';
import ItemList from '../common/ItemList'

const data1 = [
  {
    label : 'NVR- 192.168.146.209',
    status: 'START'
  },
  {
    label : 'NVR- 192.168.146.208',
    status: 'STOP'
  }
]
const data2 = [
  {
    label : 'PBX SYSTEM',
    status: 'START'
  },
  {
    label : 'PBX SYSTEM',
    status: 'STOP'
  },
  {
    label : 'PBX SYSTEM',
    status: 'STOP'
  }
]

const BlockPBX = () => (
  <Card
    title="4. PBX"
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
    <div style={{margin: '20px 0px 20px 0px'}}><ItemList data={data1} color = {Colors.yellow1} /></div>
    <div style={{margin: '100px 0px 20px 0px'}}><ItemList data={data2} color = {Colors.yellow2} /></div>
  </Card>
);

export default BlockPBX;