import React from "react";
import Post from "../Components/Post";
import styles from "./css/PostPage.module.css";
import { useState, useEffect } from "react";


export default function PostPage(props) {

    const [posts, setPosts] = useState([{}]); // array of objects
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('http://localhost:3000/posts')
            .then(response => {
                return response.json();
            })
            .then(data => {
                setPosts(data.data.posts);
                setLoading(false);
            })

    }, []);

    return (
        <div className={styles.container}>
            <a className={styles.createPost} onClick={() => { props.history.push('create-post') }}>Create Post</a>
            <input class={styles.search} type="text" placeholder="Search for question" />
            {loading ? <div>...loading </div> : posts.map((post, idx) => {
                return <Post key={idx}
                    title={post.title}
                    text={post.text}
                    author={post.author}
                    materie={post.materie}
                    time={post.post_date}
                    id={post.post_id} />
            })}
        </div>
    )
}