import React, {
  createContext,
  useCallback,
  useState,
  ReactNode,
  FC,
  useContext,
} from "react";

import type { TODO_ANY } from "../types/any";

interface ILanguageContext {
  lang: string;
  list: string[];
  changeLang: () => void;
}

export const LanguageContext = createContext<ILanguageContext | undefined>(
  undefined
);

LanguageContext.displayName = "LanguageContext";

const useContextConfig = (config?: TODO_ANY) => {
  const [lang, setLang] = useState<"en" | "ru">("en");
  const [list, setList] = useState<string[]>(["en", "ru"]);

  const changeLang = useCallback(() => {
    if (lang === "en") setLang("ru");
    else setLang("en");
  }, [lang]);

  return {
    lang,
    list,
    changeLang,
  };
};

export const LanguageProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const contextValue = useContextConfig();

  return (
    <LanguageContext.Provider value={contextValue}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);

  if (context === undefined) {
    throw new Error("useLanguage must be inside a Provider with a value");
  }

  return {
    lang: context.lang,
    list: context.list,
    changeLang: context.changeLang,
  };
};
