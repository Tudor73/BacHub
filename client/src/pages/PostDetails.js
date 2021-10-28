import React, { useState, useEffect, useContext } from "react";
import styles from "./css/PostDetails.module.css";
import Comment from "../Components/Comment";
import ImageIcon from "@material-ui/icons/Image";
import { UserContext } from "../UserContext";
import Post from "../Components/Post";
import { useSelector, useDispatch } from "react-redux";

export default function PostDetails({ match }) {
  const { user, setUser } = useContext(UserContext);
  const [post, setPost] = useState({});
  const [commentsList, setCommentsList] = useState([{}]);
  const [loading, setLoading] = useState(true);
  const [commentsAdded, setCommentsAdded] = useState(0);
  const [formText, setFormText] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const { votes } = useSelector((state) => state.votes);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(votes);
    fetch("http://localhost:3000/posts/" + match.params.id)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setPost(data.data.posts[0]);
      });
  }, []); // api request for the post the user clicked on

  useEffect(() => {
    fetch("http://localhost:3000/comments/" + match.params.id)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setCommentsList(data.data.comments);
        setLoading(false);
      });
  }, [commentsAdded]); // api request for the comments of the post

  const handleSubmit = (e) => {
    e.preventDefault();
    const comment = {
      post_id: match.params.id,
      comment_text: formText,
    };
    if (user) {
      const user_name = localStorage.getItem("name");
      comment["author"] = user_name;
      setFormText("");
    } else {
      setErrorMessage("You need to be logged in to post comments");
      return;
    }

    fetch("http://localhost:3000/comments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("jwtToken"),
      },
      body: JSON.stringify(comment),
    }).then(() => {
      let new_comments_number = commentsAdded + 1;
      setCommentsAdded(new_comments_number);
    });
  };

  const date = String(post.post_date).slice(0, 10);
  const style = {
    cursor: "pointer",
    position: "absolute",
    top: "65px",
  };
  return (
    <div className={styles.postContainer}>
      <Post
        title={post.title}
        text={post.text}
        author={post.author}
        materie={post.materie}
        time={date}
        votes={post.votes}
        id={post.post_id}
      />
      <div className={styles.answers}>
        <h2>Raspunsuri</h2>
        {loading ? (
          <div>..loading </div>
        ) : (
          commentsList.map((comment, idx) => {
            return (
              <Comment
                key={idx}
                text={comment.comment_text}
                user={comment.author}
                date={comment.comment_date}
              />
            );
          })
        )}
      </div>
      <div className={styles.answerForm}>
        <h2>Raspunsul Tau</h2>
        {errorMessage && <p>{errorMessage}</p>}
        <form onSubmit={handleSubmit}>
          <textarea
            name="text"
            value={formText}
            placeholder="Scrie raspunsul tau aici"
            className={styles.inputText}
            onChange={(e) => {
              setFormText(e.target.value);
            }}
          ></textarea>
          <input
            id="file"
            type="file"
            accept=".jpg, .jpeg, .png"
            style={{ display: "none" }}
          ></input>
          <label htmlFor="file">
            <ImageIcon fontSize="large" style={style} />
          </label>
          <button className={styles.submitButton} type="submit">
            Raspunde
          </button>
        </form>
      </div>
    </div>
  );
}
