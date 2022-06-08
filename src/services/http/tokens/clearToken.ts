import { TokenKeys } from "./tokenKeys";
import type { TokenKey } from "./tokenKeys";

export const clearToken = (tokenKey: TokenKey) => {
  localStorage.removeItem(TokenKeys[tokenKey]);
};
