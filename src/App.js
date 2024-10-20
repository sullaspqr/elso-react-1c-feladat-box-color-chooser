import React, { useState } from 'react';

const ColorSelector = ({ colors, onSelect }) => {
  return (
    <div>
      {colors.map((color, index) => (
        <button key={index} onClick={() => onSelect(color)} style={{ margin: '5px' }}>
          {color}
        </button>
      ))}
    </div>
  );
};

const ColorBox = ({ color }) => {
  return (
    <div style={{ backgroundColor: color, width: '200px', height: '200px', margin: '20px auto' }}>
      <p style={{ color: '#fff', textAlign: 'center' }}>Selected Color: {color}</p>
    </div>
  );
};

export const App = () => {
  const [selectedColor, setSelectedColor] = useState('white');

  const colors = ['red', 'green', 'blue', 'yellow', 'pink'];

  return (
    <div>
      <h2>Color Picker</h2>
      <ColorSelector colors={colors} onSelect={setSelectedColor} />
      <ColorBox color={selectedColor} />
    </div>
  );
};