import { AxiosError } from "axios";

import api, { clearToken, getToken, setToken } from "../../services";
import { SET_ERROR } from "../types";
import type { LoginDTO, RegistrationDTO } from "../../services/api/auth";
import type { ErrorModel } from "../../types";
import type { AppThunk } from "./../store";
import { history } from "../../AppRoot";
import { getUserInfoTC, setUserLoadingAC } from "./user.actions";
import { getPostsTC } from "./posts.actions";

export const logoutAC = () => ({ type: "auth/LOGOUT" } as const);

export const setAuthAC = (isAuth: boolean) =>
  ({
    type: "auth/SET_AUTH",
    payload: isAuth,
  } as const);

export const setErrorAC = (
  error: ErrorModel<RegistrationDTO> | string
): SetErrorAction => ({
  type: SET_ERROR,
  payload: error,
});

export const registrationTC =
  (data: RegistrationDTO): AppThunk =>
  async (dispatch) => {
    try {
      const response = await api.auth.registration(data);
      if (response.status === 201) {
        console.log(response.data);

        return response;
      }
      throw new Error();
    } catch (e) {
      if (e instanceof AxiosError) {
        dispatch(setErrorAC(e.response?.data));
        return e;
      } else {
        console.error(e);
        return e;
      }
    }
  };

export const loginTC =
  (data: LoginDTO): AppThunk =>
  async (dispatch) => {
    try {
      const response = await api.auth.login(data);

      if (response.status === 200) {
        dispatch(setAuthAC(true));
        setToken("access", response.data.access);
        setToken("refresh", response.data.refresh);

        await dispatch(getUserInfoTC());

        history.push("/posts");
        return response;
      }
      throw new Error();
    } catch (e) {
      if (e instanceof AxiosError) {
        dispatch(setErrorAC(e.response?.data));
        return e;
      } else {
        console.error(e);
        return e;
      }
    }
  };

export const initAppTC = (): AppThunk => async (dispatch) => {
  try {
    await dispatch(getPostsTC());

    if (getToken("access")) {
      await dispatch(getUserInfoTC());
    }
  } catch (e) {
    console.error(e);
    return e;
  }
};

export const logoutTC = (): AppThunk => (dispatch) => {
  dispatch(logoutAC());
  dispatch(setUserLoadingAC(true));
  clearToken("access");
  clearToken("refresh");
  history.push("/login");
};

//
type SetAuthAction = ReturnType<typeof setAuthAC>;
type LogoutAction = ReturnType<typeof logoutAC>;
type SetErrorAction = {
  type: typeof SET_ERROR;
  payload: ErrorModel<RegistrationDTO> | string;
};

export type AuthActions = SetAuthAction | LogoutAction | SetErrorAction;
