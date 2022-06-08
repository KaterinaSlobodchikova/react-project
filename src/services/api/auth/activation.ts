import { AxiosResponse } from "axios";
import { http } from "../../http";

export type ActivationDTO = {
  uid: string;
  token: string;
};

type Response = any;

export const activation = (data: ActivationDTO) => {
  return http.post<ActivationDTO, AxiosResponse<Response>>(
    "/auth/users/activation/",
    data
  );
};
