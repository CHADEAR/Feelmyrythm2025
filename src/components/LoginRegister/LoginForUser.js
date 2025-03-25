import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import './LoginForUser.css';

const LoginForUser = () => {
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
                <div className="user-container">
                    <div className="user-login">
                        <div className="navigation">
                            <div className="user-img-box">
                                <img src="https://firebasestorage.googleapis.com/v0/b/picture-94563.appspot.com/o/feelmyrythm2024_pics%2Fuserpage.png?alt=media&token=863da787-643c-4d2f-9721-0c36ba791020" alt="" />
                            </div>
                            <ul>
                                <li className="list">
                                    <b></b>
                                    <b></b>
                                    <Link to="/doctor-login">
                                        <span className="title">DOCTOR</span>
                                    </Link>
                                </li>
                                {/* <li className="list">
                                    <b></b>
                                    <b></b>
                                    <Link to="/nurse-login">
                                        <span className="title">NURSE</span>
                                    </Link>
                                </li> */}
                                <li className="list active">
                                    <b></b>
                                    <b></b>
                                    <Link to="/user-login" aria-current="page">
                                        <span className="title">USER</span>
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        <div className="user-formbox">
                            <form action="">
                                <div className="user-formcontrol">
                                    <div className="user-imglogo">
                                        <img src="https://firebasestorage.googleapis.com/v0/b/picture-94563.appspot.com/o/feelmyrythm2024_pics%2FLogo%20icon%20-%20navy.png?alt=media&token=64a3cb43-51ad-4070-95df-4a5e6a4e676e" alt="" />
                                    </div>
                                    <h2>LOG IN</h2>
                                    <div>
                                        <div className="user-icon">
                                            <img src="https://firebasestorage.googleapis.com/v0/b/picture-94563.appspot.com/o/feelmyrythm2024_pics%2Fusericon.svg?alt=media&token=32637ed2-018f-4244-abc5-1a21c4938030" alt="" />
                                        </div>
                                        <input type="text" placeholder="Username" />
                                    </div>
                            
                                    <div>
                                        <div className="user-icon2">
                                            <img src="https://firebasestorage.googleapis.com/v0/b/picture-94563.appspot.com/o/feelmyrythm2024_pics%2Flockicon2.svg?alt=media&token=428df40d-4def-409f-b04f-cc1b39747288" alt="" />
                                        </div>
                                        <input type="password" placeholder="Password" />
                                    </div>
                                    <span><Link to = "/user-forgotpass">Forgot Password?</Link></span>
                                    <button type="submit"><Link to ="/monitor">Login</Link></button>
                                    <p>Don't have an account? <Link to = "/user-register">Register</Link></p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

                <div className="user-container-phone">
                    <div className="user-login-phone">
                        <div className="user-navigation-phone">
                            <div className="user-img-box-phone">
                                <img src="https://firebasestorage.googleapis.com/v0/b/picture-94563.appspot.com/o/feelmyrythm2024_pics%2Fuserpage.png?alt=media&token=863da787-643c-4d2f-9721-0c36ba791020" alt="" />
                                <div className="user-imglogo">
                                        <div className="user-circle">
                                            <img src="https://firebasestorage.googleapis.com/v0/b/picture-94563.appspot.com/o/feelmyrythm2024_pics%2Fusericon.svg?alt=media&token=32637ed2-018f-4244-abc5-1a21c4938030" alt="" /> 
                                        </div>
                                </div>
                            </div>
                            <div className="user-options">
                                <Link to="/doctor-login">
                                    <span class="list">Doctor</span>
                                </Link>
                                <Link to="#">
                                    <span class="list">
                                        <img src="https://firebasestorage.googleapis.com/v0/b/picture-94563.appspot.com/o/feelmyrythm2024_pics%2Flogout-svgrepo-com.svg?alt=media&token=c187a124-576e-4f3f-a7f7-62f0b02d1676" alt="" />
                                    </span>
                                </Link>
                            </div>
                            <div className="user-label-phone">
                                <span className="list active">User</span> 
                            </div>
                        </div>
                        <div className="user-login-formbox-phone">
                            <form action="">
                                <div className="user-login-formcontrol-phone">
                                    <h2>LOG IN</h2>
                                    <div className="user-login-group">
                                        <div className="user-form-group">
                                            <input type="text" id="username" placeholder="Username" />
                                        </div>
                                        <div className="user-form-group">
                                            <input type="password" id="password" placeholder="Password" />
                                        </div>
                                        <span><Link to = "/user-forgotpass">Forgot Password?</Link></span>
                                        <button type="submit"><Link to ="/monitor">Login</Link></button>
                                        <p>Don't have an Account? <Link to ="/user-register">Sign up</Link></p>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default LoginForUser;
