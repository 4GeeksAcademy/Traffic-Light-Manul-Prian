import React, { useState, useEffect } from 'react';

function TrafficLight() {
  const [color, setColor] = useState('red');
  const [showPurple, setShowPurple] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (color === 'red') {
        setColor('yellow');
      } else if (color === 'yellow') {
        setColor('green');
      } else if (color === 'green') {
        setColor(showPurple ? 'purple' : 'red');
      } else {
        setColor('red');
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [color, showPurple]);

  const handleClick = (clickedColor) => {
    setColor(clickedColor);
  };

  const addPurple = () => {
    setShowPurple(true);
  };

  const removePurple = () => {
    setShowPurple(false);
  };

  return (
    <div>
      <div className="traffic-light-container">
        <div id="red" className={color === 'red' ? 'light red on' : 'light red'} onClick={() => handleClick('red')}></div>
        <div id="yellow" className={color === 'yellow' ? 'light yellow on' : 'light yellow'} onClick={() => handleClick('yellow')}></div>
        <div id="green" className={color === 'green' ? 'light green on' : 'light green'} onClick={() => handleClick('green')}></div>
        {showPurple && <div id="purple" className={color === 'purple' ? 'light purple on' : 'light purple'} onClick={() => handleClick('purple')}></div>}
      </div>
      <button onClick={addPurple}>Que es esto?</button>
      <button onClick={removePurple}>Nha, no me gusta</button>
    </div>
  );
}

export default TrafficLight;




