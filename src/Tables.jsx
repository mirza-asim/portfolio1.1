import './App.css';
import React, { useState } from 'react';

function Table() {
    return(
        <svg xmlns="http://www.w3.org/2000/svg">
        <filter id="filter">
        <feTurbulence type="fractalNoise" baseFrequency=".1 .01"/>
        <feColorMatrix values=" 0 0 0 .11 .69
                                0 0 0 .09 .38
                                0 0 0 .08 .14
                                0 0 0 0 1"/>
        </filter>
        <rect width="100%" height="100%" filter="url(#filter)"/>
    </svg>
    );
}

export default Table;