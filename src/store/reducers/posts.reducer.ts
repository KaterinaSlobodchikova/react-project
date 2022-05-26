import type { PostModel } from "../../types/models";
import type { PostsActions } from "../actions";
import {
  ADD_POSTS,
  ADD_TO_FAV,
  GET_POSTS,
  REMOVE_FROM_FAV,
  SET_CURRENT_POST,
} from "../types";

const initialState = {
  posts: [],
  currentPost: null,
  favorites: [],
  isLiked: [],
};

//type InitialState = {
//  posts: PostModel[];
//  currentPost: null | PostModel;
//  favorites: PostModel[];
//  isLiked: PostModel[];
//};

export const postsReducer = (state = initialState, action: PostsActions) => {
  switch (action.type) {
    case GET_POSTS:
      return {
        ...state,
        posts: action.payload,
      };

    case SET_CURRENT_POST:
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

    case ADD_TO_FAV:
      return {
        ...state,
        favorites: [
          ...state.favorites,
          state.posts.find((p: PostModel) => p.id === action.payload),
        ],
      };

    case REMOVE_FROM_FAV:
      return {
        ...state,
        favorites: state.favorites.filter(
          (p: PostModel) => p.id !== action.payload
        ),
      };

    default:
      return state;
  }
};
