import type { RegistrationDTO } from "../../services/api/auth";
import type { ErrorModel } from "../../types";
import { AuthActions } from "../actions";

const initialState = {
  auth: false,
  error: null,
};

type InitialState = {
  auth: boolean;
  error: null | ErrorModel<RegistrationDTO> | string;
};

export const authReducer = (
  state: InitialState = initialState,
  action: AuthActions
): InitialState => {
  switch (action.type) {
    case "auth/SET_AUTH":
      return {
        ...state,
        auth: action.payload,
      };

    case "auth/LOGOUT":
      return {
        ...state,
        auth: false,
      };

    case "auth/SET_ERROR":
      return {
        ...state,
        error: action.payload,
      };

    default:
      return state;
  }
};
