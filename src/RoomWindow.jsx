import './App.css';
import React, { useState } from 'react';

function Windowz() {
    //////////////////////////////////////////////////////
    const starsArray = [];
    const stars = 40;
    let x,y = 0;

    // Generate stars randomly using absolute position
    for (let i = 0; i < stars; i++) {
        x = Math.floor(Math.random() * 100 + 1) + "%";
        y = Math.floor(Math.random() * 100 + 1) + "%";
        starsArray.push(x);
        starsArray.push(y);
    }
    //////////////////////////////////////////////////////

    return (
        <div className="bg">
        <div className="x1">
                <div className="cloud"></div>
            </div>

            <div className="x2">
                <div className="cloud"></div>
            </div>

            <div className="x3">
                <div className="cloud"></div>
            </div>

            <div className="x4">
                <div className="cloud"></div>
            </div>

            <div className="x5">
                <div className="cloud"></div>
            </div>
            <div className="sky">
            <div className="sky__phase sky__dawn"></div>
            <div className="sky__phase sky__noon"></div>
            <div className="sky__phase sky__dusk"></div>
            <div className="sky__phase sky__midnight">
                <div id="sky__stars">{starsArray.map((element,index) => {
                    return(<div style={{ position: "relative", top: element, left: element }}></div>);
                })}</div>
            </div>
        
            <div className="orbit">
                <div className="sun"></div>
                <div className="moon"></div>
            </div>
            
        </div>
        </div>
    );
}

export default Windowz;