import { StyledPostsContainer, NoPosts } from './styled';
import { Post } from './components/Post';

export const Posts = (props) => {
    //const { children } = props;

    const posts = [
        {
            "id": 1, 
            "image": "https://i.picsum.photos/id/1060/5598/3732.jpg?hmac=31kU0jp5ejnPTdEt-8tAXU5sE-buU-y1W1qk_BsiUC8",
            "text": "Description one",
            "date": "2021-10-06",
            "lesson_num": 123,
            "title": "Title one",
            "author": 7,
        },
        {
            "id": 2, 
            "image": "https://i.picsum.photos/id/244/4288/2848.jpg?hmac=R6j9PBP4aBk2vcEIoOPU4R_nuknizryn2Vq8GGtWTrM",
            "text": "Description two",
            "date": "2021-09-12",
            "lesson_num": 123,
            "title": "Title two",
            "author": 7,
        },
        {
            "id": 3, 
            "image": "https://i.picsum.photos/id/1039/6945/4635.jpg?hmac=tdgHDygif2JPCTFMM7KcuOAbwEU11aucKJ8eWcGD9_Q",
            "text": "Description three",
            "date": "2021-06-02",
            "lesson_num": 123,
            "title": "Title three",
            "author": 7,
        },
    ]

    //const _posts = [];

    const posteElements = posts.map((post) => {
        return (
            <Post key={post.id} post={post} />
        );
    });

    return (
        <StyledPostsContainer>
            {posts.length !== 0 ? posteElements : <NoPosts>No posts yet...</NoPosts> }
        </StyledPostsContainer>
    );
}