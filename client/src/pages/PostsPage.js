import React, { useContext } from "react";
import Post from "../Components/Post";
import { useState, useEffect } from "react";
import axios from "axios";
import { UserContext } from "../UserContext";
import { useDispatch, useSelector } from "react-redux";
import { addPostVote, fetchVotes } from "../redux/votesSlice";

export default function PostPage(props) {
  const [posts, setPosts] = useState([{}]); // array of objects
  const [loading, setLoading] = useState(true);
  const { user, setUser } = useContext(UserContext);

  const { votes } = useSelector((state) => state.votes);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchVotes(user.name));

    axios({
      method: "GET",
      url: "http://localhost:3000/posts",
      headers: { Authorization: localStorage.getItem("jwtToken") },
    })
      .then((res) => {
        setPosts(res.data.data.posts);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="p-4">
      <a
        className="bg-blue-500 px-4 py-2 rounded-lg cursor-pointer text-white hover:bg-blue-600"
        onClick={() => {
          props.history.push("create-post");
        }}
      >
        Create Post
      </a>
      {loading ? (
        <div>...loading </div>
      ) : (
        posts.map((post, idx) => {
          return (
            <Post
              key={idx}
              title={post.title}
              text={post.text}
              author={post.author}
              materie={post.materie}
              time={post.post_date}
              votes={post.votes}
              id={post.post_id}
            />
          );
        })
      )}
    </div>
  );
}
