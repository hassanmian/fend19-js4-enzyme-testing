import { useState } from 'react'
import logo from './logo.svg';
import './App.css';
import Button from './components/Button';

function App() {
  const [counter, setCounter] = useState(0)
  return (
    <div>
     <h1>Welcome</h1>
     <div className="counter">{counter}</div>
     <button className="increment" onClick={() => setCounter(counter + 1)}>Increment</button>
     <button className="decrement" onClick={() => setCounter(counter - 1)}>Decrement</button>

     <Button prepend="Pre" title="Hello" append="Append" subtitle="Sub" />
    </div>
  );
}

export default App;
