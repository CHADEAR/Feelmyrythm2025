import React from "react";
import { Link } from "react-router-dom";
import './ForgotPassPage.css';

const ForgotPassPage = () => {
    return (
        <div>
            <section>
                <div className="forgotpass-container">
                    <form action="#">
                        <div className="forgotpass-imglogo">
                            <img src="https://firebasestorage.googleapis.com/v0/b/picture-94563.appspot.com/o/feelmyrythm2024_pics%2Frotation-lock%20(1).png?alt=media&token=9a9eef90-6809-4205-89f6-bb1df21bcae9" alt="" />
                        </div>
                        <h2>Forgot Password</h2>
                        <div className="forgotpass-input-row">
                            <div className="forgotpass-input-column">
                                <label for="newPass">New Password</label>
                                <input type="password" id="newPass" placeholder="Enter your new password" />
                            </div>
                        </div>
                        <div className="forgotpass-input-row">
                            <div className="forgotpass-input-column">
                                <label for="confPass">Confirm Password</label>
                                <input type="password" id="confPass" placeholder="Confirm your password" />
                            </div>
                        </div>
                        <button type="submit"><Link to ="/user-login">Reset</Link></button>
                        <p>Go back to<Link to ="/user-login">Login</Link></p>
                    </form>
                </div>

                <div className="forgotpass-container-phone">
                    <form ation="#">
                        <div className="forgotpass-imglogo">
                            <div className="forgotpass-circle">
                               <img src="https://firebasestorage.googleapis.com/v0/b/picture-94563.appspot.com/o/feelmyrythm2024_pics%2Frotation-lock%20(1).png?alt=media&token=9a9eef90-6809-4205-89f6-bb1df21bcae9" alt="" /> 
                            </div>
                        </div>
                        <h2>Forgot Password</h2>
                        <div className="forgotpass-group">
                            <div className="forgotpass-form-group">
                                <input type="password" id="newPass" placeholder="New Password" />
                            </div>
                            <div className="forgotpass-form-group">
                                <input type="password" id="confPass" placeholder="Comfirm Password" />
                            </div>
                            <button type="submit"><Link to ="/user-login">Reset</Link></button>
                            <p>Go back to <Link to ="/user-login">Login</Link></p>
                        </div>
                    </form>
                </div>
            </section>
        </div>
    );
};

export default ForgotPassPage;