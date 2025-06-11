import React from "react";
import { Layout, Row, Col } from "antd";
import Background from '../style/images/slider_img_5.jpg';
import CoatingDashboard from './common/Coating';
import ReactECharts from 'echarts-for-react';
import { Collapse } from 'antd';

const { Panel } = Collapse;

const { Content } = Layout;
const data = {
  top: [18, 25, 75, 30],
  bottom: [50, 25, 90, 30]
}

const chartData = [
  { time: '00:00', temp: 25, hum: 90 },
  { time: '01:00', temp: 26, hum: 49 },
  { time: '02:00', temp: 27, hum: 48 },
  { time: '03:00', temp: 26, hum: 47 },
  { time: '04:00', temp: 25, hum: 45 },
];

// Biểu đồ line sử dụng ECharts
const getLineChartOption = (data) => ({
  grid: {
    left: '8%',
    right: '8%',
    top: '10%',
    bottom: '15%',
  },
  xAxis: {
    type: 'category',
    data: data.map(d => d.time),
    axisLine: { lineStyle: { color: '#aaa' } },
    axisLabel: { color: '#aaa' },
  },
  yAxis: {
    type: 'value',
    axisLine: { lineStyle: { color: '#aaa' } },
    axisLabel: { color: '#aaa' },
    splitLine: { lineStyle: { color: '#444' } }
  },
  series: [
    {
      name: 'Temp',
      data: data.map(d => d.temp),
      type: 'line',
      smooth: true,
      lineStyle: { color: '#FFA500' },
      showSymbol: false,
    },
    {
      name: 'Humidity',
      data: data.map(d => d.hum),
      type: 'line',
      smooth: true,
      lineStyle: { color: '#00BFFF' },
      showSymbol: false,
    },
  ],
  tooltip: {
    trigger: 'axis',
  },
  legend: {
    data: ['Temp', 'Humidity'],
    textStyle: { color: '#fff' },
  },
  backgroundColor: 'transparent',
});

// ================= ChartBox Component =================

const ChartBox = ({ title }) => (
  <div style={{ marginBottom: 16 }}>
    <div style={{ display: 'flex', justifyContent: 'space-between', color: '#fff', marginBottom: 8 }}>
      <span>+ {title}</span>
      <span>
        25 <span role="img" aria-label="temp">🥵</span> 50 <span role="img" aria-label="hum">💧</span>
      </span>
    </div>
    <ReactECharts
      option={getLineChartOption(chartData)}
      style={{ height: 200, width: '100%' }}
      notMerge={true}
      lazyUpdate={true}
    />
  </div>
);

// ================= SummaryBox Component =================

const SummaryBox = ({ factory, lines }) => {
  return (
    <div style={{ color: '#fff', marginBottom: 16 }}>
      {/* Tiêu đề nhà máy */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          padding: '4px 0',
          fontWeight: 'bold',
        }}
      >
        <span>+ {factory}</span>
        <span>
          25 <span role="img" aria-label="temp">🥵</span>{' '}
          50 <span role="img" aria-label="hum">💧</span>
        </span>
      </div>

      {/* Danh sách line */}
      {lines.map((line, index) => (
        <div
          key={index}
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            padding: '4px 0 4px 16px',
            fontSize: 14,
            borderBottom: '1px solid rgba(255,255,255,0.1)',
          }}
        >
          <span>● {line}</span>
          <span>
            25 <span role="img" aria-label="temp">🥵</span>{' '}
            50 <span role="img" aria-label="hum">💧</span>
          </span>
        </div>
      ))}
    </div>
  );
};


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
      <Row gutter={[10, 10]} style={{ minHeight: '55vh' }}>
        <Col span={12}>
          <div style={{
            background: 'rgba(255, 255, 255, 0.03)',
            backdropFilter: 'blur(12px)',
            border: '1px solid rgba(255, 255, 255, 0.15)',
            borderRadius: '8px',
            padding: '8px',
            height: '100%',
          }}>
            {/* Nội dung khác */}
          </div>
        </Col>

        <Col span={6}>
          <div style={{
            background: 'rgba(255, 255, 255, 0.03)',
            backdropFilter: 'blur(12px)',
            border: '1px solid rgba(255, 255, 255, 0.15)',
            borderRadius: '8px',
            padding: '8px',
            height: '100%',
            display: 'flex',
            flexDirection: 'column'
          }}>
            <h3 style={{ textAlign: 'center', borderBottom: '1px solid gray', color: '#fff' }}>CHART</h3>
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              {[1, 2, 3].map(i => (
                <div key={i} style={{ flex: 1, display: 'flex', flexDirection: 'column', marginBottom: i !== 3 ? '8px' : '0' }}>
                  <ChartBox title={`FACTORY ${i}`} />
                </div>
              ))}
            </div>
          </div>
        </Col> 
        <Col span={6}>
          <div style={{
            background: 'rgba(255, 255, 255, 0.03)',
            backdropFilter: 'blur(12px)',
            border: '1px solid rgba(255, 255, 255, 0.15)',
            borderRadius: '8px',
            padding: '8px',
            height: '100%',
            display: 'flex',
            flexDirection: 'column'
          }}>
            <h3 style={{ textAlign: 'center', borderBottom: '1px solid gray', color: '#fff' }}>SUMMARY</h3>
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              {[1, 2, 3].map(i => (
                <div key={i} style={{ flex: 1, display: 'flex', flexDirection: 'column', marginBottom: i !== 3 ? '8px' : '0' }}>
                  <SummaryBox factory={`FACTORY ${i}`} lines={["SMT", "ATC", "VCM"]} />
                </div>
              ))}
            </div>
          </div>
        </Col>
      </Row>
      <Row style={{ marginTop: '10px' }}>
        <Col
          span={24}
        >
          <Row gutter={[10, 10]}>
            {data.top.map((item, idx) => (
              <Col span={6}><CoatingDashboard value={item} /></Col>
            ))}
          </Row>
        </Col>

      </Row>
      <Row style={{ marginTop: '10px' }}>
        <Col
          span={24}
        >
          <Row gutter={[10, 10]}>
            {data.bottom.map((item, idx) => (
              <Col span={6}><CoatingDashboard value={item} /></Col>
            ))}
          </Row>
        </Col>

      </Row>
    </Content>
  </Layout>
);

export default Chart;