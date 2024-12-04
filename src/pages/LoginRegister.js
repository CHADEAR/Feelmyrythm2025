import React from 'react';
import LoginForDoctor from "../components/LoginRegister/LoginForDoctor";
import LoginForNurse from "../components/LoginRegister/LoginForNurse";
import LoginForUser from "../components/LoginRegister/LoginForUser";
import RegisterPage from "../components/LoginRegister/RegisterPage";
import ForgotPassPage from "../components/LoginRegister/ForgotPassPage";

const LoginRegister = () => {
    return (
        <div>
            <LoginForDoctor />
            <LoginForNurse />
            <LoginForUser />
            <RegisterPage />
            <ForgotPassPage />
        </div>
    );
};


export default LoginRegister;

