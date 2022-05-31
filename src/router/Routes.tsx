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
  NewPass,
} from "../views";

import {
  authInfoSelector,
  setAuthAC,
  setPostsAC,
  getUserAC,
  setCurrentPostAC,
  getPostsTC,
} from "../store";

import { _store } from "../AppRoot";

export const Routes: FC = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector(authInfoSelector);

  useEffect(() => {
    dispatch(setAuthAC(true));
    //dispatch(setPostsAC(_store.posts));
    //@ts-ignore
    dispatch(getPostsTC());
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
        <Route path="set-new-password" element={<NewPass />} />

        <Route path="*" element={<Page404 />} />
      </Route>
    </RoutesSource>
  );
};
