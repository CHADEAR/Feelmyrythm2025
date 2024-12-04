import React from "react";
import { Link } from "react-router-dom";
import './RegisterPage.css';

const RegisterPage = () => {
    return (
        <div>
            <section>
                <div className="register-container">
                    <form action="#">
                        <div className="register-imglogo">
                            <img src="https://firebasestorage.googleapis.com/v0/b/picture-94563.appspot.com/o/feelmyrythm2024_pics%2FLogo%20icon.png?alt=media&token=197a1dd6-d22d-4616-831f-90b3b3dec060" alt="" />
                        </div>
                        <h2>Registration Form</h2>
                        <div className="register-input-row">
                            <div className="register-input-column">
                                <label for="firstname">First Name</label>
                                <input type="text" id="firstname" placeholder="Enter your firstname" />
                            </div>
                            <div className="register-input-column">
                                <label for="lastname">Last Name</label>
                                <input type="text" id="lastname" placeholder="Enter your lastname" />
                            </div>
                        </div>
                        <div className="register-input-row">
                            <div className="register-input-column">
                                <label for="email">Email</label>
                                <input type="text" id="email" placeholder="example@gmail.com" />
                            </div>
                        </div>
                        <div className="register-input-row">
                            <div className="register-input-column">
                                <label for="password">Password</label>
                                <input type="password" id="password" placeholder="Enter your password" />
                            </div>
                        </div>
                        <div className="register-input-row">
                            <div className="register-input-column">
                                <label for="confPass">Confirm Password</label>
                                <input type="password" id="confPass" placeholder="Confirm your password" />
                            </div>
                        </div>
                        <button type="submit" href="#">Register</button>
                        <p>Already have an Account? <Link to ="/user-login">Login</Link></p>
                    </form>
                </div>
            </section>
        </div>
    );
};

export default RegisterPage;

