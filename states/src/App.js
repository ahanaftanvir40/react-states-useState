
import './App.css';
import { Header } from './components/Header';
import { Counter } from './components/Counter';
import { TaskList } from './components/TaskList';

function App() {






  return (
    <div className="App">

      <Header />
      <Counter />
      <TaskList title='this is a prop' />



    </div>
  );
}

export default App;
