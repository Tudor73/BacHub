import React from "react";
import './Dashboard.css';
import "./global.css";
import keys from "../icons/keys.svg";
import book from "../icons/book.svg";
import dna from "../icons/dna.svg";
import test from "../icons/test.svg";
import laptop from "../icons/laptop.svg";
import atom from "../icons/atom.svg";

function Dashboard(){
    return (
        <div className="container">
        <h2>ALEGE MATERIA</h2>
        <div className="materii">
            <div className="first">
                <img src={keys} />
                <h2>Matematica</h2>
            </div>
            <div className="second">
                <img src={book}/>
                <h2>Romana</h2>
            </div>
            <div className="third">
                <img src={laptop} />
                <h2>Informatica</h2>
            </div>
            <div className="fourth">
            <img src={dna} />
                <h2>Biologie</h2>
            </div>
            <div className="fifth">
                <img src={test} />
                <h2>Chimie</h2>
            </div>
            <div className="sixth">
                <img src={atom} />
                <h2>Fizica</h2>
            </div>
        </div>
    </div>
    )
}

export default Dashboard;