import React from 'react';
import Colors from '../../help/rootcss';

const ItemList = ({ data, color, margin= '5px' }) => {
  return (
    <div>
      {data.map((item, idx) => (
        <div
          key={idx}
          style={{
            background: color,
            padding: '8px',
            margin,
            borderRadius: 6,
            color: Colors.text,
            border: '1px solid white',
            boxShadow: '1px 1px 2px rgba(0,0,0,0.5)',
            cursor: 'move',
          }}
        >
          {item}
        </div>
      ))}
    </div>
  );
};

export default ItemList;