
import './App.css';
import { Header } from './components/Header';
import { Counter } from './components/Counter';
import { TaskList } from './components/TaskList';
import { Footer } from './components/Footer'


function App() {

  const info = 'props drilling'




  return (
    <div className="App">

      <Header />
      <Counter />
      <TaskList title='this is a prop' info={info} />
      <Footer />



    </div>
  );
}

export default App;
