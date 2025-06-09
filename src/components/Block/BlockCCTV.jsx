import React from 'react';
import Colors from '../../help/rootcss';
import { Card } from 'antd';
import ItemList from '../common/ItemList'

const data = [
  {
    label : 'NVR- 192.168.146.207',
    status: 'STOP'
  },
  {
    label : 'NVR- 192.168.146.206',
    status: 'START'
  },
  {
    label : 'NVR- 192.168.146.202',
    status: 'STOP'
  },
  {
    label : 'NVR- 192.168.146.200',
    status: 'START'
  },
  {
    label : 'NVR- 192.168.146.203',
    status: 'START'
  },
  {
    label : 'NVR- 192.168.146.204',
    status: 'START'
  }
]
const BlockCCTV = () => (
  <Card
    title="6. CCTV"
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
    <div style={{margin: '100px 0px 0px 0px'}}><ItemList data={data} color = {Colors.yellow1} margin={'20px 5px 0px 5px'} /></div>
  </Card>
);

export default BlockCCTV;