import { useEffect, useState } from "react";

import { Header } from "./common/components/Header";
import { Button } from "./common/ui/Button";
import { Main } from "./views/Main";
import { Posts } from "./views/Posts";
import { Registration } from "./views/Registration";
import { LoginContainer } from "./views/Login/LoginContainer";
import Post from "./views/Posts/components/Post";
import { Footer } from "./common/components/Footer";
import { ResetPass } from "./views/ResetPass";

const postsFromApi = [
  {
    id: 1,
    image:
      "https://i.picsum.photos/id/1060/5598/3732.jpg?hmac=31kU0jp5ejnPTdEt-8tAXU5sE-buU-y1W1qk_BsiUC8",
    text: "Description one",
    date: "2021-10-06",
    lesson_num: 123,
    title:
      "Astronauts prep for new solar arrays on nearly seven-hour spacewalk",
    author: 7,
    isLiked: true,
  },
  {
    id: 2,
    image:
      "https://i.picsum.photos/id/244/4288/2848.jpg?hmac=R6j9PBP4aBk2vcEIoOPU4R_nuknizryn2Vq8GGtWTrM",
    text: "Description two",
    date: "2021-09-12",
    lesson_num: 123,
    title:
      "Astronauts prep for new solar arrays on nearly seven-hour spacewalk",
    author: 7,
  },
  {
    id: 3,
    image:
      "https://i.picsum.photos/id/1039/6945/4635.jpg?hmac=tdgHDygif2JPCTFMM7KcuOAbwEU11aucKJ8eWcGD9_Q",
    text: "Description three",
    date: "2021-06-02",
    lesson_num: 123,
    title:
      "Astronauts prep for new solar arrays on nearly seven-hour spacewalk",
    author: 7,
  },
];

const userInfoFromApi = {
  id: "1",
  username: "Phoebe Buffay",
  email: "phoebe@gmail.com",
};

const App = (props) => {
  // const [theme, setTheme] = useState("light");
  const [loading, setLoading] = useState("false");
  const [posts, setPosts] = useState([]);
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    if ("successful request posts") {
      setPosts(postsFromApi);
    }
    if ("successful request userInfo") {
      setUserInfo(userInfoFromApi);
    }
  }, []);

  // const submitFormHandler = (event) => {
  //   console.log(event);
  // };
  // const cancelFormHandler = () => {
  //   console.log("Form was cleared");
  // };
  // const changeThemeHandler = () => {
  //   setTheme("dark");
  // };

  return (
    <Main>
      <Header userInfo={userInfo} />
      {/* {theme}
      <Button title="Change theme" onClick={changeThemeHandler} />

      <Button title="Submit" onClick={submitFormHandler} />
      <Button title="Cancel" onClick={cancelFormHandler} />

      <Posts posts={posts} loading={loading} setLoading={setLoading} />
      <Post
        title={posts[0].title}
        preview={posts[0].image}
        text={posts[0].text}
        isLiked={posts[0].isLiked}
      /> */}

      <LoginContainer />
      <Registration />
      <ResetPass />
      <Footer />
    </Main>
  );
};

export default App;
