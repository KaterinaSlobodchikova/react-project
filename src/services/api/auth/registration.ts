import { AxiosResponse } from "axios";
import { http } from "../../http";

export type RegistrationDTO = {
  username: string;
  email: string;
  password: string;
};

type Response = {
  username: string;
  email: string;
  id: number;
};

export const registration = (data: RegistrationDTO) => {
  return http.post<RegistrationDTO, AxiosResponse<Response>>(
    "/auth/users/",
    data
  );
};
