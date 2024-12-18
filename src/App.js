import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // นำเข้า Router components
import Navbar from './components/Navbar';
import HomePage from './pages/homepage';
import PtMonitor from './pages/pt_monitor';
import PtList from './pages/patient_list.jsx';
import CreateUser from './components/patient_list/CreateUser.jsx'
import Users from './components/patient_list/Users.jsx'
import UpdateUser from './components/patient_list/UpdateUser.jsx'
import LoginForDoctorPage from './pages/LoginForDoctorPage.js';
import LoginForNursePage from './pages/LoginForNursePage.js';
import LoginForUserPage from './pages/LoginForUserPage.js';
import RegisterForUserPage from './pages/RegisterForUserPage.js';
import ForgotPassPageForUser from './pages/ForgotPassPageForUser.js';


function App() {
  return (
    <Router> 
      <Routes> 
        <Route path="/" element={<HomePage />} /> 
        <Route path="/pt-monitor" element={<PtMonitor />} />
        <Route path="/pt-list" element={<PtList />} />
        
        <Route path='/user' element={<Users />}></Route>
        <Route path='/create' element={<CreateUser />}></Route>
        <Route path='/update' element={<UpdateUser />}></Route>

        <Route path="/doctor-login" element={<LoginForDoctorPage />} />
        <Route path="/nurse-login" element={<LoginForNursePage />} />
        <Route path="/user-login" element={<LoginForUserPage />} />
        <Route path="/user-register" element={<RegisterForUserPage />} />
        <Route path="/user-forgotpass" element={<ForgotPassPageForUser />} />
      </Routes>
    </Router>
  );
}

export default App;
