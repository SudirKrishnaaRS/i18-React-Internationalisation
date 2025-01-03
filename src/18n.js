import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: "en",
    returnObjects: true,
    resources: {
      en: {
        translation: {
          greeting: "Hello, Welcome!",
          description: {
            line1:
              "This POC is made to understand the concepts of Internationalisation of a Web Application with several languages",
            line2: "Developed by Sudir Krishnaa RS",
          },
        },
      },
      fr: {
        translation: {
          greeting: "Bonjour, Bienvenue!",
          description: {
            line1:
              "Ce POC est fait pour comprendre les concepts d'Internationalisation d'une Application Web avec plusieurs langues",
            line2: "Développé par Sudir Krishnaa RS",
          },
        },
      },
      hi: {
        translation: {
          greeting: "नमस्ते, स्वागत है!",
          description: {
            line1:
              "यह POC कई भाषाओं के साथ एक वेब एप्लिकेशन के अंतर्राष्ट्रीयकरण की अवधारणाओं को समझने के लिए बनाया गया है",
            line2: "सुदीर कृष्णा आरएस द्वारा विकसित",
          },
        },
      },
    },
  });
