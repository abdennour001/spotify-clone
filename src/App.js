import React, { useEffect } from "react";
import "./App.css";
import Login from "./components/Login";
import Player from "./components/Player";
import UrlSearchParams from "./utils/url";
import { connect } from "react-redux";
import { setLoading, loginUser, logout } from "./redux/actions/authActions";

function App({
    token,
    isAuthenticated,
    loading,
    user,
    setLoading,
    loginUser,
    logout
}) {
    useEffect(() => {
        var params = new UrlSearchParams(window.location.href);
        const _token = params.hash ? params.hash.get("access_token") : null;
        window.location.hash = "";
        // check if this is spotify redirect
        if (_token) {
            // login new user
            loginUser();
            console.log("Connected");
        } else {
            // check if a user is already logged in "localStorage"
            if (localStorage.token) {
                console.log("Connected");
            } else {
                console.log("Not Connected Yet");
            }
        }
    }, []);

    return (
        <div className="App">
            <Login />
            {localStorage.token && (
                <button
                    onClick={() => {
                        logout();
                    }}
                >
                    Logout
                </button>
            )}
        </div>
    );
}

const mapStateToProps = state => ({
    ...state.auth
});

export default connect(mapStateToProps, { setLoading, loginUser, logout })(
    App
);
