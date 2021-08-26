import React, { useState } from "react";
import styles from './css/Dashboard.module.css';
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
        <div className={styles.container}>
            <h2>ALEGE MATERIA</h2>
            <div className={styles.materii}>
                <div className={styles.first} onClick={() => handleClick('mate')}>
                    <img src={keys} />
                    <h2>Matematica</h2>
                </div>
                <div className={styles.second} onClick={() => handleClick('romana')}>
                    <img src={book} />
                    <h2>Romana</h2>
                </div>
                <div className={styles.third} onClick={() => handleClick('info')}>
                    <img src={laptop} />
                    <h2>Informatica</h2>
                </div>
                <div className={styles.fourth} onClick={() => handleClick('biologie')}>
                    <img src={dna} />
                    <h2>Biologie</h2>
                </div>
                <div className={styles.fifth} onClick={() => handleClick('chimie')}>
                    <img src={test} />
                    <h2>Chimie</h2>
                </div>
                <div className={styles.sixth} onClick={() => handleClick('fizica')}>
                    <img src={atom} />
                    <h2>Fizica</h2>
                </div>
            </div>
        </div>
    )
}

export default Dashboard;