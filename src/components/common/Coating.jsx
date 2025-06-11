import ReactECharts from 'echarts-for-react';
import { Layout, Row, Col } from "antd";

const GaugeChart = ({ value }) => {
  const getColorByValue = (val) => {
    if (val <= 33) return '#00ff99';  // safe
    if (val <= 66) return '#ffcc00';  // warning
    return '#ff3333';                 // danger
  };
  const unit = {
    temperature: '°C',
    humidity: '%'
  }
  const createGaugeOption = (value, unit) => {
    const textColor = getColorByValue(value);

    return {
      series: [
        // Outer ring - level
        {
          type: 'gauge',
          startAngle: 180,
          endAngle: 0,
          min: 0,
          max: 100,
          radius: '90%',
          axisLine: {
            lineStyle: {
              width: 7,
              color: [
                [0.33, '#00ff99'],
                [0.66, '#ffcc00'],
                [1, '#ff3333'],
              ],
            },
          },
          pointer: { show: false },
          progress: { show: false },
          axisTick: { show: false },
          splitLine: { show: false },
          axisLabel: { show: false },
          detail: { show: false },
        },
        // Inner progress + value
        {
          type: 'gauge',
          startAngle: 180,
          endAngle: 0,
          min: 0,
          max: 100,
          radius: '70%',
          axisLine: {
            lineStyle: {
              width: 20,
              color: [[1, '#444']],
            },
          },
          pointer: { show: false },
          progress: {
            show: true,
            width: 20,
            roundCap: true,
            itemStyle: {
              color: 'auto',
            },
          },
          axisTick: { show: false },
          splitLine: { show: false },
          axisLabel: { show: false },
          detail: {
            valueAnimation: true,
            fontSize: 35,
            offsetCenter: [0, '30%'],
            formatter: `{value} ${unit}`,
            color: textColor,
          },
          data: [{ value }],
        },
      ],
    };
  };

  return (
    <div
      style={{
        background: 'rgba(255, 255, 255, 0.03)',
        backdropFilter: 'blur(12px)',
        border: '1px solid rgba(255, 255, 255, 0.15)',
        borderRadius: '8px',
        padding: '8px',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <div style={{ flexGrow: 1 }} />
  
      <div style={{ borderRadius: 10, color: '#fff', width: '100%' }}>
        <h3 style={{ textAlign: 'center', borderBottom: '1px solid gray' }}>COATING</h3>
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: 20 }}>
          <div>
            <h4 style={{ textAlign: 'center' }}>temperature</h4>
            <ReactECharts option={createGaugeOption(value, unit.temperature)} style={{ height: 250, width: 300 }} />
          </div>
          <div>
            <h4 style={{ textAlign: 'center' }}>humidity</h4>
            <ReactECharts option={createGaugeOption(value, unit.humidity)} style={{ height: 250, width: 300 }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GaugeChart;