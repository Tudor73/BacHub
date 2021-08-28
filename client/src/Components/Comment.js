import React from "react";
import styles from "./Comment.module.css"

export default function Comment(props) {
    return (
        <div className ={styles.commentContainer}>
            <p className = {styles.commentInfo}>Posted by {props.user} on {props.date}</p>
            <p className = {styles.commentText}>{props.text} </p>
        </div>
    )
}