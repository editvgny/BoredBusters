import React, { useEffect, useState, useContext } from 'react'
import StyledHeader from "./styledComponents/StyledHeader"
import StyledThemeSwitcher from "./styledComponents/StyledThemeSwitcher"
import StyledMusicControl from "./styledComponents/StyledMusicControl"
import { Link } from "react-router-dom"
import { ThemeContext } from '../contextComponents/ThemeContext';
import SnowFlakes from "./SnowFlakes";
import "../Snowflake.css";
import LightRope from './LightRope';


export default function Header() {
    const [theme, setTheme] = useContext(ThemeContext);
    const [audio, setAudio] = useState([]);

    useEffect(() => {
        setAudio(new Audio("/Frank Sinatra - Santa Claus Is Comin' to Town (Audio).mp3"));
    }, []);

    const play = () => {
        audio.play();
        audio.volume = 0.5;
        setTheme("onSnow");
    };

    const stop = () => {
        audio.pause();
        setTheme("offSnow");
    };

    return (
        <React.Fragment>
            <StyledHeader>
                {theme === "onSnow" ?
                    <React.Fragment>
                        <SnowFlakes />
                        <LightRope />
                    </React.Fragment> :
                    <></>}
                <Link to="/">
                    Bored Busters
                </Link>
                <StyledThemeSwitcher>
                    <StyledMusicControl onClick={theme === "onSnow" ? stop : play}>
                        {theme === "onSnow" ? "Turn off Christmas mode" : "Turn on Christmas mode"}!
                    </StyledMusicControl>
                </StyledThemeSwitcher>
            </StyledHeader>
        </React.Fragment>
    )
}
