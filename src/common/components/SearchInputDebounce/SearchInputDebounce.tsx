import { ChangeEvent, FC, useEffect, useRef, useState } from "react";
import { useLocation, useNavigate, Location } from "react-router-dom";
import { useSelector } from "react-redux";
import debounce from "lodash.debounce";

import { IconSearch } from "../../../assets";
import { getPostsTC, postsSelector, useAppDispatch } from "../../../store";
import { Button } from "../../ui/Button";
import { Input } from "../../ui/Input";

interface LocationState {
  from: Location;
}

export const SearchInputDebounce: FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const [searchInputShown, setSearchInputShown] = useState(false);
  //const [searchTermValue, setSearchTermValue] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const isSearchPage = location.pathname === "/search";
  const { loading: isLoading } = useSelector(postsSelector);

  useEffect(() => {
    if (isSearchPage) {
      setSearchInputShown(true);
      inputRef.current?.focus();
    } else if (!isSearchPage) {
      setSearchInputShown(false);
    }
  }, [isSearchPage]);

  const searchTermValueHandler =
    //setSearchTermValue(e.target.value);
    debounce((value: string) => {
      dispatch(getPostsTC({ search: value }));
    }, 500);

  const inputVisibilityHandler = () => {
    if (searchInputShown) {
      setSearchInputShown(false);
      const pathToRedirect =
        (location.state as LocationState)?.from?.pathname || "/";
      navigate(pathToRedirect);
      return;
    }

    if (!searchInputShown) {
      setSearchInputShown(true);
      navigate("/search", { state: { from: location } });
      return;
    }
  };

  return (
    <>
      {searchInputShown && (
        <Input
          ref={inputRef}
          disabled={isLoading}
          type="text"
          placeholder="Search..."
          //value={searchTermValue}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            searchTermValueHandler(e.target.value)
          }
        />
      )}
      <Button
        content={<img src={IconSearch} alt="search" />}
        onClick={() => inputVisibilityHandler()}
        className="secondary small"
      />
    </>
  );
};
