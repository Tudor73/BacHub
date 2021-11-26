import React from "react";
import downArrow from "../icons/arrowDown.svg";
import upArrow from "../icons/arrowUp.svg";
import styles from "./Comment.module.css";

export default function Comment(props) {
  return (
    <div
      className="border-2 border-black border-opacity-5 hover:border-opacity-20 m-2 flex 
    bg-white "
    >
      <div className="h-full self-center flex flex-col justify-around items-center">
        <img src={upArrow} className={styles.arrows}></img>
        <span className="text-lg w-full text-center">201</span>
        <img src={downArrow} className={styles.arrows} />
      </div>
      <div>
        <p>
          Posted by {props.user} on {props.date}
        </p>
        <p>{props.text} </p>
      </div>
    </div>
  );
}
