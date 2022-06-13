import { Route, Routes } from "react-router-dom";
import './App.css';
import Home from "./Pages/Home";
import Navbar from "./components/Navbar";
import TodoApp from "./Pages/TodoApp";
import CounterApp from "./Pages/CounterApp";
import Todo from "./Pages/Todo";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/todoapp" element={<TodoApp/>}/>
        <Route path="/todoapp/:id" element={<Todo/>}/>
        <Route path="/counterapp" element={<CounterApp/>}/>
        
      </Routes>
    </div>
  );
}

export default App;
