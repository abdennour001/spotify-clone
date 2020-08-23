import React, { useEffect } from "react";
import "./App.css";
import Login from "./components/Login";
import UrlSearchParams from "./utils/url";

function App() {
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
        <div className="App">
            <Login />
        </div>
    );
}

export default App;
