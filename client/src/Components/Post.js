import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { VscTriangleUp } from "react-icons/vsc";
import { VscTriangleDown } from "react-icons/vsc";
import { UserContext } from "../UserContext";
import { useSelector, useDispatch } from "react-redux";
import {
  addPostVote,
  deletePostVote,
  updatePostVote,
} from "../redux/votesSlice";
const parseTime = (time) => {
  return time.slice(0, 10);
};

export default function Post(props) {
  const history = useHistory();
  const { user, setUser } = useContext(UserContext);
  const { votes } = useSelector((state) => state.votes);
  const [voted, setVoted] = useState(0);
  const [nrOfVotes, setNrOfVotes] = useState(props.votes); // number of votes for the post
  const dispatch = useDispatch();

  useEffect(() => {
    let votedByUser = votes.find((vote) => vote.post_id == props.id);
    if (votedByUser !== undefined) {
      setVoted(votedByUser.vote);
    }
  }, []);

  const clickOnPost = (id) => {
    // redirects to the post detail page for the post they clicked on
    let path = `/posts/${id}`;
    history.push(path);
  };
  const handleUpVoteClick = () => {
    const vote = {
      user_name: user.name,
      vote: 1, // 1 is for upvote
      post_id: props.id,
    };
    if (voted == 1) {
      // if the user already upvoted the post
      dispatch(deletePostVote(vote));
      let copyNrOfVotes = nrOfVotes - 1;
      setNrOfVotes(copyNrOfVotes);
      setVoted(0);
    } else if (voted == -1) {
      // if the user already downvoted the post
      dispatch(updatePostVote(vote));
      let copyNrOfVotes = nrOfVotes + 2; // from downvote to upvote
      setNrOfVotes(copyNrOfVotes);
      setVoted(1);
    } else {
      dispatch(addPostVote(vote));
      let copyNrOfVotes = nrOfVotes + 1;
      setNrOfVotes(copyNrOfVotes);
      setVoted(1);
    }
  };
  const handleDownVoteClick = () => {
    const vote = {
      user_name: user.name,
      vote: -1, // -1 is for downVote
      post_id: props.id,
    };
    if (voted == 1) {
      // if the user already upvoted the post
      dispatch(updatePostVote(vote));
      let copyNrOfVotes = nrOfVotes - 2; // from upvote to downvote
      setNrOfVotes(copyNrOfVotes);
      setVoted(-1);
    } else if (voted == -1) {
      // if the user already downvoted the post
      dispatch(deletePostVote(vote));
      let copyNrOfVotes = nrOfVotes + 1;
      setNrOfVotes(copyNrOfVotes);
      setVoted(0);
    } else {
      dispatch(addPostVote(vote));
      let copyNrOfVotes = nrOfVotes - 1;
      setNrOfVotes(copyNrOfVotes);
      setVoted(-1);
    }
  };
  const date = parseTime(props.time);
  return (
    <div
      className="border-2 border-black border-opacity-5 hover:border-opacity-20 m-2 flex 
                    bg-white h-40"
    >
      <div className="h-full self-center flex flex-col justify-around items-center">
        <VscTriangleUp
          onClick={() => {
            handleUpVoteClick();
          }}
          className={
            "text-5xl cursor-pointer " +
            (voted === 1
              ? "text-indigo-500"
              : "text-gray-400 hover:text-indigo-500")
          }
        />
        <span className="text-lg w-full text-center">{nrOfVotes}</span>
        <VscTriangleDown
          onClick={() => {
            handleDownVoteClick();
          }}
          className={
            "text-5xl cursor-pointer " +
            (voted === -1
              ? "text-indigo-500"
              : "text-gray-400 hover:text-indigo-500")
          }
        />
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
