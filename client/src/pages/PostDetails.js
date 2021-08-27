import React, { useState, useEffect } from 'react';
import styles from "./css/PostDetails.module.css"
import Comment from '../Components/Comment';
import ImageIcon from '@material-ui/icons/Image';

export default function PostDetails({ match }) {

    const [post, setPost] = useState({});

    useEffect(() => {
        fetch('http://localhost:3000/posts/' + match.params.id)
            .then(response => {
                return response.json();
            })
            .then(data => {
                setPost(data.data.posts[0]);
                console.log(post);
            })

    }, []);
    const date = String(post.post_date).slice(0, 10);
    return (
        <div className={styles.postContainer}>
            <div className={styles.postHeader}>
                <h1>{post.title}</h1>
                <p>Posted by {post.author} on {date}</p>
            </div>
            <div className={styles.postBody}>
                <p>{post.text}</p>
            </div>
            <div className={styles.answers}>
                <h2>Raspunsuri</h2>
                <Comment />
            </div>
            <div className={styles.answerForm}>
                <h2>Raspunsul Tau</h2>
                <input type="text" className={styles.textInput} placeholder="Scrie raspunsul tau aici"></input>
                <input id="file" type="file" accept=".jpg, .jpeg, .png" style={{ display: "none" }}></input>
                <label for="file">
                    <ImageIcon fontSize="large" style={{ cursor: "pointer" }} />
                </label>
                <button className={styles.submitButton} type="submit">Raspunde</button>
            </div>
        </div>
    )
}