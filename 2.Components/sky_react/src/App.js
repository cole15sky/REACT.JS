import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
// import Hello from './components/Hello';


function App() {
  return (
    <div className="App"> 
      <Greet name="Aakash" heroName="Spiderman" >
        {/* <p> This is children props</p> */}
        <button> Click me</button>
      </Greet>
      {/* <Greet name="Michael" heroName ="Superman" />
      <Greet name="Colin" heroName="Ironman" /> */}

      <Welcome name="Aakash" heroName="Spiderman" />
      <Welcome name="Jonas" heroName="Batman"/>
      <Welcome name="Keith" heroName="Monkeyman"/>
      {/* <Hello /> */}
    </div>
  );
}

export default App;
