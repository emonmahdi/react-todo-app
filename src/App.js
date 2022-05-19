import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import FormHandle from './components/FormHandle/FormHandle';
import Form from './components/Form/Form';
import Home from './components/Home';

function App() { 
  const [count, setCount] = useState(0);
  const [calculate, setCalculate] = useState(0)

  useEffect(() => {
    setCalculate(() => count * 2) 
  },[count]);

  return ( 
    <div className="App"> 
         {/* <FormHandle /> */}
         {/* <Form /> */}
         <Home />
     </div>
  );
}

export default App;
