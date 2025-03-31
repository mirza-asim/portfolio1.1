import './App.css';
import React, { useState } from 'react';

function Footer() {
    const d = new Date();
    let year = d.getFullYear();
    return (
        <footer> © {year} Mirza Asim Baig. All rights reserved. &nbsp;&nbsp;&nbsp;
        <a href="https://www.linkedin.com/in/mirza-asim-679849194">Linkedin</a>&nbsp;&nbsp;
        <a href="https://github.com/mirza-asim">GitHub</a>
        </footer>
    );
}

export default Footer;