import React from 'react';

const CounterDisplay = ({ count }) => {
  return (
   
      <div className="counter-circle">
        <div className="counter-circle-line">{count}</div>
      </div>
   
  );
};

export default CounterDisplay;