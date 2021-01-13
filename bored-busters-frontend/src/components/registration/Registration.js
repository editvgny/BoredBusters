import React from 'react';
import axios from 'axios';

function Registration() {

    const registerUser = (event) => {
        event.preventDefault()

        const userData = {
            username: document.getElementById("username").value,
            email: document.getElementById("email").value,
            password1: document.getElementById("password1").value,
            password2:  document.getElementById("password2").value,
        }

        console.log(userData);

        axios.post(`http://127.0.0.1:8000/api/register`, userData)
            .then((response) => {
                window.location.replace("/")
            })
            .catch(error => {
               let errorDiv = document.getElementById("error");
               if (error.response.data.error.email && error.response.data.error.email[0] === "The email has already been taken.") {
                   errorDiv.innerHTML = error.response.data.error.email;
               } else {
                   errorDiv.innerHTML = "All fields must be filled and the passwords need to be matched!"
               }
            })
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