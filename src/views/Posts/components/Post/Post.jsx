import { PostCard, PostPreview, PostDate, PostTitle, DefaultPreview } from './styled';
import defImage from '../../../../images/defaultImg.jpg';

export const Post = (props) => {
    const { post } = props;

    return (
        <PostCard>
            {post.image !== undefined ? <PostPreview src={post.image}/> : <DefaultPreview src={defImage} />} 
            <PostDate>{post.date}</PostDate>
            <PostTitle>{post.title}</PostTitle>
        </PostCard>
    );
};