import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './Components/LoginPage';
import Navbar from './Components/Navbar';
import WelcomePage from './Components/WelcomePage'
import './App.css';

function App() {
  const [count, setCount] = useState(0)
  return (
    <>
    <Router>
    <div className="App">
      <Navbar/>
      <Routes>
      <Route path="/" element={ <LoginPage/> } />
      <Route path="/welcome" element={ <WelcomePage/> } />
      </Routes>
    </div>
    </Router>
    </>
  );
}

export default App;
