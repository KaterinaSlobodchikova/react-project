import { createSelector } from "reselect";
import type { AppState } from "./store";

//auth
export const authSelector = (state: AppState) => state.auth;
export const authInfoSelector = createSelector(
  authSelector,
  (state) => state.auth
);

//posts
export const postsSelector = (state: AppState) => state.posts;
export const postsInfoSelector = createSelector(
  postsSelector,
  (state) => state.posts
);
export const currentPostSelector = createSelector(
  postsSelector,
  (state) => state.currentPost
);
export const favoritesPostsSelector = createSelector(
  postsSelector,
  (state) => state.favorites
);
export const postsLoadingSelector = createSelector(
  postsSelector,
  (state) => state.loading
);

//user
export const userSelector = (state: AppState) => state.user;
export const userInfoSelector = createSelector(
  userSelector,
  (state) => state.user
);
