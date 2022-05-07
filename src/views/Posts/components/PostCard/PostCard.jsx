import { PostCardContainer, PostPreview, PostDate, PostTitle } from "./styled";
import DefaultPreview from "../../../../assets/images/defaultImg.jpg";

export const PostCard = (props) => {
  const { post, setLoading, loading } = props;

  // const addToFavoritesHandler = () => {
  //   setLoading(!loading);
  // };

  return (
    <PostCardContainer>
      <PostPreview src={post.image ? post.image : DefaultPreview} />
      <PostDate>{post.date}</PostDate>
      <PostTitle>{post.title}</PostTitle>
    </PostCardContainer>
  );
};
