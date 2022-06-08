import {
  createStore,
  combineReducers,
  applyMiddleware,
  Middleware,
  Reducer,
} from "redux";
import { useDispatch } from "react-redux";
import thunk, { ThunkAction, ThunkDispatch } from "redux-thunk";
import logger from "redux-logger";
import { composeWithDevTools } from "@redux-devtools/extension";

import { postsReducer, userReducer, authReducer } from "./reducers";
import { UserActions, PostsActions, AuthActions } from "./actions";
import { LOGOUT } from "./types";

const combinedReducer = combineReducers({
  posts: postsReducer,
  user: userReducer,
  auth: authReducer,
});

const rootReducer: Reducer = (state: AppState, action: AppAction) => {
  if (action.type === LOGOUT) {
    const postsState = state.posts; // save posts state after logout
    state = {} as AppState;
    state = { ...state, posts: postsState };
  }
  return combinedReducer(state, action);
};

const composeEnhancers = composeWithDevTools({
  traceLimit: 20,
  trace: true,
});

let middlewares: Middleware[] = [thunk];

if (process.env.NODE_ENV === "development") {
  middlewares = [...middlewares, logger];
}

export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(...middlewares))
);

export const useAppDispatch = () => useDispatch<DispatchType>();

type AppAction = UserActions | PostsActions | AuthActions;
type DispatchType = ThunkDispatch<AppState, unknown, AppAction>;
export type AppState = ReturnType<typeof combinedReducer>;
export type AppThunk = ThunkAction<void, AppState, unknown, AppAction>;

// функция для отмены подписки на изменения store
//const unsubscribe = store.subscribe(() => {
//  console.log(store.getState());
//});

// setTimeout(() => {
//   unsubscribe();
//   console.log("unsubscribed");
// }, 1000);
