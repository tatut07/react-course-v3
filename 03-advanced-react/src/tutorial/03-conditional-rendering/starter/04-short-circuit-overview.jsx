import { useState } from 'react';

const ShortCircuitOverview = () => {
  const [text, setText] = useState('');
  const [name, setName] = useState('susan');

  // const codeExample = text || 'hello world'

  return (
    <>
      <h4>Falsy OR: {text || 'hello world'}</h4>
      <h4>Falsy and: {text && 'hello world'}</h4>
      <h4>Truthy OR: {name || 'hello world'}</h4>
      <h4>Truthy and: {name && 'hello world'}</h4>
    </>
  );
};
export default ShortCircuitOverview;
