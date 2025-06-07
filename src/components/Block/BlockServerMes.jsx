import React from 'react';
import Colors from '../../help/rootcss';
import { Card } from 'antd';
import ItemList from '../common/ItemList'

const data1 = ['SWITCH L2- MES SERVER', 'SANSWITCH', 'SWITCH L3- MES SERVER'];
const data2 = ['SPC Server', 'Nakivo Server', 'VIPM', 'EXSI-04', 'EXSI-03', 'EXSI-02', 'EXSI-01', 'Storage'];

const BlockServerMes = () => (
  <Card
    title="7.SERVER MES"
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
      width: '100%',
      background: '#1f1f1f',
    }}
  >
    <div><ItemList data={data1} color = {Colors.orange} /></div>
    <div><ItemList data={data2} color = {Colors.purple} /></div>
  </Card>
);

export default BlockServerMes;