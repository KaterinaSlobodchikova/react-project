import { FC } from "react";

import { IconLike } from "../../../assets";
import { ButtonImage, StyledLikeButton } from "./styled";

interface LikeButtonProps {
  isLiked: boolean;
}

export const LikeButton: FC<LikeButtonProps> = (props) => {
  const { isLiked = true } = props;

  return (
    <StyledLikeButton>
      <ButtonImage src={IconLike} className={isLiked ? "disLike" : ""} />
    </StyledLikeButton>
  );
};
