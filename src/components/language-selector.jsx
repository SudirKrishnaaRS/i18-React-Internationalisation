import { useEffect } from "react";
import { useTranslation } from "react-i18next";

const languages = [
  { code: "en", lang: "English" },
  { code: "fr", lang: "French" },
  { code: "hi", lang: "Hindi" },
  { code: "it", lang: "Italian" },
  { code: "ar", lang: "Arabic" },
];

const LanguageSelector = () => {
  const { i18n } = useTranslation();

  const handleLanguageChange = (lng) => {
    i18n.changeLanguage(lng);
  };

  useEffect(() => {
    // i18n.dir() will automatically detect the current language and return the direction either RTL(right to Left) or LTR (Left to Right)
    document.body.dir = i18n.dir();
  }, [i18n, i18n.language]);

  return (
    <div className="btn-container">
      {languages.map((lng) => {
        return (
          <button
            className={lng.code === i18n.language ? "selected" : ""}
            key={lng.code}
            onClick={() => handleLanguageChange(lng.code)}
          >
            {lng.lang}
          </button>
        );
      })}
    </div>
  );
};

export default LanguageSelector;
