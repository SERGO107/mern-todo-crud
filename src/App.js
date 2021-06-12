import Head from'./components/Header'
import Inputs from './components/Inputs'
import TodoList from './components/TodoList'
import './App.css';

function App() {
  return (
    <div className="App">
      <Head />
      <Inputs />
      <TodoList />
     
    </div>
  );
}

export default App;
