import type { UserModel } from "./../../../types";
import { http } from "../../http";

export const getUserInfo = () => {
  return http.get<UserModel>("/auth/users/me/");
};
