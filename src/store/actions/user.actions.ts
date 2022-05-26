import { GET_USER } from "../types";
import type { UserModel } from "../../types/models";

export const getUserAC = (userInfo: UserModel) => ({
  type: GET_USER,
  payload: userInfo,
});

type GetUserAction = { type: typeof GET_USER; payload: UserModel };

export type UserActions = GetUserAction;
