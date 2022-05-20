import { createSelector } from "reselect";

//auth
export const authSelector = (state) => state.auth;
export const authInfoSelector = createSelector(
  authSelector,
  (state) => state.posts
);

//posts
export const postsSelector = (state) => state.posts;
export const postsInfoSelector = createSelector(
  postsSelector,
  (state) => state.posts
);

//user
export const userSelector = (state) => state.user;
export const userInfoSelector = createSelector(
  userSelector,
  (state) => state.user
);
