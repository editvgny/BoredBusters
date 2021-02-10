import "./App.css";
import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import RandomActivity from "./components/navbarComponents/RandomActivity";
import { SlideValueContextProvider } from "./contextComponents/SlideValueContext";
import { FavoriteProvider } from './contextComponents/FavoriteContext';
import Favorites from './components/navbarComponents/Favorites';
import SearchByCost from "./components/navbarComponents/searchComponents/SearchByCost";
import SearchByType from './components/navbarComponents/searchComponents/SearchByType';
import SearchByParticipants from "./components/navbarComponents/searchComponents/SearchByParticipants";
import { ThemeProvider } from "./contextComponents/ThemeContext";
import Registration from "./components/registration/Registration";
import Login from "./components/login/Login";
import Logout from "./components/logout/Logout";


function App() {

  return (
    <Router>
      <ThemeProvider>
        <FavoriteProvider>
          <div className="App">
            <Header />
            <Navbar />
            <div className="container">
              <Route exact path="/" component={Home}></Route>
              <Route path="/registration" component={Registration}></Route>
              <Route path="/login" component={Login}></Route>
              <Route path="/logout" component={Logout}></Route>
              <Route path="/random" component={RandomActivity}></Route>
              <Route path="/type" component={SearchByType}></Route>
              <SlideValueContextProvider>
                <Route path="/cost" component={SearchByCost}></Route>
                <Route path="/favorites" component={Favorites}></Route>
              </SlideValueContextProvider>
              <Route path="/participants" component={SearchByParticipants}></Route>
            </div>
          </div>
        </FavoriteProvider>
      </ThemeProvider>
    </Router>
  );
}

export default App;
