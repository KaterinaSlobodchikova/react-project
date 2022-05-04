import { IconLike } from '../../../assets';
import { ButtonImage, StyledLikeButton } from './styled';

export const LikeButton = (props) => {
    const { dislike, isLiked } = props;

    return (
        <StyledLikeButton>
            <ButtonImage src={IconLike} className={dislike ? 'dislike' : ''} />
        </StyledLikeButton>
    );
};