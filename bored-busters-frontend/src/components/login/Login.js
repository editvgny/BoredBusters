import React from 'react';
import axios from 'axios';

function Login() {

    const loginUser = (e) => {
        e.preventDefault();
        const userData = {
            email: document.getElementById("email").value,
            password: document.getElementById("password").value
        }
        console.log(userData)
        axios.post(`http://127.0.0.1:8000/api/login`, userData)
            .then((response) => {
                window.location.replace("/")
            })
            .catch(error => {
                let errorDiv = document.getElementById("error");
                errorDiv.innerHTML = "Invalid username or password!"
            })
    }

    return (
        <div className="form-container">
            <form>
                <div id="error"/>
                <input id="email" type="email" name="email" placeholder="Email" required/>
                <input id="password" type="password" name="password1" placeholder="Password" required/>
                <button type="button" onClick={loginUser}>Login</button>
            </form>
        </div>
    );
}

export default Login;