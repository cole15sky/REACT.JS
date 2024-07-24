//Props is a special keyword in React that stands for properties and is used for passing data from one component to another.
// Data with props are passed in a unidirectional flow from parent to child.
//Props allow components to be dynamic and reusable by providing them with the necessary data they need to render or function properly.


//-------------Key Points About Props:
//Read-Only: Props are read-only. A component should never modify its own props but can modify its state.
//Data Flow: Props follow a unidirectional data flow, meaning data flows from parent to child components.
//Default Props: You can set default values for props using defaultProps:

function Car(props) {
    return <h2>I am a { props.brand }!</h2>;
  }
  
  function Garage() {
    return (
      <>
        <h1>Who lives in my garage?</h1>
        <Car brand="Ford" />
      </>
    );
  }
  
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<Garage />);