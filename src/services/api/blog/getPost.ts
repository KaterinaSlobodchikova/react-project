import type { PostModel } from "../../../types";
import { http } from "../../http";

type Response = Omit<PostModel, "isLiked">;

export const getPost = (id: number) => {
  return http.get<Response>(`/blog/posts/${id}/`);
};
