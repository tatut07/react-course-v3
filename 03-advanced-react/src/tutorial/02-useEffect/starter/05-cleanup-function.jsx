import { useState, useEffect } from 'react';

const CleanupFunction = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <button type="button" className="btn" onClick={() => setToggle(!toggle)}>
        Toggle
      </button>
      {toggle && <SecondComponent />}
    </>
  );
};

const SecondComponent = () => {
  useEffect(() => {
    const someFunc = () => {
      //some logic
    };
    window.addEventListener('scroll', someFunc);
    return () => window.removeEventListener('scroll', someFunc);
  }, []);
  return <h1>Hello there</h1>;
};

export default CleanupFunction;
