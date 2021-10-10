import React, { useContext, useState } from "react";
import { UserContext } from "../UserContext";
import styles from "./css/CreatePostForm.module.css";

export default function CreatePostForm(props) {
  const [title, setTitle] = useState("");
  const [text, setBody] = useState("");
  const [materie, setMaterie] = useState("");
  const { user, setUser } = useContext(UserContext);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const post = { title, text, materie };
    post["author"] = 1;
    const token = localStorage.getItem("jwtToken");

    if (user) {
      const user_name = localStorage.getItem("name");
      post["author"] = user_name;
    } else {
      setErrorMessage("You need to be logged in to create a post ");
      return;
    }
    fetch("http://localhost:3000/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("jwtToken"),
      },
      body: JSON.stringify(post),
    }).then(() => {
      props.history.push("/posts");
    });
  };

  return (
    <div className={styles.container}>
      <h1>Pune o intrebare</h1>
      {errorMessage && <p>{errorMessage}</p>}
      <div className={styles.formContainer}>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="title">
              Title
              <p>Be specific about your question</p>
            </label>
            <input
              className={styles.title}
              type="text"
              placeholder="title"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>
          <div style={{ marginTop: "3%" }}>
            <label htmlFor="text">
              Body
              <p>
                Include all information someone would need to answer your
                question
              </p>
            </label>
            <textarea
              id="text"
              tabIndex="101"
              value={text}
              onChange={(e) => setBody(e.target.value)}
              required
            ></textarea>
            <label>Materia: </label>
            <select
              value={materie}
              onChange={(e) => setMaterie(e.target.value)}
            >
              <option value=""></option>
              <option value="matematica">matematica</option>
              <option value="romana">romana</option>
              <option value="chimie">chimie</option>
              <option value="biologie">biologie</option>
              <option value="informatica">informatica</option>
              <option value="fizica">fizica</option>
            </select>
          </div>
          <button className={styles.submitButton} type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
