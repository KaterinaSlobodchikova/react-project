import { UserModel } from "./../../types/models/user.model";
import type { UserActions } from "../actions";

const initialState = {
  user: null,
  loading: false,
};

type InitialState = {
  user: null | UserModel;
  loading: boolean;
};

export const userReducer = (
  state: InitialState = initialState,
  action: UserActions
): InitialState => {
  switch (action.type) {
    case "user/SET_USER_DATA":
      return { ...state, user: action.payload };

    case "user/SET_USER_LOADING":
      return {
        ...state,
        loading: action.payload,
      };

    default:
      return state;
  }
};
