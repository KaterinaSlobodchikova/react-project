import axios from "axios";
import type { PostModel } from "../../../types";
import { config } from "../../http";

type GetPostsDTO = {
  author: number;
  lesson_num: number;
  limit: number;
  offset: number;
  ordering: string;
  search: string;
};

type Response = {
  count: number;
  next: string;
  previous: string;
  results: PostModel[];
};

export const getPosts = (queryString?: GetPostsDTO) => {
  return axios.get<Response>("/blog/posts/", {
    ...config,
    params: queryString,
  });
};
