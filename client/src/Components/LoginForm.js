import React, { useContext } from "react";
import styles from "./LoginForm.module.css";
import ReactDom from "react-dom";
import { GoogleLogin } from "react-google-login";
import axios from "axios";
import { UserContext } from "../UserContext";

export default function LoginForm(props) {
  const responseErrorGoogle = (res) => {
    console.log(res);
  };

  const responseSuccesGoogle = (res) => {
    console.log(res);
    axios({
      method: "POST",
      url: "http://localhost:3000/auth/login",
      data: { tokenId: res.tokenId },
    }).then((res) => {
      console.log(res);
      localStorage.setItem("jwtToken", res.data.accessToken);
      localStorage.setItem("name", res.data.name);
      localStorage.setItem("display_name", res.data.name);
    });
  };

  if (!props.isOpen) return null;
  return ReactDom.createPortal(
    // popup rendered with react portal
    <>
      <div className={styles.overlay}>
        <div className={styles.formContainer}>
          <h1>Login</h1>
          <form>
            <button onClick={props.onClose}>Close</button>
            <GoogleLogin
              clientId="976384778684-2a9u2nmogfm5pafg3ajguc9c53bv9vli.apps.googleusercontent.com"
              buttonText="Login"
              onSuccess={responseSuccesGoogle}
              onFailure={responseErrorGoogle}
              cookiePolicy={"single_host_origin"}
            />
          </form>
        </div>
      </div>
    </>,
    document.getElementById("portal")
  );
}
