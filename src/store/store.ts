import {
  createStore,
  combineReducers,
  applyMiddleware,
  Middleware,
} from "redux";

import thunk from "redux-thunk";
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

const rootReducer = (state, action: AppAction) => {
  if (action.type === LOGOUT) {
    // const postsState = state.posts; // save posts state after logout
    state = {};
    // state = { ...state, posts: postsState };
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

export type AppState = ReturnType<typeof rootReducer>;
type AppAction = UserActions | PostsActions | AuthActions;

// функция для отмены подписки на изменения store
//const unsubscribe = store.subscribe(() => {
//  console.log(store.getState());
//});

// setTimeout(() => {
//   unsubscribe();
//   console.log("unsubscribed");
// }, 1000);

// @ts-ignore
window.store = store;
