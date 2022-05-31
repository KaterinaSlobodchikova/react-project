import {
  ADD_POSTS,
  ADD_TO_FAV,
  GET_POSTS,
  SET_CURRENT_POST,
  REMOVE_FROM_FAV,
  TOGGLE_POST_LIKE,
} from "../types";
import type { PostModel } from "../../types/models";

export const setPostsAC = (payload: GetPosts) => {
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

export const setLoadingAC = (payload: boolean) => {
  return {
    type: "posts/SET_LOADING",
    payload,
  } as const;
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

export const togglePostLikeAC = (payload: TogglePostLike) => {
  return {
    type: TOGGLE_POST_LIKE,
    payload,
  };
};

export const getPostsTC = () => async (dispatch: any) => {
  dispatch(setLoadingAC(true));
  const url = "https://jsonplaceholder.typicode.com/posts";
  const response = await fetch(url);

  try {
    if (response.ok) {
      const json = await response.json();
      dispatch(setPostsAC(json));
      dispatch(setLoadingAC(false));

      return response;
    }
    throw new Error();
  } catch (e) {
    console.log("Ошибка:" + e);
    console.log("Ошибка:" + response.status);
    dispatch(setLoadingAC(false));
    return;
  }
};

export const addPostTC = (newPost: PostModel) => async (dispatch: any) => {
  dispatch(setLoadingAC(true));
  const url = "https://jsonplaceholder.typicode.com/posts";
  const options = {
    method: "POST",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
    body: JSON.stringify(newPost),
  };
  const response = await fetch(url, options);

  try {
    if (response.ok) {
      //const json = await response.json();
      //dispatch(setPostsAC(json));
      dispatch(setLoadingAC(false));

      return response;
    }
    throw new Error();
  } catch (e) {
    console.log("Ошибка:" + e);
    console.log("Ошибка:" + response.status);
    dispatch(setLoadingAC(false));
    return;
  }
};

//
type GetPosts = { type: typeof GET_POSTS; payload: PostModel[] };
type SetCurrentPost = { type: typeof SET_CURRENT_POST; payload: number };
type AddPost = { type: typeof ADD_POSTS; payload: PostModel };
type AddToFav = { type: typeof ADD_TO_FAV; payload: number };
type RemoveFromFav = { type: typeof REMOVE_FROM_FAV; payload: number };
type TogglePostLike = {
  type: typeof TOGGLE_POST_LIKE;
  payload: { id: number; value: boolean };
};
type SetLoading = ReturnType<typeof setLoadingAC>;

export type PostsActions =
  | GetPosts
  | SetCurrentPost
  | AddPost
  | SetLoading
  | AddToFav
  | RemoveFromFav
  | TogglePostLike;
