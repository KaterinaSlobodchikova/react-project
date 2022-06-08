import { TokenKeys } from "./tokenKeys";
import type { TokenKey } from "./tokenKeys";

export const getToken = (tokenKey: TokenKey) => {
  return localStorage.getItem(TokenKeys[tokenKey]);
};
