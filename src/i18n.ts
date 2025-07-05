import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        translation: {
          Hi: "Hi",
          "I am": "I'm",
          "but also": "But also...",
          projects: "Projects",
          courses: "Courses",
          curriculum: "Curriculum",
          "photo progress": "Photo in progress...",
          "about me": "About me",
          "about me first line":
            "Hi! I'm a front-end developer with a strong interest in UI design and user interaction.",
          "about me second line":
            "I enjoy challenging myself whenever I can, so don't be surprised if things look different every time you stop by — I'm always eager to learn something new.",
          "about me third line":
            "The framework I'm most comfortable with is React, but I also have experience with Angular, as well as web development using HTML, CSS, and JavaScript. I currently work mostly with TypeScript and I'm familiar with component libraries like MUI. When it comes to mobile development, I have experience with Flutter and React Native.",
        },
      },
      es: {
        translation: {
          Hi: "Hola",
          "I am": "soy",
          "but also": "Pero también...",
          projects: "Proyectos",
          courses: "Cursos",
          curriculum: "Currículum",
          "photo progress": "Fotgrafía en proceso...",
          "about me": "Sobre mí",
          "about me first line":
            "¡Hola! Soy una programadora front-end muy interesada por el diseño UI y la interacción con el usuario.",
          "about me second line":
            "Me gusta proponerme retos nuevos siempre que puedo por lo que no te extrañes si cada vez que pasas por aquí esto ha cambiado. Siempre estoy dispuesta a aprender algo nuevo.",
          "about me third line":
            "El framework con el que me siento más cómoda es React pero también tengo conocimientos en Angular, a parte de desarrollo web con HTML, CSS y JavaScript. Actualmente desarrollo mayormente en TypeScript y sé utilizar librerías de componentes como MUI. Respecto al desarrollo móvil tengo conocimientos en Flutter y React Native.",
        },
      },
    },
  });

export default i18n;
