import { useState } from 'react';
import Navbar from "../components/Navbar"; // นำเข้า Navbar
import UpdateUser from '../components/patient_list/UpdateUser';

function PtUpdate() { // เปลี่ยนชื่อฟังก์ชันเป็น PtList
  const [count, setCount] = useState(0);

  return (
    <div>
      <Navbar />
      <UpdateUser />
    </div>
  );
}

export default PtUpdate;
