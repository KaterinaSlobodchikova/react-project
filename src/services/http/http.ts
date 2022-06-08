import axios, { ResponseType } from "axios";
import { interceptors } from "./interceptors";

export const config = {
  baseURL: process.env.REACT_APP_BASE_URL,
  responseType: "json" as ResponseType,
  timeout: 10000,
  headers: { "Content-type": "application/json" },
};

export const http = axios.create(config);

interceptors.forEach((interceptor) => {
  interceptor(http);
});
