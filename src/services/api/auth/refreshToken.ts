import axios, { AxiosResponse } from "axios";
import { config } from "../../http";

export type RefreshTokenDTO = {
  refresh: string;
};

type Response = {
  access: string;
};

export const refreshToken = (data: RefreshTokenDTO) => {
  return axios.post<RefreshTokenDTO, AxiosResponse<Response>>(
    "/auth/jwt/refresh/",
    data,
    config
  );
};
