import React from 'react';
import axios from 'axios';
import Cookies from "js-cookie";
import StyledSearchCard from "../styledComponents/StyledSearchCard";
import StyledInstruction from "../styledComponents/StyledInstruction";
import {FormGroup, Input, Button} from "../styledComponents/StyledForm";

function Login() {

    const loginUser = (e) => {
        e.preventDefault();
        let token = document.head.querySelector('meta[name="csrf-token"]');
        if (!token) {
            console.error('CSRF token not found: https://laravel.com/docs/csrf#csrf-x-csrf-token');
        }
        axios.get('http://127.0.0.1:8000/sanctum/csrf-cookie').then(response => {
            axios.post(`http://127.0.0.1:8000/api/login`, {
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
                    sessionStorage.setItem('userId', response.data.userId);
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
            <FormGroup>
                <StyledSearchCard>
                    <StyledInstruction>
                        Login to collect your favorites!
                        <div id="error"/>
                    </StyledInstruction>
                </StyledSearchCard>
                <Input id="email" type="email" name="email" placeholder="Email" required/>
                <Input id="password" type="password" name="password1" placeholder="Password" required/>
                <Button type="button" onClick={loginUser}>Login</Button>
            </FormGroup>
        </div>
    );
}

export default Login;