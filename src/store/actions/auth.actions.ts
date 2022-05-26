import { LOGOUT } from "./../types";
import { SET_AUTH } from "../types";

export const setAuthAC = (isAuth: boolean) =>
  ({
    type: "auth/SET_AUTH",
    payload: isAuth,
  } as const);

export const logoutAC = () => ({ type: "auth/LOGOUT" } as const);

//
type SetAuthAction = ReturnType<typeof setAuthAC>;
type LogoutAction = ReturnType<typeof logoutAC>;

export type AuthActions = SetAuthAction | LogoutAction;

//второй стопоб типизации
type _SetAuthAction = { type: typeof SET_AUTH; payload: boolean };
