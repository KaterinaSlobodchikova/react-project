import { TokenKeys } from "./tokenKeys";
import type { TokenKey } from "./tokenKeys";

export const setToken = (tokenKey: TokenKey, token: string) => {
  localStorage.setItem(TokenKeys[tokenKey], token);
};
