import { AxiosInstance } from "axios";

import { getToken } from "../tokens";

export const authInterceptor = (instance: AxiosInstance) => {
  instance.interceptors.request.use((config) => {
    if (!config) {
      config = {};
    }
    if (!config.headers) {
      config.headers = {};
    }

    config.headers.Authorization = "Bearer " + getToken("access");

    return Promise.resolve(config);
  });
};
