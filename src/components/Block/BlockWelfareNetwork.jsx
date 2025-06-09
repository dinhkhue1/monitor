import React from 'react';
import Colors from '../../help/rootcss';
import { Card } from 'antd';
import ItemList from '../common/ItemList'

const data = [
  {
    label : 'SWITCH L2 - FLOOR 4th',
    status: 'START'
  },
  {
    label : 'SWITCH L2 - FLOOR 3rd',
    status: 'STOP'
  },
  {
    label : 'SWITCH L2 - FLOOR 2nd',
    status: 'STOP'
  }
]

const BlockWelfareNetwork = () => (
  <Card
    title="11. NETWORK"
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
    }}
  >
    <div
      style={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        margin: '50px 0px 0px 0px'
      }}
    >
      <ItemList data={data} color = {Colors.component}/>
    </div>
  </Card>
);

export default BlockWelfareNetwork;