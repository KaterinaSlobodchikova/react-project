import { ADD_POSTS, GET_POSTS, SET_CURRENT_POSTS } from "../types";
import { PostModel } from "../../types/models";

type GetPostsType = { type: typeof GET_POSTS; payload: PostModel };

export const getPostsAC = (payload: PostModel): GetPostsType => {
  return {
    type: GET_POSTS,
    payload,
  };
};

export const setCurrentPostAC = (payload) => {
  return {
    type: SET_CURRENT_POSTS,
    payload,
  };
};

export const addPostAC = (payload) => {
  return {
    type: ADD_POSTS,
    payload,
  };
};
