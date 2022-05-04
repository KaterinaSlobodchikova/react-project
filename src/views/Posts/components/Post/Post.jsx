import { IconBookmark } from '../../../../assets';
import { LikeButton } from '../../../../common';
import IconButton from '../../../../common/ui/IconButton';
import { PostActions, PostContainer, PostPreview, PostText } from './styled';

export const Post = (props) => {
    const { title, preview, text, isLiked } = props;

    return (
        <PostContainer>
            <h2>{title}</h2>
            <PostPreview src={preview} alt="post-preview" />
            <PostText>{text}</PostText>

            <PostActions>
                <div className='button-container'>
                    <LikeButton isLiked />
                    <LikeButton dislike isLiked/>
                </div>

                <IconButton  
                    icon={IconBookmark}
                    title='Add to favorites'
                    // onClick={}
                />
            </PostActions>
        </PostContainer>
    );
};