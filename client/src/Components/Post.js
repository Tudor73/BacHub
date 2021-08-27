import React from "react";
import { useHistory } from "react-router-dom";
import styles from "./Post.module.css";

const parseTime = (time) => {
    return time.slice(0, 10);
}

export default function Post(props) {
    const history = useHistory();

    const clickOnPost = (id) => { // redirects to the post detail page for the post they clicked on 
        let path = `/posts/${id}`
        history.push(path)
    }

    const date = parseTime(props.time);
    return (
        <div className={styles.postContainer} >
            <div className={styles.postHeader}>
                <h3>{props.materie}</h3>
                <span>posted by user {props.author}. on {date}</span>
            </div>
            <div className={styles.postBody}>
                <h1>{props.title}</h1>
                <p> {props.text} </p>
            </div>
            <div className={styles.postFooter}>
                <span>Comments(10)</span>
                <a onClick={() => { clickOnPost(props.id) }}>Read Post</a>
            </div>
        </div>
    )
}
