import axios, { AxiosError, AxiosInstance } from "axios";

import { clearToken, getToken, setToken } from "../tokens";
import { history } from "../../../AppRoot";
import api from "../../api";

export const notAuthInterceptor = (instance: AxiosInstance) => {
  instance.interceptors.response.use(undefined, (error: AxiosError) => {
    if (error.response?.status === 401) {
      const refreshToken = getToken("refresh");

      if (refreshToken) {
        api.auth.verifyToken({ token: refreshToken }).then(() => {
          api.auth.refreshToken({ refresh: refreshToken }).then((res) => {
            setToken("access", res.data.access);

            if (!error.config) {
              error.config = {};
            }
            if (!error.config.headers) {
              error.config.headers = {};
            }

            error.config.headers["Authorization"] =
              "Bearer " + getToken("access");

            return axios.request(error.config);
          });
        });
      }
      clearToken("access");
      clearToken("refresh");
      history.push("/login");
    }

    return Promise.reject(error);
  });
};
