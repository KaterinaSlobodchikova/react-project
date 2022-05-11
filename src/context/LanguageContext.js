import { createContext, useCallback, useState } from "react";

export const LanguageContext = createContext(null);

const contextValues = {
  lang: "en",
  list: ["en", "ru"],
  changeLang: () => {
    console.log("language is changed");
  },
};

const useContextConfig = () => {
  const [lang, setLang] = useState("en");
  const [list, setList] = useState(["en", "ru"]);

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

export const LanguageProvider = (props) => {
  return <LanguageContext.Provider value={useContextConfig()} {...props} />;
};
