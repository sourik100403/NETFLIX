import './App.css';
import Home from './components/Home/Home';


import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Main from './components/Main/Main';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="/signin" element={<Main/>} />
      </Routes>

    </Router>
  );
}

export default App;
