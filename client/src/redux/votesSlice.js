import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const votesSlice = createSlice({
  name: "votes",
  initialState: {
    votes: [],
  },
  reducers: {
    addVote: (state, action) => {
      state.votes.push(action.payload.vote);
    },
    updateVote: (state, action) => {
      let indexOfVoteToChange = state.votes.findIndex(
        (vote) => (vote.post_id = action.payload.vote.post_id)
      );
      state.votes[indexOfVoteToChange].vote = action.payload.vote;
    },
    deleteVote: (state, action) => {
      let indexOfVoteToDelete = state.votes.findIndex(
        (vote) => (vote.post_id = action.payload.vote.post_id)
      );
      state.votes.splice(indexOfVoteToDelete, 1);
    },
    getVotes: (state, action) => {
      state.votes = action.payload.votes;
    },
  },
});

export const { addVote, getVotes, updateVote, deleteVote } = votesSlice.actions;

export const fetchVotes = (name) => {
  return async (dispatch) => {
    axios({
      method: "GET",
      url: "http://localhost:3000/vote/posts/" + name,
      headers: { Authorization: localStorage.getItem("jwtToken") },
    })
      .then((res) => {
        dispatch(getVotes({ votes: res.data.data.votes }));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
export const addPostVote = (voteData) => {
  return async (dispatch) => {
    axios({
      method: "POST",
      url: "http://localhost:3000/vote/posts/add",
      headers: { Authorization: localStorage.getItem("jwtToken") },
      data: voteData,
    })
      .then((res) => {
        dispatch(addVote({ vote: voteData }));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
export const updatePostVote = (voteData) => {
  return async (dispatch) => {
    axios({
      method: "PUT",
      url: "http://localhost:3000/vote/post",
      headers: { Authorization: localStorage.getItem("jwtToken") },
      data: voteData,
    })
      .then((res) => {
        dispatch(updateVote({ vote: voteData }));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
export const deletePostVote = (voteData) => {
  return async (dispatch) => {
    axios({
      method: "DELETE",
      url: "http://localhost:3000/vote/post",
      headers: { Authorization: localStorage.getItem("jwtToken") },
      data: voteData,
    })
      .then((res) => {
        dispatch(deleteVote({ vote: voteData }));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export default votesSlice.reducer;
