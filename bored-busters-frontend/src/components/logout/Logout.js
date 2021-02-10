import Cookies from "js-cookie";

function Logout() {
    sessionStorage.clear();
    Cookies.remove("token");
    window.location.href = "/";
    return "";
}

export default Logout;