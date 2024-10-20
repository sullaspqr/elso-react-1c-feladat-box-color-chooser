import React, { useState } from 'react';

const ColorSelector = ({ colors, onSelect }) => {
  return (
    <div>
      {colors.map((color, index) => (
        <button key={index} onClick={() => onSelect(color.value)} style={{ margin: '5px' }}>
          {color.name}
        </button>
      ))}
    </div>
  );
};

const ColorBox = ({ colorName, colorValue }) => {
  return (
    <div style={{ backgroundColor: colorValue, width: '200px', height: '200px', margin: '20px auto' }}>
      <p style={{ color: '#fff', textAlign: 'center' }}>Kiválasztott szín: {colorName}</p>
    </div>
  );
};

export const App = () => {
  const [selectedColor, setSelectedColor] = useState({ name: 'fehér', value: 'white' });

  const colors = [
    { name: 'piros', value: 'red' },
    { name: 'zöld', value: 'green' },
    { name: 'kék', value: 'blue' },
    { name: 'sárga', value: 'yellow' },
    { name: 'rózsaszín', value: 'pink' },
  ];

  return (
    <div>
      <h2>Színválasztó</h2>
      <ColorSelector colors={colors} onSelect={(colorValue) => {
        const selected = colors.find(color => color.value === colorValue);
        setSelectedColor(selected);
      }} />
      <ColorBox colorName={selectedColor.name} colorValue={selectedColor.value} />
    </div>
  );
};
