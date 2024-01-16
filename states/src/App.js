
import './App.css';
import { Header } from './components/Header';
import { Counter } from './components/Counter';
import { TaskList } from './components/TaskList';
import { Footer } from './components/Footer'
import { AddTask } from './components/AddTask'


function App() {

  const info = 'props drilling'




  return (
    <div className="App">

      <Header />
      <Counter title='this is a prop' />
      <AddTask />
      <TaskList info={info} />
      <Footer />



    </div>
  );
}

export default App;
