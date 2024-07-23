import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
// import Welcome from './components/Welcome';
// import Hello from './components/Hello';


function App() {
  return (
    <div className="App"> 
      <Greet name="Aakash" heroName="Spiderman" >
        <p> This is children props</p>
      </Greet>
      <Greet name="Michael" heroName ="Superman" />
      <Greet name="Colin" heroName="Ironman" />
      {/* <Welcome />
      <Hello /> */}
    </div>
  );
}

export default App;
