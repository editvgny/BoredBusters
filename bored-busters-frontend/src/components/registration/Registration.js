import React from 'react';
import axios from 'axios';

function Registration() {

    const checkMatchingPassword = () => {
        const password1 = document.getElementById("password1").value;
        const password2 = document.getElementById("password2").value;

        if (password1 === password2) {
            return true;
        } else {
            document.getElementById("error").innerHTML = 'Mismatched passwords!';
        }
    }

    const registerUser = (event) => {
        event.preventDefault()
        const password = checkMatchingPassword()

        const userData = {
            username: document.getElementById("username").value,
            email: document.getElementById("email").value,
            password1: password ? document.getElementById("password1").value : "",
            password2: password ? document.getElementById("password2").value : "",
        }

        axios.post(`http://127.0.0.1:8000/api/register`, userData)
            .then(window.location.replace("/"))
            .catch(error => console.log(error))
    }

    return (
        <div className="form-container">
            <form>
                <div id="error"/>
                <input id="username" type="text" name="username" placeholder="Username" required/>
                <input id="email" type="email" name="email" placeholder="Email" required/>
                <input id="password1" type="password" name="password1" placeholder="Password" required/>
                <input id="password2" type="password" name="password2" placeholder="Password again" required/>
                <button type="button" onClick={registerUser}>Register</button>
            </form>
        </div>
    );
}

export default Registration;