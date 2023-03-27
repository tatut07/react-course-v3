import { useState } from 'react';

const UseStateBasics = () => {
  // [value, function]
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <>
      <h4>You clicked {count} times!</h4>
      <button type="button" className="btn" onClick={handleClick}>
        Click me!
      </button>
    </>
  );
};

export default UseStateBasics;
