import React, { useState } from "react";
import './Dashboard.css';
import "./global.css";
import keys from "../icons/keys.svg";
import book from "../icons/book.svg";
import dna from "../icons/dna.svg";
import test from "../icons/test.svg";
import laptop from "../icons/laptop.svg";
import atom from "../icons/atom.svg";

function Dashboard(props) {

    const handleClick = (materie) => {
        props.history.push('/dashboard/' + materie);
    }
    return (
        <div className="container">
            <h2>ALEGE MATERIA</h2>
            <div className="materii">
                <div className="first" onClick={() => handleClick('mate')}>
                    <img src={keys} />
                    <h2>Matematica</h2>
                </div>
                <div className="second" onClick={() => handleClick('romana')}>
                    <img src={book} />
                    <h2>Romana</h2>
                </div>
                <div className="third" onClick={() => handleClick('info')}>
                    <img src={laptop} />
                    <h2>Informatica</h2>
                </div>
                <div className="fourth" onClick={() => handleClick('biologie')}>
                    <img src={dna} />
                    <h2>Biologie</h2>
                </div>
                <div className="fifth" onClick={() => handleClick('chimie')}>
                    <img src={test} />
                    <h2>Chimie</h2>
                </div>
                <div className="sixth" onClick={() => handleClick('fizica')}>
                    <img src={atom} />
                    <h2>Fizica</h2>
                </div>
            </div>
        </div>
    )
}

export default Dashboard;