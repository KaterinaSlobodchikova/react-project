import { useCallback, useState } from "react";

export const useInputValue = () => {
  const [inputValue, setInputValue] = useState("");

  const valueHandler = useCallback((event) => {
    setInputValue(event.target.value);
  }, []);

  return [inputValue, valueHandler];
};
