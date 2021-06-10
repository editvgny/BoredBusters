import "./App.css";
import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import RandomActivity from "./components/navbarComponents/RandomActivity";
import {SlideValueContextProvider} from "./contextComponents/SlideValueContext";
import Favorites from './components/navbarComponents/Favorites';
import SearchByCost from "./components/navbarComponents/searchComponents/SearchByCost";
import SearchByType from './components/navbarComponents/searchComponents/SearchByType';
import SearchByParticipants from "./components/navbarComponents/searchComponents/SearchByParticipants";
import {ThemeProvider} from "./contextComponents/ThemeContext";
import Registration from "./components/registration/Registration";
import Login from "./components/login/Login";
import Logout from "./components/logout/Logout";


function App() {

    return (
        <Router>
            <ThemeProvider>
                <div className="App">
                    <Header/>
                    <Navbar/>
                    <div className="container">
                        <Route exact path="/" component={Home}/>
                        <Route path="/registration" component={Registration}/>
                        <Route path="/login" component={Login}/>
                        <Route path="/logout" component={Logout}/>
                        <Route path="/random" component={RandomActivity}/>
                        <Route path="/type" component={SearchByType}/>
                        <SlideValueContextProvider>
                            <Route path="/cost" component={SearchByCost}/>
                            <Route path="/favorites" component={Favorites}/>
                        </SlideValueContextProvider>
                        <Route path="/participants" component={SearchByParticipants}/>
                    </div>
                </div>
            </ThemeProvider>
        </Router>
    );
}

export default App;
