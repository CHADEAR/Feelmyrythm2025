import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import './LoginForDoctor.css';

const LoginForDoctor = () => {
    useEffect(() => {
        console.log("Component mounted");
        // Add active class in selected list item
        const list = document.querySelectorAll('.list');
        list.forEach((item) => {
            item.onclick = () => {
                list.forEach(el => el.className = 'list'); // Reset all classes
                item.className = 'list active'; // Set active class
            };
        });
    }, []); // Empty dependency array ensures it runs once on mount

    return (
        <div>
            <section>
                <div className="doctor-login-container">
                    <div className="doctor-login">
                        <div className="navigation">
                            <div className="doctor-img-box">
                                <img src="https://firebasestorage.googleapis.com/v0/b/picture-94563.appspot.com/o/feelmyrythm2024_pics%2Fdoctorpage.png?alt=media&token=8d6bb21b-c681-4f36-8cf6-506ddb7422cb" alt="" />
                            </div>
                            <ul>
                                <li className="list active">
                                    <b></b>
                                    <b></b>
                                    <Link to="/doctor-login">
                                        <span className="title">DOCTOR</span>
                                    </Link>
                                </li>
                                <li className="list">
                                    <b></b>
                                    <b></b>
                                    <Link to="/nurse-login">
                                        <span className="title">NURSE</span>
                                    </Link>
                                </li>
                                <li className="list">
                                    <b></b>
                                    <b></b>
                                    <Link to="/user-login">
                                        <span className="title">USER</span>
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        <div className="doctor-login-formbox">
                            <form action="">
                                <div className="doctor-login-formcontrol">
                                    <div className="doctor-imglogo">
                                        <img src="https://firebasestorage.googleapis.com/v0/b/picture-94563.appspot.com/o/feelmyrythm2024_pics%2FLogo%20icon%20-%20navy.png?alt=media&token=64a3cb43-51ad-4070-95df-4a5e6a4e676e" alt="" />
                                    </div>
                                    <h2>LOG IN</h2>
                                    <div>
                                        <div className="doctor-icon">
                                            <img src="https://firebasestorage.googleapis.com/v0/b/picture-94563.appspot.com/o/feelmyrythm2024_pics%2Fdoctoricon.svg?alt=media&token=8e9082bb-d2dd-49e8-a0d9-39fa3e69da89" alt="" />
                                        </div>
                                        <input type="text" placeholder="Username" />
                                    </div>
                            
                                    <div>
                                        <div className="doctor-icon2">
                                            <img src="https://firebasestorage.googleapis.com/v0/b/picture-94563.appspot.com/o/feelmyrythm2024_pics%2Flockicon2.svg?alt=media&token=428df40d-4def-409f-b04f-cc1b39747288" alt="" />
                                        </div>
                                        <input type="password" placeholder="Password" />
                                    </div>
                                    <button type="submit">Login</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default LoginForDoctor;
