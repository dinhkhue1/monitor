import React from 'react';
import Colors from '../../help/rootcss';
import { Button, Row, Col } from "antd";

const blinkAnimation = {
  animation: 'blink 1s infinite',
};

const styleSheet = `
@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.3; }
}
`;

// Inject keyframes vào DOM
const BlinkStyle = () => <style>{styleSheet}</style>;

const ItemList = ({ data, color, margin = '5px' }) => {
  const getStatusColor = (status) => {
    return status === 'START' ? 'green' : 'red';
  };


  return (
    <>
      <BlinkStyle />
    <div style={{ width: '100%' }}>
      {data.map((item, idx) => (
        <Row
          key={idx}
          align="middle"
          justify="space-between"
          style={{
            background: color,
            padding: '8px 12px',
            margin,
            borderRadius: 6,
            color: Colors.text,
            border: '1px solid rgba(255, 255, 255, 0.5)',
            boxShadow: '1px 1px 2px rgba(0,0,0,0.5)',
            cursor: 'pointer',
          }}
        >
          <Col>{item.label}</Col>
          <Col>
            <Button
              shape="circle"
              size="small"
              style={{
                backgroundColor: getStatusColor(item.status),
                width: 16,
                height: 25,
                ...(item.status === 'START' ? {} : blinkAnimation),
              }}
            />
          </Col>
        </Row>
      ))}
    </div>
    </>
  );
};


export default ItemList;