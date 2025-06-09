import React from 'react';
import Colors from '../../help/rootcss';
import { Card } from 'antd';
import ItemList from '../common/ItemList'

const data1 = [
  {
    label : 'UPS - FAC 2',
    status: 'START'
  },
  {
    label : 'UPS - FAC 3',
    status: 'STOP'
  },
  {
    label : 'UPS - 001',
    status: 'STOP'
  }
]

const data2 = [
  {
    label : 'UPS - 003',
    status: 'START'
  },
  {
    label : 'UPS - 004',
    status: 'START'
  },
  {
    label : 'UPS - 005',
    status: 'START'
  }
]



const UpsBlock = () => (
  <Card
    title="1.UPS"
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
      background: 'none',
    }}
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