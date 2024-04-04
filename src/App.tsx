import React from 'react';
import './App.css';
import {Sidebar} from "./layout/Sidebar/Sidebar";
import {Journal} from "./layout/Journal/Journal";

function App() {
    return (
        <div className="App">
            <Sidebar/>
            <Journal/>
        </div>
    );
}

export default App;
