import { FC, useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import {
  IconBookmark,
  IconArrowLeft,
  IconArrowRight,
} from "../../../../assets";
import { IconButton, LikeButton, Title } from "../../../../common";

import {
  PostActions,
  PostContainer,
  PostPreview,
  PostText,
  LinkContainer,
  PostLink,
  PostNavigation,
} from "./styled";
import {
  currentPostSelector,
  togglePostLikeAC,
  useAppDispatch,
  getPostTC,
} from "../../../../store";

export const Post: FC = () => {
  const dispatch = useAppDispatch();
  const { postId } = useParams<{ postId: string }>();
  const currentPost = useSelector(currentPostSelector);

  useEffect(() => {
    dispatch(getPostTC(Number(postId)));
  }, []);

  const toggleLikeHandler = useCallback(
    (id: number | undefined, value: boolean) => {
      if (!id) {
        return;
      }
      dispatch(togglePostLikeAC({ id, value }));
    },
    []
  );

  return (
    <PostContainer>
      <Title
        className="post-title-for-children"
        text={currentPost?.title ?? ""}
        indent
      />
      <PostPreview src={currentPost?.image} alt="post-preview" />
      {/*<PostText>{currentPost?.text}</PostText>*/}
      <PostText>{currentPost?.text}</PostText>

      <PostActions>
        <div className="button-container">
          <LikeButton
            liked={currentPost?.isLiked}
            onToggleLike={(value) => toggleLikeHandler(currentPost?.id, value)}
          />
          <LikeButton
            type="dislike"
            liked={currentPost?.isLiked}
            onToggleLike={(value) => toggleLikeHandler(currentPost?.id, value)}
          />
        </div>

        <IconButton
          icon={IconBookmark}
          title="Add to favorites"
          onClick={() => {
            alert("added to favs");
          }}
        />
      </PostActions>

      <div className="bottom-line" />

      <PostNavigation>
        <PostLink>
          <img src={IconArrowLeft} alt="arrow-left" />
          <LinkContainer>
            <span className="button-title">Prev</span>
            <span>Previous post title is here</span>
          </LinkContainer>
        </PostLink>
        <PostLink>
          <LinkContainer className="next-link">
            <span className="button-title">Next</span>
            <span>Next post title is here</span>
          </LinkContainer>
          <img src={IconArrowRight} alt="arrow-right" />
        </PostLink>
      </PostNavigation>
    </PostContainer>
  );
};
