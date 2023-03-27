import { useState } from 'react';

const UseStateGotcha = () => {
  const [value, setValue] = useState(0);

  const handleClick = () => {
    // setValue((currentState) => {
    //   const newState = currentState + 1;
    //   return newState;
    // });

    setTimeout(() => {
      setValue((currentState) => {
        return currentState + 1;
      });
    }, 3000);
  };
  return (
    <>
      <h1>{value}</h1>
      <button type="button" className="btn" onClick={handleClick}>
        Increase
      </button>
    </>
  );
};

export default UseStateGotcha;
