import logo from './logo.svg';
import './App.css';
import Form from './components/Form';
import UserList from './components/UserList';
import HooksUseState from './components/Hooks/HooksUseState';
import { useState } from 'react';

function App() {
  const [counter, setCounter] = useState(10);

  const addValue = () => {
    setCounter(counter + 1);
  };

  const removeValue = () => {
    setCounter(counter - 1);
  };

  return (
    <div>
      <h1>Hi, I'm learning Hooks.</h1>
      <h2>Counter value = {counter}.</h2>

      <button onClick={addValue}>Add Value</button>
      <br />
      <button onClick={removeValue}>Remove Value</button>
      <p>Footer: {counter}</p>

      {/* Uncomment the components below if needed */}
      {/* <Form />
      <UserList />
      <HooksUseState /> */}
    </div>
  );
}

export default App;
