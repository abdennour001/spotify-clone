let getLoginUrl = () => {
    const authEndpoint = "https://accounts.spotify.com/authorize";
    const redirectUri = window.location.origin || "http://localhost:3000";
    const clientID = process.env.REACT_APP_CLIENT_ID;
    const scopes = [
        "user-read-playback-state",
        "user-read-recently-played",
        "user-top-read",
        "user-read-playback-position",
        "user-read-recently-played"
    ];
    return `${authEndpoint}?client_id=${clientID}&redirect_uri=${encodeURIComponent(
        redirectUri
    )}/&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`;
};

let loginUrl = getLoginUrl();

export default loginUrl;
