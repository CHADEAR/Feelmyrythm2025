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
                            <img src="https://firebasestorage.googleapis.com/v0/b/picture-94563.appspot.com/o/feelmyrythm2024_pics%2Frotation-lock.png?alt=media&token=f91df5fe-ff67-4272-999f-0049f3f9f91a" alt="" />
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
                        <button type="submit" href="#">Reset</button>
                        <p>Go back to<Link to ="/user-login">Login</Link></p>
                    </form>
                </div>
            </section>
        </div>
    );
};

export default ForgotPassPage;