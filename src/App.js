import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // นำเข้า Router components
import Navbar from './components/Navbar';
import HomePage from './pages/homepage';
import PtMonitor from './pages/pt_monitor';
import PtList from './pages/patient_list.jsx';
import CreateUser from './components/patient_list/CreateUser.jsx'
import Users from './components/patient_list/Users.jsx'
import UpdateUser from './components/patient_list/UpdateUser.jsx'
import LoginForDoctor from "../components/LoginRegister/LoginForDoctor";
import LoginForNurse from "../components/LoginRegister/LoginForNurse";
import LoginForUser from "../components/LoginRegister/LoginForUser";
import RegisterPage from "../components/LoginRegister/RegisterPage";
import ForgotPassPage from "../components/LoginRegister/ForgotPassPage";



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

        <Route path="/doctor-login" element={<LoginForDoctor />} />
        <Route path="/nurse-login" element={<LoginForNurse />} />
        <Route path="/user-login" element={<LoginForUser />} />
        <Route path="/user-register" element={<RegisterPage />} />
        <Route path="/user-forgotpass" element={<ForgotPassPage />} />
      </Routes>
    </Router>
  );
}

export default App;
