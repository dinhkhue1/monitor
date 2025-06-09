import React from 'react';
import Colors from '../../help/rootcss';
import { Card } from 'antd';
import ItemList from '../common/ItemList'

const data1 = ['AMPLY', 'AMPLY'];
const data2 = ['ZONE CONTROL'];
const data3 = ['AMPLY', 'AMPLY','AMPLY', 'AMPLY','AMPLY', 'AMPLY'];

const BlockSpeaker = () => (
  <Card
    title="2.SPEAKER"
    headStyle={{
      background: Colors.block.ups,
      color: '#1f1f1f',
      textAlign: 'center',
    }}
    bodyStyle={{
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
    <div
      style={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <ItemList data={data1} color={Colors.gray} />
      <div style={{margin: '50px 0px 20px 0px'}}>
        <ItemList data={data2} color={Colors.gray} />
      </div>
      <div style={{ marginTop: 'auto' }}>
        <ItemList data={data3} color={Colors.gray} />
      </div>
    </div>
  </Card>
);

export default BlockSpeaker;