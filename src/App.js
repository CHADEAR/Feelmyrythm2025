import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // นำเข้า Router components
import Navbar from './components/Navbar';
import HomePage from './pages/homepage';
import PtMonitor from './pages/pt_monitor';

function App() {
  return (
    <Router> 
      <Routes> 
        <Route path="/" element={<HomePage />} /> 
        <Route path="/pt-monitor" element={<PtMonitor />} />
      </Routes>
    </Router>
  );
}

export default App;
