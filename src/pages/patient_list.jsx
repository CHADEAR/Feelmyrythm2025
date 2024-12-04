import { useState } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from "../components/Navbar"; // นำเข้า Navbar
import Users from '../components/patient_list/Users'
import CreateUser from '../components/patient_list/CreateUser'
import UpdateUser from '../components/patient_list/UpdateUser'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
        <Navbar />
        <Users />
        <CreateUser />
        <UpdateUser />
    </div>
    // <div>
    //   <BrowserRouter>
    //     <Routes>
    //       <Route path='/' element={<Users />}></Route>
    //       <Route path='/create' element={<CreateUser />}></Route>
    //       <Route path='/update' element={<UpdateUser />}></Route>
    //     </Routes>
    //   </BrowserRouter>
    // </div>
  )
}

export default App
