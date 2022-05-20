import { PostModel } from "../../types/models";
import { ADD_POSTS, GET_POSTS, SET_CURRENT_POSTS } from "../types";

const initialState = {
  posts: [],
  currentPost: null,
};

export const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POSTS:
      return {
        ...state,
        posts: action.payload,
      };
    case SET_CURRENT_POSTS:
      return {
        ...state,
        currentPost: state.posts.find(
          (p: PostModel) => p.id === action.payload
        ),
      };
    case ADD_POSTS:
      return {
        ...state,
        posts: [action.payload, ...state.posts],
      };

    default:
      return state;
  }
};
