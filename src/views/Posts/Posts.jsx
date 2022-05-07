import { useState } from "react";

import { StyledPostsContainer, NoPosts } from "./styled";
import { PostCard } from "./components/PostCard";

export const Posts = (props) => {
  const { posts, loading, setLoading } = props;

  const postsElements = posts.map((post) => (
    <PostCard
      key={post.id}
      post={post}
      loading={loading}
      setLoading={setLoading}
    />
  ));

  console.log(postsElements);

  const hasPosts = !!posts.length;
  if (hasPosts) {
    return <StyledPostsContainer>{postsElements}</StyledPostsContainer>;
  }

  return <NoPosts>No posts yet...</NoPosts>;
};

// {posts.length !== 0 ? postsElements : <NoPosts>No posts yet...</NoPosts>}
