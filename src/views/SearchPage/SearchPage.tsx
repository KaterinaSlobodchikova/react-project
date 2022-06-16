import { FC, useMemo, useCallback, useState } from "react";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

import { StyledPostsContainer, NoPosts, Tabs, TabsSwitcher } from "./styled";
import { PostCard } from "../Posts/components/PostCard";
import {
  AppState,
  postsInfoSelector,
  favoritesPostsSelector,
  removeFromFavAC,
  addToFavAC,
  togglePostLikeAC,
  useAppDispatch,
} from "../../store";
import type { PostModel } from "../../types/models";
import { Title } from "../../common";

type Tabs = "All" | "My favorites";

export const SearchPage: FC = () => {
  const dispatch = useAppDispatch();
  const [currentTab, setCurrentTab] = useState<Tabs>("All");
  const posts = useSelector<AppState, PostModel[]>(postsInfoSelector);
  const favoritesPosts = useSelector<AppState, PostModel[]>(
    favoritesPostsSelector
  );

  const changeTabHandler = () => {
    if (currentTab === "All") setCurrentTab("My favorites");
    else setCurrentTab("All");
  };

  const toggleFavoritesHandler = useCallback(
    (postId: number) => {
      const favsIds = favoritesPosts.map((post) => post.id);
      if (favsIds.includes(postId)) {
        dispatch(removeFromFavAC(postId));
      } else {
        dispatch(addToFavAC(postId));
      }
    },
    [favoritesPosts]
  );

  const toggleLikeHandler = useCallback((id: number, value: boolean) => {
    dispatch(togglePostLikeAC({ id, value }));
  }, []);

  const allPostsElements = useMemo(() => {
    return posts?.map((post: PostModel) => (
      <PostCard
        key={post.id}
        post={post}
        liked={post.isLiked!}
        onFavsToggle={toggleFavoritesHandler}
        onLikeToggle={toggleLikeHandler}
      />
    ));
  }, [posts, toggleFavoritesHandler, toggleLikeHandler]);

  const favoritesPostsElements = useMemo(() => {
    return favoritesPosts?.map((post: PostModel) => (
      <PostCard
        key={post.id}
        post={post}
        liked={post.isLiked!}
        onFavsToggle={toggleFavoritesHandler}
        onLikeToggle={toggleLikeHandler}
      />
    ));
  }, [favoritesPosts, toggleFavoritesHandler, toggleLikeHandler]);

  const hasPosts = !!posts?.length;
  if (hasPosts) {
    return (
      <StyledPostsContainer>
        <Title text={`Search results :searchTerm`} />

        {/*<Tabs>
          <TabsSwitcher
            onClick={changeTabHandler}
            className={currentTab === "All" ? "active" : ""}
          >
            All posts
          </TabsSwitcher>
          <TabsSwitcher
            onClick={changeTabHandler}
            className={currentTab === "My favorites" ? "active" : ""}
          >
            My favorites
          </TabsSwitcher>
        </Tabs>*/}

        <div className="post-container">
          {currentTab === "All" ? allPostsElements : favoritesPostsElements}
        </div>

        <Outlet />
      </StyledPostsContainer>
    );
  }

  return (
    <NoPosts>
      Your search - :serchTerm - did not match any posts. Please, try again.
    </NoPosts>
  );
};

// {posts.length !== 0 ? postsElements : <NoPosts>No posts yet...</NoPosts>}
