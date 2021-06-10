import React from 'react'
import StyledNavbar from "./styledComponents/StyledNavbar"
import {Link} from "react-router-dom"
import Cookies from "js-cookie";

export default function Navbar() {
    return (
        <StyledNavbar>
            {!Cookies.get('token')
                ? (
                    <React.Fragment>
                        <Link to="/registration">Registration</Link>
                        {''}|{''}
                        <Link to="/login">Login</Link>
                        {''}|{''}
                    </React.Fragment>
                ) : (
                    <React.Fragment>
                        <Link to="/logout">Logout</Link>
                        {''}|{''}
                        <Link to="/favorites">Favorites</Link>
                        {''}|{''}
                    </React.Fragment>
                )}
            <Link to="/random">Random</Link>
            {''}|{''}
            <Link to="/type">Type</Link>
            {''}|{''}
            <Link to="/participants">Participants</Link>
            {''}|{''}
            <Link to="/cost">Cost</Link>
        </StyledNavbar>
    )
}
