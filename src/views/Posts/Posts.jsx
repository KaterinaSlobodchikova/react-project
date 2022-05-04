import { StyledPostsContainer, NoPosts } from './styled';
import { PostCard } from './components/PostCard';

export const Posts = (props) => {
    const { posts } = props;

    const postsElements = posts.map((post) => {
        return (
            <PostCard key={post.id} post={post} />
        );
    });

    return (
        <StyledPostsContainer>
            {posts.length !== 0 ? postsElements : <NoPosts>No posts yet...</NoPosts> }
        </StyledPostsContainer>
    );
}