import { GET_USER } from "../types";

export const getUserAC = (userInfo) => ({ type: GET_USER, payload: userInfo });
