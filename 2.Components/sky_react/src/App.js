import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import AnotherComponent from './components/AnotherComponent';

function App() {
    return (
        <div className="App">
            <Greet />
            <Greet name="Michael" />
            <Greet name="Colin" />
            <Welcome />
            <Hello />
            <AnotherComponent />
        </div>
    );
}

export default App;
