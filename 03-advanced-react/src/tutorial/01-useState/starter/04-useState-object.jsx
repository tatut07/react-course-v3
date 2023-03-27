import { useState } from 'react';

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: 'peter',
    age: 39,
    hobby: 'Squash',
  });

  // const [name, setName] = useState('peter');
  // const [age, setAge] = useState(39);
  // const [hobby, setHobby] = useState('Squash');

  const displayUser = () => {
    setPerson({ name: 'John', age: 36, hobby: 'read' });

    //If we wanted to change just one property:
    // setPerson({...person, name: 'Betty'});

    // setName('John');
    // setAge('36');
    // setHobby('Fishing');
  };
  return (
    <>
      <h3>{person.name}</h3>
      <h3>Age: {person.age}</h3>
      <h3>Enjoys: {person.hobby}</h3>
      <button className="btn" onClick={displayUser}>
        Show John
      </button>
    </>
  );
};

export default UseStateObject;
