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
import BlockInternetLineTop from "./Block/BlockInternetLineTop";
import BlockInternetLineDown from "./Block/BlockInternetLineDown";
import { Card } from 'antd';
import Background from '../style/images/slider_img_5.jpg';

const { Content } = Layout;

const App = () => (
  <Layout>
    <Content
      style={{
        minHeight: '100vh',
        backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${Background})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        padding: 20,
      }}
    >
      <Row gutter={20} >
        <Col span={18}
          style={{
            background: 'rgba(255, 255, 255, 0.03)',
            backdropFilter: 'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)',
            border: '1px solid rgba(255, 255, 255, 0.15)',
            borderRadius: '8px',
            padding: '8px',
            minHeight: '100vh',

          }}>
          <Row>
            <div
              style={{

                color: '#ffffff',
                border: '1px solid rgba(255, 255, 255, 0.4)',
                padding: '16px',
                margin: '15px',
                textAlign: 'center',
                borderRadius: '8px',
                fontSize: '30px'
              }}
            >
              IT ROOM - FACTORY 1
            </div>
          </Row>
          <Row style={{ padding: 20 }} gutter={200} justify="center">
            <Col span={8}>
              <Row gutter={10} style={{ display: 'flex' }}>
                <Col
                  span={12}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-end',
                  }}
                >
                  <BlockUPS />
                </Col>
                <Col
                  span={12}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-end',
                    minHeight: '570px',
                    alignItems: 'stretch',
                  }}
                >
                  <BlockSpeaker />
                </Col>
              </Row>
            </Col>

            <Col span={8}>
              <Row gutter={10} style={{ display: 'flex' }}>
                <Col
                  span={12}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    minHeight: '570px',
                    justifyContent: 'flex-end',
                  }}
                >
                  <BlockEmpty />
                </Col>
                <Col
                  span={12}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-end',
                    minHeight: '570px',
                    alignItems: 'stretch',
                  }}
                >
                  <BlockPBX />
                </Col>
              </Row>
            </Col>

            <Col span={8}>
              <Row gutter={10} style={{ display: 'flex' }}>
                <Col
                  span={12}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-end',
                    minHeight: '570px',
                    alignItems: 'stretch',
                  }}
                >
                  <BlockNetwork />
                </Col>
                <Col
                  span={12}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-end',
                    minHeight: '570px',
                    alignItems: 'stretch',
                  }}
                >
                  <BlockCCTV />
                </Col>
              </Row>
            </Col>
          </Row>
          <Row style={{ padding: '100px 10px 10px 20px', display: 'flex' }} gutter={200} justify="center" align="bottom">
            <Col span={8} style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-end',

            }}>
              <Row gutter={20}>
                <Col span={4} style={{ background: Colors.block.ups, textAlign: 'center', padding: 30, margin: 10 }}>
                  BIO SERVER
                </Col>
                <Col span={4} style={{ background: Colors.block.ups, textAlign: 'center', padding: 30, margin: 10 }}>
                  NAS BACKUP
                </Col>
                <Col span={4} style={{ background: Colors.block.ups, textAlign: 'center', padding: 30, margin: 10 }}>
                  NAS FILE SERVER
                </Col>
                <Col span={4} style={{ background: Colors.block.ups, textAlign: 'center', padding: 30, margin: 10 }}>
                  NAS - SPC BACKUP
                </Col>
              </Row>
            </Col>
            <Col span={8} >
              <Row gutter={10} style={{ display: 'flex' }}>
                <Col
                  span={12}>
                </Col>
                <Col
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-end',
                    minHeight: '570px',
                    alignItems: 'stretch',
                  }}
                  span={12}
                >
                  <BlockUPSMes />
                </Col>
              </Row>
            </Col>
            <Col span={8}>
              <Row gutter={10} style={{ display: 'flex' }}>
                <Col
                  span={12}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    minHeight: '570px',
                    alignItems: 'stretch',
                    justifyContent: 'flex-end',
                  }}
                >
                  <BlockServerMes />
                </Col>
                <Col
                  span={12}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-end',
                    minHeight: '570px',
                    alignItems: 'stretch',
                  }}
                >
                  <BlockNetworkMes />
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
        <Col span={6}>
          <Row>
            <Col
              span={24}
              style={{

                minHeight: '52vh',
                background: 'rgba(255, 255, 255, 0.03)',
                backdropFilter: 'blur(12px)',
                WebkitBackdropFilter: 'blur(12px)',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                borderRadius: '8px',
                padding: '8px',
              }}
            >
              <Row>
                <div
                  style={{

                    color: '#ffffff',
                    border: '1px solid rgba(255, 255, 255, 0.4)',
                    padding: '16px',
                    margin: '15px',
                    textAlign: 'center',
                    borderRadius: '8px',
                    fontSize: '30px'
                  }}
                >
                  IT ROOM - WELFARE
                </div>
              </Row>
              <div style={{ flexGrow: 1, display: 'flex', alignItems: 'flex-end', margin: 10, paddingTop: '20vh' }}>
                <Row style={{ width: '100%', padding: '0px 20px 30px 20px' }} justify="center">
                  <Col span={24}>
                    <Row gutter={10}>
                      <Col
                        span={12}
                        style={{
                          display: 'flex',
                          flexDirection: 'column',
                          justifyContent: 'flex-end',
                          minHeight: '350px'
                        }}
                      >
                        <BlockWelfareNetwork />
                      </Col>
                      <Col
                        span={12}
                        style={{
                          display: 'flex',
                          flexDirection: 'column',
                          justifyContent: 'flex-end',
                        }}
                      >
                        <BlockBirdBackup />
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>

          <Row style={{ marginTop: 10 }}>
            <Col span={24} style={{
              background: 'rgba(255, 255, 255, 0.03)',
              backdropFilter: 'blur(12px)',
              WebkitBackdropFilter: 'blur(12px)',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              borderRadius: '8px',
              padding: '8px',
              minHeight: '48vh',

            }}>
              <Row>
                <div
                  style={{

                    color: '#ffffff',
                    border: '1px solid rgba(255, 255, 255, 0.4)',
                    padding: '16px',
                    margin: '15px',
                    textAlign: 'center',
                    borderRadius: '8px',
                    fontSize: '30px'
                  }}
                >
                  INTERNET
                </div>
              </Row>
              <Row style={{

                color: '#ffffff',
                border: '1px dashed #ffffff',
                padding: '16px',
                margin: '20px',
                borderRadius: '8px'
              }}
                justify="center" align="middle">
                <BlockInternetLineTop />
              </Row>
              <Row
                style={{

                  color: '#ffffff',
                  border: '1px dashed #ffffff',
                  padding: '16px',
                  margin: '20px',
                  borderRadius: '8px'
                }}
                justify="center" align="middle">
                <BlockInternetLineDown />
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </Content>

    {/* <Col><BlockWelfareNetwork /></Col>
    <Col><BlockBirdBackup /></Col>
    <Col><BlockInternetLine /></Col> */}
  </Layout>
);

export default App;
