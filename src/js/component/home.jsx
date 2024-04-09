import React, { useState, useEffect } from 'react';

function TrafficLight() {
  const [color, setColor] = useState('red');

  useEffect(() => {
    const interval = setInterval(() => {
      if (color === 'red') {
        setColor('yellow');
      } else if (color === 'yellow') {
        setColor('green');
      } else {
        setColor('red');
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [color]);

  const handleClick = (clickedColor) => {
    setColor(clickedColor);
  };

  return (
    <div className="traffic-light-container">
      <div id="red" className={color === 'red' ? 'light red on' : 'light red'} onClick={() => handleClick('red')}></div>
      <div id="yellow" className={color === 'yellow' ? 'light yellow on' : 'light yellow'} onClick={() => handleClick('yellow')}></div>
      <div id="green" className={color === 'green' ? 'light green on' : 'light green'} onClick={() => handleClick('green')}></div>
    </div>
  );
}

export default TrafficLight;


