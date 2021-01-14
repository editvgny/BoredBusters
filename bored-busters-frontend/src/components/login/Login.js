import React from 'react';
import axios from 'axios';
import Cookies from "js-cookie";

function Login() {

    const loginUser = (e) => {
        e.preventDefault();
        let token = document.head.querySelector('meta[name="csrf-token"]');
        if (!token) {
            console.error('CSRF token not found: https://laravel.com/docs/csrf#csrf-x-csrf-token');
        }
        axios.get('http://127.0.0.1:8000/sanctum/csrf-cookie').then(response => {
            axios.post(`http://127.0.0.1:8000/api/login`,  {
                    email: document.getElementById("email").value,
                    password: document.getElementById("password").value,
                    loginToken: 'browser',
                },
                {
                    headers: {
                        'X-CSRFTOKEN': token,
                    },
                })
                .then((response) => {
                    window.location.replace("/")
                    Cookies.set('token', response.data.token)
                })
                .catch(error => {
                    console.log(token);
                    let errorDiv = document.getElementById("error");
                    errorDiv.innerHTML = "Invalid username or password!"
                })
        });

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