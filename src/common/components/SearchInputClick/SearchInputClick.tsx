import { FC, KeyboardEvent } from "react";
import { useLocation } from "react-router-dom";
import { IconSearch } from "../../../assets";
import { getPostsTC, useAppDispatch } from "../../../store";
import { useInputValue } from "../../../utils/hooks/useInputValue";
import { Button } from "../../ui/Button";
import { Input } from "../../ui/Input";

export const SearchInputClick: FC = () => {
  const [searchTerm, searchTermHandler] = useInputValue();
  const dispatch = useAppDispatch();
  const location = useLocation();
  const isPostPage = location.pathname === "/posts";

  const searchHandler = () => {
    dispatch(getPostsTC({ search: searchTerm }));
  };

  const onEnterSearchHandler = (e: KeyboardEvent<HTMLInputElement>) => {
    console.log(e.key);
    if (e.key === "Enter") {
      if (searchTerm === "") return;
      dispatch(getPostsTC({ search: searchTerm }));
    }
  };
  return (
    <>
      <Input
        disabled={!isPostPage}
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={searchTermHandler}
        onKeyDown={onEnterSearchHandler}
      />

      <Button
        disabled={!isPostPage}
        content={<img src={IconSearch} alt="search" />}
        onClick={() => searchHandler()}
        className="secondary small"
      />
    </>
  );
};
