
import './App.css';
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  let addnum = () => {
    setCount((count) => count + 1);
    setCount((count) => count + 1)
    setCount((count) => count + 1)
  }
  let subnum = () => {
    setCount(count - 1)
  }
  let reset = () => {
    setCount(0)
  }

  return (
    <div className="App">
      <div className="box">
        <p>{count}</p>
      </div>
      <button onClick={addnum} className='add' >Add</button>
      <button onClick={subnum} className='sub'>Sub</button>
      <button onClick={reset} className='sub'>Reset</button>
    </div>
  );
}

export default App;
