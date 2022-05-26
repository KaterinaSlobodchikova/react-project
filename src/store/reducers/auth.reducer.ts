import { AuthActions } from "../actions";

const initialState = {
  auth: false,
};

type InitialState = typeof initialState;

export const authReducer = (
  state: InitialState = initialState,
  action: AuthActions
) => {
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

    default:
      return state;
  }
};
