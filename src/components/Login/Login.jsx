import React from "react";
import "./Login.css";
import loginUrl from "../../utils/spotify";

function Login() {
    return (
        <div className="login">
            <img
                src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
                alt=""
            />
            <a className="login__button" href={loginUrl}>
                LOGIN TO SPOTIFY
            </a>
        </div>
    );
}

export default Login;
