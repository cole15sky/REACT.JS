import logo from './logo.svg';
import './App.css';
import Greet from './components/practice';
import Welcome from './components/welcome';
import Hello from './components/hello';


function App() {
  return( 
    <div className="App">
      <greet/>
      <greet name="Michael" />
      <greet name="Colin"/>
     {/* <Welcome /> */}
     <Hello/>
         </div>
  );
}

export default App;
