import React from "react";
import styles from "./LoginForm.module.css";
import ReactDom from "react-dom"

export default function LoginForm(props) {
    if (!props.isOpen) return null;

    return ReactDom.createPortal( // popup rendered with react portal
        <>
            <div className={styles.overlay}>
                <div className={styles.formContainer}>
                    <h1>Login</h1>
                    <form>
                        <button onClick={props.onClose}>Close</button>
                        <input type="text" placeholder="Username"></input>
                        <button type="submit">Login</button>
                    </form>
                </div>
            </div>
        </>,
        document.getElementById('portal')
    )
}