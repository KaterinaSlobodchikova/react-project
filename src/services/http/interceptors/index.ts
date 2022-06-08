import { notAuthInterceptor } from "./nonAuth";
import { authInterceptor } from "./auth";

export const interceptors = [authInterceptor, notAuthInterceptor];
