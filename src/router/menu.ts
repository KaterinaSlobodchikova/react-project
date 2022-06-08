import { useSelector } from "react-redux";
import { useMemo } from "react";

import type { MenuModel } from "./types";
import { authInfoSelector } from "./../store/selectors";

export const menuItems: MenuModel[] = [
  {
    name: "home",
    title: "Home",
    path: "/",
    private: false,
    guestOnly: false,
  },
  //{
  //  name: "login",
  //  title: "Login",
  //  path: "login",
  //  private: false,
  //  guestOnly: true,
  //},
  {
    name: "posts",
    title: "Posts",
    path: "posts",
    private: false,
    guestOnly: false,
  },
  //{
  //  name: "registration",
  //  title: "Registration",
  //  path: "registration",
  //  private: false,
  //  guestOnly: true,
  //},
  //{
  //  name: "resetPass",
  //  title: "Reset Password",
  //  path: "reset-password",
  //  private: false,
  //  guestOnly: true,
  //},
  {
    name: "addPost",
    title: "Add Post",
    path: "add-post",
    private: true,
    guestOnly: false,
  },
  {
    name: "setNewPass",
    title: "New Password",
    path: "set-new-password",
    private: true,
    guestOnly: false,
  },
];

export const useAppMenu = () => {
  const isAuth = useSelector(authInfoSelector);

  const targetMenu = useMemo(() => {
    return menuItems.filter((m) => {
      return isAuth ? m : !m.private;
    });
  }, [isAuth]);

  return {
    menu: targetMenu,
  };
};
