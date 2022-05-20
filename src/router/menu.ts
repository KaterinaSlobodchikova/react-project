import { useSelector } from "react-redux";
import { useMemo } from "react";

import type { MenuModel } from "./types";
import { authSelector } from "./../store/selectors";

export const menuItems: MenuModel[] = [
  {
    name: "home",
    title: "Home",
    path: "/",
    private: false,
  },
  {
    name: "login",
    title: "Login",
    path: "login",
    private: false,
  },
  {
    name: "posts",
    title: "Posts",
    path: "posts",
    private: false,
  },
  {
    name: "registration",
    title: "Registration",
    path: "registration",
    private: false,
  },
  {
    name: "resetPass",
    title: "Reset Password",
    path: "reset-password",
    private: false,
  },
  {
    name: "addPost",
    title: "Add Post",
    path: "add-post",
    private: true,
  },
];

export const useAppMenu = () => {
  const auth = useSelector(authSelector);

  const targetMenu = useMemo(() => {
    return menuItems.filter((m) => {
      return auth.auth ? m : !m.private;
    });
  }, [auth.auth]);

  return {
    menu: targetMenu,
  };
};
