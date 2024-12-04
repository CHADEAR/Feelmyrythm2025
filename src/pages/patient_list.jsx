import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "../components/Navbar"; // นำเข้า Navbar
import Users from '../components/patient_list/Users';
import CreateUser from '../components/patient_list/CreateUser';
import UpdateUser from '../components/patient_list/UpdateUser';

function PtList() { // เปลี่ยนชื่อฟังก์ชันเป็น PtList
  const [count, setCount] = useState(0);

  return (
    <div>
      <Navbar />
      <Users />
      <CreateUser />
      <UpdateUser />
    </div>
  );
}

export default PtList;
