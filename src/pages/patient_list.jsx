import { useState } from 'react';
import Navbar from "../components/Navbar"; // นำเข้า Navbar
import Users from '../components/patient_list/Users';

function PtList() { // เปลี่ยนชื่อฟังก์ชันเป็น PtList
  const [count, setCount] = useState(0);

  return (
    <div>
      <Navbar />
      <Users />
    </div>
  );
}

export default PtList;
