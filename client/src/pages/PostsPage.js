import React from "react";
import Post from "../Components/Post";
import styles from "./css/PostPage.module.css";
import { useState, useEffect } from "react";
import axios from "axios";


export default function PostPage(props) {

    const [posts, setPosts] = useState([{}]); // array of objects
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios({
            method: 'GET',
            url: 'http://localhost:3000/posts',
            headers: {Authorization: localStorage.getItem('jwtToken')}
        }).then(res => {
            setPosts(res.data.data.posts)
            setLoading(false);
        })
        .catch(err => console.log(err))

    }, []);
    return (
        <div className={styles.container}>
            <a className={styles.createPost} onClick={() => { props.history.push('create-post') }}>Create Post</a>
            <input className={styles.search} type="text" placeholder="Search for question" />
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