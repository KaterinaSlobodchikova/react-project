import { AxiosResponse } from "axios";
import { http } from "../../http";

export type LoginDTO = {
  email: string;
  password: string;
  rememberMe?: boolean;
};

type Response = {
  access: string;
  refresh: string;
};

export const login = (data: LoginDTO) => {
  return http.post<LoginDTO, AxiosResponse<Response>>(
    "/auth/jwt/create/",
    data
  );
};
