import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import './LoginForNurse.css';

const LoginForNurse = () => {
    useEffect(() => {
        // add active class in selected list item
        const list = document.querySelectorAll('.list');
        list.forEach((item) => {
            item.onclick = () => {
                list.forEach(el => el.className = 'list'); // Reset all classes
                item.className = 'list active'; // Set active class
            };
        });
    }, []); // Empty dependency array to ensure it runs once on component mount

    return (
        <div>
            <section>
                <div className="nurse-container">
                    <div className="nurse-login">
                        <div className="navigation">
                            <div className="nurse-img-box">
                                <img src="https://firebasestorage.googleapis.com/v0/b/picture-94563.appspot.com/o/feelmyrythm2024_pics%2Fnursepage.png?alt=media&token=c5ff0cec-5c34-4bdf-ab53-b69db4f62b38" alt="" />
                            </div>
                            <ul>
                                <li className="list">
                                    <b></b>
                                    <b></b>
                                    <Link to="/doctor-login">
                                        <span className="title">DOCTOR</span>
                                    </Link>
                                </li>
                                <li className="list active">
                                    <b></b>
                                    <b></b>
                                    <Link to="/nurse-login" aria-current="page">
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

                        <div className="nurse-formbox">
                            <form action="">
                                <div className="nurse-formcontrol">
                                    <div className="nurse-imglogo">
                                        <img src="https://firebasestorage.googleapis.com/v0/b/picture-94563.appspot.com/o/feelmyrythm2024_pics%2FLogo%20icon%20-%20navy.png?alt=media&token=64a3cb43-51ad-4070-95df-4a5e6a4e676e" alt="" />
                                    </div>
                                    <h2>LOG IN</h2>
                                    <div>
                                        <div className="nurse-icon">
                                            <img src="https://firebasestorage.googleapis.com/v0/b/picture-94563.appspot.com/o/feelmyrythm2024_pics%2Fnurseicon.svg?alt=media&token=6474bc5c-6d49-4186-b4fa-9290adce0631" alt="" />
                                        </div>
                                        <input type="text" placeholder="Username" />
                                    </div>
                            
                                    <div>
                                        <div className="nurse-icon2">
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

export default LoginForNurse;
