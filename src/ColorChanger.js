import React from 'react';

const ColorChanger = ({ change }) => {
  return (
    <div>
      <button onClick={change}>change color</button>
    </div>
  );
};

export default ColorChanger;
