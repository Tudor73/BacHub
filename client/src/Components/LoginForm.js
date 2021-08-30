import React from "react";
import styles from "./LoginForm.module.css";
import ReactDom from "react-dom"
import GoogleButton from "react-google-button"

export default function LoginForm(props) {
    const handleSubmit = () => {
        fetch('http://localhost:3000/auth/google')
            .then(response => response.json())
            .then(data => console.log(data))
    }

    if (!props.isOpen) return null;
    return ReactDom.createPortal( // popup rendered with react portal
        <>
            <div className={styles.overlay}>
                <div className={styles.formContainer}>
                    <h1>Login</h1>
                    <form>
                        <button onClick={props.onClose}>Close</button>
                        <a href="http://localhost:3000/auth/google"><GoogleButton  /></a>
                    </form>
                </div>
            </div>
        </>,
        document.getElementById('portal')
    )
}