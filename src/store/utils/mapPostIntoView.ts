import type { PostModel } from "../../types";

export const mapPostIntoView = (post: PostModel) => {
  return { ...post, isLiked: null };
};
