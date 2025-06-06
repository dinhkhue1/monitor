import React from 'react';
import Colors from '../../help/rootcss';
import { Card } from 'antd';
import ItemList from '../common/ItemList'

const data1 = ['NVR- 192.168.146.209', 'NVR- 192.168.146.208'];
const data2 = ['PBX SYSTEM', 'PBX SYSTEM', 'PBX SYSTEM'];

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
    }}
  >
    <div style={{margin: '20px 0px 20px 0px'}}><ItemList data={data1} color = {Colors.yellow1} /></div>
    <div style={{margin: '100px 0px 20px 0px'}}><ItemList data={data2} color = {Colors.yellow2} /></div>
  </Card>
);

export default BlockPBX;