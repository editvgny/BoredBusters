import React from 'react';
import axios from 'axios';
import StyledInstruction from "../styledComponents/StyledInstruction";
import StyledSearchCard from "../styledComponents/StyledSearchCard";
import {FormGroup, Input, Button} from "../styledComponents/StyledForm";

export default function Registration() {

    const registerUser = (event) => {
        event.preventDefault()

        const userData = {
            username: document.getElementById("username").value,
            email: document.getElementById("email").value,
            password1: document.getElementById("password1").value,
            password2: document.getElementById("password2").value,
        }

        axios.post(`http://127.0.0.1:8000/api/register`, userData)
            .then(() => {
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
            <FormGroup>
                <StyledSearchCard>
                    <StyledInstruction>
                        Register a new account!
                        <div id="error"/>
                    </StyledInstruction>
                </StyledSearchCard>
                <Input id="username" type="text" name="username" placeholder="Username" required/>
                <Input id="email" type="email" name="email" placeholder="Email" required/>
                <Input id="password1" type="password" name="password1" placeholder="Password" required/>
                <Input id="password2" type="password" name="password2" placeholder="Password again" required/>
                <Button type="button" onClick={registerUser}>Register</Button>
            </FormGroup>
        </div>
    );
}