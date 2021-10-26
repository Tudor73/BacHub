import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { VscTriangleUp } from "react-icons/vsc";
import { VscTriangleDown } from "react-icons/vsc";

const parseTime = (time) => {
  return time.slice(0, 10);
};

export default function Post(props) {
  const history = useHistory();

  const clickOnPost = (id) => {
    // redirects to the post detail page for the post they clicked on
    let path = `/posts/${id}`;
    history.push(path);
  };

  const date = parseTime(props.time);
  return (
    <div
      className="border-2 border-black border-opacity-5 hover:border-opacity-20 m-2 flex 
                    bg-white h-40"
    >
      <div className="h-full self-center flex flex-col justify-around items-center">
        <VscTriangleUp className="text-5xl text-gray-400 hover:text-indigo-500 cursor-pointer" />
        <span className="text-lg w-full text-center">201</span>
        <VscTriangleDown className="text-5xl text-gray-400 hover:text-indigo-500 cursor-pointer" />
      </div>
      <div className="flex-1 p-4">
        <div className="text-sm">
          <h3 className="font-bold">{props.materie}</h3>
          <span className="text-gray-400">
            posted by user {props.author}. on {date}
          </span>
        </div>
        <div>
          <h1 className="text-3xl">{props.title}</h1>
          <p> {props.text} </p>
        </div>
        <div className="flex justify-between w-full">
          <span className="text-sm text-gray-400 self-center">
            Comments(10)
          </span>
          <a
            onClick={() => {
              clickOnPost(props.id);
            }}
          >
            Read Post
          </a>
        </div>
      </div>
    </div>
  );
}
