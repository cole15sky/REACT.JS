import logo from './logo.svg';
import './App.css';
import Form from './components/Form';
import UserList from './components/UserList';
import { useState } from 'react';

function App() {

  const [counter,setCounter] = useState (10)
  // const counter = 10

  const addValue = ()=> {
    // counter = counter + 1
    // setCounter(counter)
    setCounter(counter + 1)
  }

  const removeValue = () => {
      setCounter (counter -1)
    }
  return (
    <>
    <h1> Hi I'm learning Hooks.</h1>
    <h2> counter values = {counter}.</h2>

    <button onClick={addValue} > Add Value {counter} </button>
    <br/>
    <button onClick={removeValue}> Remove Value {counter} </button>
    <p> footer: {counter} </p>
    </>
  )
}

export default App;
