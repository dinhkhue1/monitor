import React from 'react';
import Colors from '../../help/rootcss';
import { Card } from 'antd';
import ItemList from '../common/ItemList'

const data1 = ['UPS - FAC 2', 'UPS - FAC 3', 'UPS - 001'];
const data2 = ['UPS - 003', 'UPS - 004', 'UPS - 005']


const UpsBlock = () => (
  <Card
    title="1.UPS"
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

  >
    <div>
      <ItemList data={data1} color = {Colors.component} />
    </div>
    <div style={{marginTop: 30}}>
      <ItemList data={data2} color = {Colors.component}/>
    </div>
  </Card>
);

export default UpsBlock;