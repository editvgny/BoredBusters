import React from 'react';
import { FaHeart } from 'react-icons/fa';

export default function Home() {
    return (
        <div className="welcome">
            <h1>Bored of being bored because being bored is boring?<br></br>
            BORED BUSTERS offer you the amazing chance to stop your vicious circle!<br></br>
            CLICK ON the RANDOM tab above the navbar and gather some great idea to ginger yourself up 
                <FaHeart style={{height: "40px", width: "40px"}}/></h1><br></br>
            <h2>You can collect the activity ideas by clicking on the favorite button to add them on your own favorites page.
                 If you don't need the idea any more just delete it and search for a random one or filter it by categories! </h2>
            
        </div>
    )
}
