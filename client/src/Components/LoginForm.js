import React, { useContext } from "react";
import ReactDom, { render } from "react-dom";
import { GoogleLogin } from "react-google-login";
import axios from "axios";
import { UserContext } from "../UserContext";

export default function LoginForm(props) {
  const responseErrorGoogle = (res) => {
    console.log(res);
  };

  const responseSuccesGoogle = (res) => {
    axios({
      method: "POST",
      url: "http://localhost:3000/auth/login",
      data: { tokenId: res.tokenId },
    }).then((res) => {
      localStorage.setItem("jwtToken", res.data.accessToken);
      localStorage.setItem("name", res.data.name);
      localStorage.setItem("display_name", res.data.name);
    });
  };

  if (!props.isOpen) return null;
  return ReactDom.createPortal(
    // popup rendered with react portal
    <>
      <div
        className="w-full h-full fixed block top-0 left-0 bg-black bg-opacity-50 z-50"
        onClick={props.onClose}
      >
        <div className="bg-indigo-50  rounded-md  top-1/4 right-1/8 w-1/4 h-1/2 my-0 mx-auto relative flex flex-col justify-around">
          <div className="self-center">
            <h1 className="text-black text-center">Sign in into</h1>
            <div className="text-3xl">BacHub</div>
          </div>
          <div className="text-center opacity-70">
            You need to be logged in in order to post answers or comments
          </div>
          <form className="self-center">
            <GoogleLogin
              clientId="976384778684-2a9u2nmogfm5pafg3ajguc9c53bv9vli.apps.googleusercontent.com"
              buttonText="Sign in with Google"
              // render={(renderProps) => {
              //   <GoogleButton
              //     onClick={renderProps.onClick}
              //     // disabled={renderProps.disabled}
              //   >
              //     Sign in with Google
              //   </GoogleButton>;
              // }}
              className="w-full bg-blue-500 "
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
