import axios from "axios";
import React, { useContext, useState } from "react";
import { UserContext } from "../UserContext";

export default function Profile() {
  const { user, setUser } = useContext(UserContext);
  const name = localStorage.getItem("name"); // name is the google name the user logged in with
  const name2 = localStorage.getItem("display_name");
  const [display_name, setDisplayName] = useState(name2); // the name the user can update
  const [changeNameClicked, setChangeNameClicked] = useState(false);
  const [inputValue, setInputValue] = useState(name);

  const changeName = () => {
    if (changeNameClicked === false) {
      setChangeNameClicked(true);
    } else {
      const data = { new_name: inputValue, name: name };
      updateUserDisplayName(data);
    }
  };
  const updateUserDisplayName = (data) => {
    axios({
      method: "PUT",
      url: "http://localhost:3000/users/update",
      headers: { Authorization: localStorage.getItem("jwtToken") },
      data: data,
    })
      .then((res) => {
        console.log(res);
        localStorage.setItem("display_name", data.new_name);
        setDisplayName(data.new_name);
        setChangeNameClicked(false);
      })
      .catch((error) => {
        console.log(error);
        setChangeNameClicked(false);
      });
  };
  return (
    <div>
      {!user ? (
        <p>You are not logged in</p>
      ) : (
        <div>
          <p>Your profile: </p>
          <p>
            user name:{" "}
            {!changeNameClicked ? (
              display_name
            ) : (
              <input
                value={inputValue}
                onChange={(e) => {
                  setInputValue(e.target.value);
                }}
                required
              />
            )}
          </p>

          <button onClick={changeName}>Change name</button>
          <p>reputation: </p>
        </div>
      )}
    </div>
  );
}
