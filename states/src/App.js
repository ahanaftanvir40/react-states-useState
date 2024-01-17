
import './App.css';
import { useState } from 'react';
import { Header } from './components/Header';
import { Counter } from './components/Counter';
import { TaskList } from './components/TaskList';
import { Footer } from './components/Footer'
import { AddTask } from './components/AddTask'


function App() {

  const [tasks, setTasks] = useState([])


  const info = 'props drilling'




  return (
    <div className="App">

      <Header />
      <Counter title='this is a prop' />
      <main>
        <AddTask tasks={tasks} setTasks={setTasks} />
        <TaskList info={info} tasks={tasks} setTasks={setTasks} />
      </main>

      <Footer />



    </div>
  );
}

export default App;
