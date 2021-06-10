import Cookies from "js-cookie";

export default function Logout() {
    sessionStorage.clear();
    Cookies.remove("token");
    window.location.href = "/";
    return "";
}