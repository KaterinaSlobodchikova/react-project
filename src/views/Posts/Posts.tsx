import { FC, useMemo } from "react";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

import { StyledPostsContainer, NoPosts } from "./styled";
import { PostCard } from "./components/PostCard";
import { postsInfoSelector } from "../../store";

export const Posts: FC = () => {
  const postsInfo = useSelector(postsInfoSelector);

  const memoPostsElements = useMemo(() => {
    return postsInfo?.map((post) => <PostCard key={post.id} post={post} />);
  }, [postsInfo]);

  const hasPosts = !!postsInfo?.length;
  if (hasPosts) {
    return (
      <StyledPostsContainer>
        {memoPostsElements}
        <Outlet />
      </StyledPostsContainer>
    );
  }

  return <NoPosts>No posts yet...</NoPosts>;
};

// {posts.length !== 0 ? postsElements : <NoPosts>No posts yet...</NoPosts>}
