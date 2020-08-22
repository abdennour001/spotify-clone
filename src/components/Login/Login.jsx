import React, { useEffect } from "react";
import "./Login.css";
import loginUrl from "../../utils/spotify";
import UrlSearchParams from "../../utils/url";

function Login() {
    useEffect(() => {
        var params = new UrlSearchParams(window.location.href);
        const _token = params.hash ? params.hash.get("access_token") : null;
        window.location.hash = "";
        if (_token) {
            console.log("Connected");
        } else {
            console.log("Not Connected Yet");
        }
    }, []);

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
