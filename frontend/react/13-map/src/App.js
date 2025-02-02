import { useState } from 'react';
import './App.css';
import Button from './components/Button';
import Counter from './components/Counter';

const buttonTexts = ['push me', 'click me', 'button me', 'touch me'];

function App() {
  console.log('App rendered');
  const [count, setCount] = useState(0);
  const incrementCount = () => {
    setCount(count + 1);
  };
  return (
    <div className="App">
      <Counter count={count} />
      {buttonTexts.map((text, key)=>{
        return <Button onClick={() => incrementCount} text={text} key={key} />
      })}
    </div>
  );
}

export default App;
