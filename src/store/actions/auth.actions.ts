import { LOGOUT } from "./../types";
import { SET_AUTH } from "../types";

export const setAuthAC = (auth: boolean) => ({ type: SET_AUTH, payload: auth });
export const logoutAC = (auth: boolean) => ({ type: LOGOUT });
