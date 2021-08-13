import React from "react";
import Post from "../Components/Post";
import "./PostPage.module.css";
import { useState, useEffect } from "react";


export default function PostPage() {

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
        <div className="container">
            <input type="text" placeholder="Search for question" />
            {loading ? <div>...loading </div> : <Post />}
        </div>
    )
}