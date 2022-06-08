import type { PostModel } from "../../types";
import type { PostsActions } from "../actions";
import {
  ADD_POSTS,
  ADD_TO_FAV,
  SET_POSTS,
  REMOVE_FROM_FAV,
  SET_CURRENT_POST,
  TOGGLE_POST_LIKE,
} from "../types";
import { mapPostIntoView } from "../utils";

const initialState = {
  posts: [],
  currentPost: null,
  favorites: [],
  isLiked: [],
  loading: false,
};

type InitialState = {
  posts: PostModel[];
  currentPost: null | PostModel;
  favorites: PostModel[];
  isLiked: PostModel[];
  loading: boolean;
};

export const postsReducer = (
  state: InitialState = initialState,
  action: PostsActions
): InitialState => {
  switch (action.type) {
    case SET_POSTS:
      return {
        ...state,
        posts: action.payload.map((p) => mapPostIntoView(p)),
      };

    case SET_CURRENT_POST:
      return {
        ...state,
        currentPost: mapPostIntoView(action.payload),
      };

    case ADD_POSTS:
      return {
        ...state,
        posts: [action.payload, ...state.posts],
      };

    case "posts/SET_LOADING":
      return {
        ...state,
        loading: action.payload,
      };

    case ADD_TO_FAV:
      return {
        ...state,
        favorites: [
          ...state.favorites,
          state.posts.find((p: PostModel) => p.id === action.payload)!,
        ],
      };

    case REMOVE_FROM_FAV:
      return {
        ...state,
        favorites: state.favorites.filter(
          (p: PostModel) => p.id !== action.payload
        ),
      };

    case TOGGLE_POST_LIKE:
      return {
        ...state,
        posts: state.posts.map((p: PostModel) =>
          p.id === action.payload.id
            ? { ...p, isLiked: action.payload.value }
            : p
        ),
        favorites: state.favorites.map((p: PostModel) =>
          p.id === action.payload.id
            ? { ...p, isLiked: action.payload.value }
            : p
        ),
        currentPost:
          state.currentPost?.id === action.payload.id
            ? { ...state.currentPost, isLiked: action.payload.value }
            : state.currentPost,
      };

    default:
      return state;
  }
};
