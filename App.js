import Home from './Components/Home';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
    <Routes>
      <Route path='/' element={<Home/>}>Home</Route>
    </Routes>
      
    </div>
  );
}

export default App;
