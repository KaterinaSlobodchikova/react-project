import { LOGOUT } from "./types";
import { createStore, combineReducers } from "redux";
import { postsReducer, userReducer, authReducer } from "./reducers";

const combinedReducer = combineReducers({
  posts: postsReducer,
  user: userReducer,
  auth: authReducer,
});

const rootReducer = (state, action) => {
  if (action.type === LOGOUT) {
    // const postsState = state.posts; // save posts state after logout
    state = {};
    // state = { ...state, posts: postsState };
  }
  return combinedReducer(state, action);
};

export const store = createStore(rootReducer);

store.subscribe(() => {
  console.log(store.getState());
});

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
