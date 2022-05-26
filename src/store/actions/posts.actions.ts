import {
  ADD_POSTS,
  ADD_TO_FAV,
  GET_POSTS,
  SET_CURRENT_POST,
  REMOVE_FROM_FAV,
} from "../types";
import type { PostModel } from "../../types/models";

export const getPostsAC = (payload: GetPosts) => {
  return {
    type: GET_POSTS,
    payload,
  };
};

export const setCurrentPostAC = (payload: SetCurrentPost) => {
  return {
    type: SET_CURRENT_POST,
    payload,
  };
};

export const addPostAC = (payload: AddPost) => {
  return {
    type: ADD_POSTS,
    payload,
  };
};

export const addToFavAC = (payload: AddToFav) => {
  return {
    type: ADD_TO_FAV,
    payload,
  };
};

export const removeFromFavAC = (payload: RemoveFromFav) => {
  return {
    type: REMOVE_FROM_FAV,
    payload,
  };
};

type GetPosts = { type: typeof GET_POSTS; payload: PostModel[] };
type SetCurrentPost = { type: typeof SET_CURRENT_POST; payload: number };
type AddPost = { type: typeof ADD_POSTS; payload: PostModel[] };
type AddToFav = { type: typeof ADD_TO_FAV; payload: number };
type RemoveFromFav = { type: typeof REMOVE_FROM_FAV; payload: number };

export type PostsActions =
  | GetPosts
  | SetCurrentPost
  | AddPost
  | AddToFav
  | RemoveFromFav;
