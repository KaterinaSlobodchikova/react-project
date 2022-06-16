import axios from "axios";
import { config } from "../../http";

export type VerifyTokenDTO = {
  token: string;
};

export const verifyToken = (data: VerifyTokenDTO) => {
  return axios.post<VerifyTokenDTO>("/auth/jwt/verify/", data, config);
};
