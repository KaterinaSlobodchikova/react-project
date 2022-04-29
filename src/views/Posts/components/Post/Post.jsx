import { PostCard, PostPreview, PostDate, PostTitle } from './styled';

export const Post = (props) => {
    const { post } = props;

    return (
        <PostCard>
            <PostPreview src={post.image}/>
            <PostDate>{post.date}</PostDate>
            <PostTitle>{post.title}</PostTitle>
        </PostCard>
    );
};