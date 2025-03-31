
import './App.css';
import React, { use, useState } from 'react';
import Windowz from './RoomWindow';
import Table from './Tables';
import Footer from './Footer';
import Contents from './ScreenContent';


function App() {
  
    return (
            <div className="App">
            <Windowz />

            <Contents />

            <Table />
            <Footer />
            </div>
        );
}

export default App;
