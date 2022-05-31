import { FC } from "react";

import { IconLike } from "../../../assets";
import { StyledLikeButton, DislikeImage, LikeImage } from "./styled";

type LikeButtonType = "like" | "dislike";

interface LikeButtonProps {
  type?: LikeButtonType;
  liked: boolean;
  onToggleLike: (type: boolean) => void;
}

export const LikeButton: FC<LikeButtonProps> = (props) => {
  const { type = "like", liked, onToggleLike } = props;

  const map: Record<LikeButtonType, ReturnType<FC>> = {
    like: (
      <StyledLikeButton
        className={liked === true ? "active" : ""}
        onClick={() => onToggleLike(true)}
      >
        <LikeImage src={IconLike} />
      </StyledLikeButton>
    ),
    dislike: (
      <StyledLikeButton
        className={liked === false ? "active" : ""}
        onClick={() => onToggleLike(false)}
      >
        <DislikeImage src={IconLike} />
      </StyledLikeButton>
    ),
  };

  return map[type];
};
