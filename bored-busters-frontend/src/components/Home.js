import React from 'react';
import { FaHeart } from 'react-icons/fa';
import ReactPlayer from 'react-player/youtube';

export default function Home() {
    return (
        <div className="welcome">
            <ReactPlayer style={{display: "block", margin:"0 auto"}} url='https://www.youtube.com/watch?v=UAdKtR-UxPw'></ReactPlayer>
            <h1>Bored of being bored because being bored is boring?<br></br>
            BORED BUSTERS offer you the amazing chance to stop your vicious circle!<br></br>
                <FaHeart style={{height: "40px", width: "40px"}}/></h1><br></br>
        </div>
    )
}
