import { FC, useEffect } from "react";
import { useSelector } from "react-redux";
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
  Activation,
} from "../views";

import { authInfoSelector, useAppDispatch, initAppTC } from "../store";

export const Routes: FC = () => {
  const dispatch = useAppDispatch();
  const isAuth = useSelector(authInfoSelector);

  useEffect(() => {
    dispatch(initAppTC());
  }, []);

  return (
    <RoutesSource>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<div>HOME PAGE</div>} />

        <Route path="posts" element={<Posts />} />
        <Route path="posts/:postId" element={<Post />} />

        <Route element={<ProtectedRoute isAllow={isAuth} pathToRedirect="/" />}>
          <Route path="add-post" element={<AddPost />} />
          <Route path="set-new-password" element={<NewPass />} />
        </Route>

        <Route
          element={<ProtectedRoute isAllow={!isAuth} pathToRedirect="/posts" />}
        >
          <Route path="login" element={<LoginContainer />} />
          <Route path="registration" element={<Registration />} />
          <Route path="reset-password" element={<ResetPass />} />
          <Route path="activate/:uid/:token" element={<Activation />} />
        </Route>

        <Route path="*" element={<Page404 />} />
      </Route>
    </RoutesSource>
  );
};
