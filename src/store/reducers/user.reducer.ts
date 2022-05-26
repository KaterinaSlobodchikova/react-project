import { UserModel } from "./../../types/models/user.model";
import type { UserActions } from "../actions";
import { GET_USER } from "./../types";

//const initialState = {
//  user: {
//    id: "",
//    username: "",
//    email: "",
//  },
//};

const initialState = {
  user: null,
};

type InitialState = {
  user: null | UserModel;
};

export const userReducer = (
  state: InitialState = initialState,
  action: UserActions
) => {
  switch (action.type) {
    case GET_USER:
      return { ...state, user: action.payload };
    default:
      return state;
  }
};
