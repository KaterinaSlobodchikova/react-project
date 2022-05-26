import { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Routes as RoutesSource, Route } from "react-router-dom";

import { ProtectedRoute } from "./ProtectedRoute";
import {
  AppLayout,
  LoginContainer,
  Posts,
  Post,
  Page404,
  Registration,
  ResetPass,
  AddPost,
} from "../views";

import {
  authInfoSelector,
  setAuthAC,
  getPostsAC,
  getUserAC,
  setCurrentPostAC,
} from "../store";

import { _store } from "../AppRoot";

export const Routes: FC = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector(authInfoSelector);

  useEffect(() => {
    dispatch(setAuthAC(true));
    dispatch(getPostsAC(_store.posts));
    // dispatch(setCurrentPostAC(_store.posts));
    dispatch(getUserAC(_store.user));
  }, []);

  return (
    <RoutesSource>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<div>HOME PAGE</div>} />

        <Route path="posts" element={<Posts />} />
        <Route path="posts/:postId" element={<Post />} />

        <Route path="login" element={<LoginContainer />} />
        <Route path="registration" element={<Registration />} />
        <Route path="reset-password" element={<ResetPass />} />

        <Route element={<ProtectedRoute isAllow={isAuth} pathToRedirect="/" />}>
          <Route path="add-post" element={<AddPost />} />
        </Route>

        <Route path="*" element={<Page404 />} />
      </Route>
    </RoutesSource>
  );
};
