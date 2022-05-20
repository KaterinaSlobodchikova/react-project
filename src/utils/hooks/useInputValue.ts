import { ChangeEvent, useCallback, useState } from "react";

type InputEvent = ChangeEvent<HTMLInputElement>;

export const useInputValue = (): [string, (e: InputEvent) => void] => {
  const [inputValue, setInputValue] = useState("");

  const valueHandler = useCallback((e: InputEvent) => {
    setInputValue(e.target.value);
  }, []);

  return [inputValue, valueHandler];
};
