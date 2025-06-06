import React from "react";
import { Layout, Row, Col } from "antd";
import Colors from "../help/rootcss";
import BlockUPS from "../components/Block/UpsBlock";
import BlockSpeaker from "../components/Block/BlockSpeaker";
import BlockEmpty from "../components/Block/BlockEmpty";
import BlockPBX from "../components/Block/BlockPBX";
import BlockNetwork from "../components/Block/BlockNetwork";
import BlockCCTV from "../components/Block/BlockCCTV";
import BlockUPSMes from "../components/Block/BlockUPSMes";
import BlockServerMes from "../components/Block/BlockServerMes";
import BlockNetworkMes from "../components/Block/BlockNetworkMes";
import BlockWelfareNetwork from "../components/Block/BlockWelfareNetwork";
import BlockBirdBackup from "../components/Block/BlockBirdBackup";
import BlockInternetLine from "../components/Block/BlockInternetLine";
import { Card } from 'antd';

const { Content } = Layout;

const App = () => (
  <Layout>
    <Content style={{ minHeight: '100vh', background: Colors.background, padding: 20  }}>
      <Row>
        <Col span={18} 
          style={{
          border: '1px solid #ffffff',
          padding: '8px',
          minHeight: '100vh',
          borderRadius: '4px'
        }}>
          <Row>
            <div
              style={{
                background: '#1f1f1f',
                color: '#ffffff',
                border: '1px solid #ffffff',
                padding: '16px',
                margin: '15px',
                textAlign: 'center',
                borderRadius: '8px'
              }}
            >
              IT ROOM - FACTORY 1
            </div>
          </Row>
          <Row style={{ padding: 20 }} gutter={200} justify="center">
            <Col span={8}>
              <Row gutter={10} align="bottom">
                <Col span={12}>
                  <BlockUPS />
                </Col>
                <Col span={12}>
                  <BlockSpeaker />
                </Col>
              </Row>
            </Col>
            <Col span={8}>
              <Row gutter={10} align="bottom">
                <Col span={12}>
                  <BlockEmpty />
                </Col>
                <Col span={12}>
                  <BlockPBX />
                </Col>
              </Row>
            </Col>
            <Col span={8}>
              <Row gutter={10} align="bottom">
                <Col span={12}>
                  <BlockNetwork />
                </Col>
                <Col span={12}>
                <BlockCCTV />
                </Col>
              </Row>
            </Col>
          </Row>
          <Row>
            <Col></Col>
            <Col></Col>
            <Col></Col>
          </Row>
        </Col>
        <Col span={6}>
          <Row>

          </Row>
          <Row></Row>
        </Col>
        
        
       
        <Col><BlockUPSMes /></Col>
        <Col><BlockServerMes /></Col>
        <Col><BlockNetworkMes /></Col>
        <Col><BlockWelfareNetwork /></Col>
        <Col><BlockBirdBackup /></Col>
        <Col><BlockInternetLine /></Col>
      </Row>
    </Content>
  </Layout>
);

export default App;
