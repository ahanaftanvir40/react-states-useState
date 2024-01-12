
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



  const [tasks, setTasks] = useState([
    { id: 1, name: 'Do your homework', completed: true },
    { id: 2, name: 'Web dev work', completed: false },
    { id: 3, name: 'Meeting with faculty', completed: false }
  ])



  let taskDel = (taskId) => {
    setTasks(tasks.filter((task) => taskId !== task.id))
  }

  const [show, setShow] = useState(true)

  return (
    <div className="App">
      <div className="box">
        <p>{count}</p>
      </div>
      <button onClick={() => addnum()} className='add' >Add</button>
      <button onClick={subnum} className='sub'>Sub</button>
      <button onClick={reset} className='sub'>Reset</button>

      <h1>Task List</h1>
      <ul>
        <button className='trigger' onClick={() => setShow(!show)}>Toggle</button>
        {show && tasks.map((task) => (
          <li key={task.id} className={task.completed ? 'completed' : 'incomplete'}>
            <span>{task.id} - {task.name}</span>
            <button onClick={() => taskDel(task.id)} className='delete'>Delete</button>
          </li>
        ))}


      </ul>

    </div>
  );
}

export default App;
