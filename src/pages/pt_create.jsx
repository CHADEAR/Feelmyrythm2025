import { useState } from 'react';
import Navbar from "../components/Navbar"; // นำเข้า Navbar
import CreateUser from '../components/patient_list/CreateUser';


function PtCreate() { // เปลี่ยนชื่อฟังก์ชันเป็น PtList
  const [count, setCount] = useState(0);

  return (
    <div>
      <Navbar />
      <CreateUser />
    </div>
  );
}

export default PtCreate;
