import React from "react";
import { Layout, Row, Col } from "antd";
import Background from '../style/images/slider_img_5.jpg';

const { Content } = Layout;

const Chart = () => (
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
        <Row gutter={10}>
          <Col 
            span={12}
            style={{
              background: 'rgba(255, 255, 255, 0.03)',
              backdropFilter: 'blur(12px)',
              WebkitBackdropFilter: 'blur(12px)',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              borderRadius: '8px',
              padding: '8px',
              minHeight: '55vh',
            }}
          >

          </Col>
          <Col span={6}
            style={{
              background: 'rgba(255, 255, 255, 0.03)',
              backdropFilter: 'blur(12px)',
              WebkitBackdropFilter: 'blur(12px)',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              borderRadius: '8px',
              padding: '8px',
              minHeight: '55vh',
            }}>
              <Row></Row>
              <Row></Row>
              <Row></Row>
              <Row></Row>
          </Col>
          <Col span={6}
            style={{
              background: 'rgba(255, 255, 255, 0.03)',
              backdropFilter: 'blur(12px)',
              WebkitBackdropFilter: 'blur(12px)',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              borderRadius: '8px',
              padding: '8px',
              minHeight: '55vh',
            }}>
              <Row></Row>
              <Row></Row>
              <Row></Row>
              <Row></Row>
          </Col>
        </Row>
        <Row gutter={20}>
          <Col>
              <Row></Row>
              <Row></Row>
          </Col>
          <Col>
              <Row></Row>
              <Row></Row>
          </Col>
          <Col>
              <Row></Row>
              <Row></Row>
          </Col>
          <Col>
              <Row></Row>
              <Row></Row>
          </Col>
        </Row>
    </Content>
  </Layout>
);

export default Chart;