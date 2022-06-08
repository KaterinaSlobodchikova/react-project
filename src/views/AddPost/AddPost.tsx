import { FC, useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";

import { Button, Input, Title } from "../../common";
import { AddPostContainer } from "./styled";
import { useInputValue } from "../../utils/hooks/useInputValue";
import {
  addPostAC,
  addPostTC,
  useAppDispatch,
  userInfoSelector,
} from "../../store";
import { PostModel } from "../../types";

export const AddPost: FC = () => {
  const dispatch = useAppDispatch();
  const userInfo = useSelector(userInfoSelector);
  const userId = userInfo?.id;

  const [title, titleHandler] = useInputValue();
  const [url, urlHandler] = useInputValue();
  const [date, dateHandler] = useInputValue();
  const [image, imageHandler] = useInputValue();
  const [description, descriptionHandler] = useInputValue();
  const [text, textHandler] = useInputValue();

  const inputRef = useRef(null);
  useEffect(() => {
    console.log(inputRef.current);
  }, []);

  const addPostHandler = () => {
    if (title.length === 0) return;
    if (date.length === 0) return;

    const postData: PostModel = {
      id: Math.floor(Math.random() * 1000),
      date,
      image,
      title,
      author: userId!,
      text,
      lesson_num: 44,
      isLiked: false,
    };
    //dispatch(addPostAC(postData));
    dispatch(addPostTC(postData));
  };

  const closeAddPostHandler = () => {
    console.log("Post wasn't added");
  };

  return (
    <AddPostContainer>
      <Title text="Add post" indent />

      <p>Title</p>
      <Input
        ref={inputRef}
        type="text"
        value={title}
        onChange={titleHandler}
        placeholder="Astronauts prep for new solar arrays on nearly spacewalk"
      />

      <p>URL</p>
      <Input
        ref={inputRef}
        type="text"
        value={url}
        onChange={urlHandler}
        placeholder="iss-us-eva-79"
      />

      <p>Publish at</p>
      <Input
        ref={inputRef}
        type="date"
        value={date}
        onChange={dateHandler}
        placeholder="11/03/2022"
      />

      <p>Image</p>
      <Input
        ref={inputRef}
        type="text"
        value={image}
        onChange={imageHandler}
        placeholder="Choose image"
      />

      <p>Description</p>
      <Input
        ref={inputRef}
        type="text"
        value={description}
        onChange={descriptionHandler}
        placeholder="Add your text"
      />

      <p>Text</p>
      <Input
        ref={inputRef}
        type="text"
        value={text}
        onChange={textHandler}
        placeholder="Add your text"
      />

      <button>Delete post</button>

      <Button
        title="Cancel"
        onClick={closeAddPostHandler}
        className="secondary gray"
      />
      <Button title="Add post" onClick={addPostHandler} />
    </AddPostContainer>
  );
};
