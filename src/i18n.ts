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
          "about me": "About Me",
          "about me first line":
            "Hi! I'm a front-end developer with a strong interest in UI design and user interaction.",
          "about me second line":
            "I enjoy challenging myself whenever I can, so don't be surprised if things look different every time you stop by — I'm always eager to learn something new.",
          "about me third line":
            "The framework I'm most comfortable with is React, but I also have experience with Angular, as well as web development using HTML, CSS, and JavaScript. I currently work mostly with TypeScript and I'm familiar with component libraries like MUI. When it comes to mobile development, I have experience with Flutter and React Native.",
          contactme: "Contact Me",
          curriculumsection: {
            education: "Education",
            upv: "Universitat Politècnica de València",
            degree: "Computer Science. ",
            gpa: "GPA: 8.7/10",
            thesis: "Thesis",
            thesistitle: "Application of AI in the Tourism Sector",
            honors: "Honors",
            honorsinformation: `7 Academic
                  Excellence Awards "(Matrículas de Honor)"`,
            volunteer: "Volunteer",
            teso: "TESO NGO",
            tesodate: "September 2023 – June 2024",
            tesodescription:
              "Participated in reuse and refurbishment of electronic devices for community use.",
            skills: "Skills",
            languages: "Languages",
            language1: "Native Spanish",
            language2: "English Cambridge C1 Advanced",
            language3: "Intermediate Valencian",
            technical: "Technical",
            technical1:
              "Intermediate/High React with TypeScript. Material UI, TailwindCSS, Motion.",
            technical2: "Intermediate Java",
            technical3: "Basic Flutter",
            experience: "Experience",
            experiencetitle1: "DialApplet Junior Front-End Developer",
            experiencedate1: "December 2023 – May 2025",
            experiencelist11:
              "Developed and maintained user interfaces using React and TypeScript.",
            experiencelist21:
              "Implemented responsive components with Material UI.",
            experiencelist31:
              "Collaborated with back-end team to integrate RESTful APIs.",
            experiencelist41:
              "Improved UI performance and usability through refactoring and testing.",
            experiencetitle2:
              "Universitat Politècnica de València Undergraduate Research Student",
            experiencedate2: "February 2024 – August 2025",
            experiencelist12:
              "Conducted research for final thesis on applying AI in the tourism industry.",
            experiencelist22:
              "Developed a prototype recommendation system for travel personalization.",
            experiencelist32:
              "Analyzed existing solutions and proposed innovative improvements.",
            download: "Download CV",
          },
          projectssection: {
            project1: {
              description:
                "The book quote-saving app, two years later — now incorporating the new knowledge I've gained in design and development. In progress.",
            },
            project2: {
              description:
                "A small Pomodoro app — because I couldn’t find any website I really liked.",
            },
            project3: {
              description:
                "A web application that recommends music based on the genre you choose and the songs in your Spotify library. I just felt like discovering something new.",
            },
            project4: {
              description:
                "A basic project to learn how to use MUI. Who doesn't have a Pokémon app?",
            },
            project5: {
              description:
                "Una aplicación web para guardar las citas de tus libros favoritos porque un día me di cuenta de que necesitaba",
            },
          },
          coursessection: {
            cooking: "Cooking...",
            course1: {
              title: "JavaScript​: From First Steps to Professional",
              year: "2025",
              web: "Frontend Masters",
            },
            course2: {
              title: "Website Accessibility, v3",
              year: "2025",
              web: "Frontend Masters",
            },
            course3: {
              title: "CSS Foundations",
              year: "2025",
              web: "Frontend Masters",
            },
            course4: {
              title: "Complete Intro to Web Development, v3",
              year: "2025",
              web: "Frontend Masters",
            },
            course5: {
              title: "Getting Started with CSS",
              year: "2025",
              web: "Frontend Masters",
            },
            course6: {
              title: "Getting Started with JavaScript, v2",
              year: "2025",
              web: "Frontend Masters",
            },
            course7: {
              title: "Basic aspects: Data, data, everywhere",
              year: "2023",
              web: "Coursera",
            },
            course8: {
              title: "Professional React Course",
              year: "2023",
              web: "Codigo Facilito",
            },
          },
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
          contactme: "Contacto",
          curriculumsection: {
            education: "Educación",
            upv: "Universitat Politècnica de València",
            degree: "Ingeniería informática. ",
            gpa: "Media: 8.7/10",
            thesis: "TFG",
            thesistitle: "Aplicaciones de la IA en el sector turístico.",
            honors: "Mátriculas de Honor",
            honorsinformation: `7`,
            volunteer: "Voluntariado",
            teso: "TESO NGO",
            tesodate: "Septiembre 2023 – Junio 2024",
            tesodescription:
              "Reutilización y reacondicionamiento de ordenadores para usos comunitarios.",
            skills: "Habilidades",
            languages: "Idiomas",
            language1: "Español nativo",
            language2: "Inglés Cambridge C1 Advanced",
            language3: "Valenciano intermedio",
            technical: "Técnicas",
            technical1:
              "React Intermedio/Alto con TypeScript. Material UI, TailwindCSS, Motion.",
            technical2: "Java Intermedio",
            technical3: "Flutter Básico",
            experience: "Experiencia",
            experiencetitle1: "DialApplet Junior Front-End Developer",
            experiencedate1: "Diciembre 2023 – Mayo 2025",
            experiencelist11:
              "Desarrollo y mantenimiento de interfaces usando React y TypeScript.",
            experiencelist21:
              "Implementación de componentes responsivos con Material UI.",
            experiencelist31:
              "Colaboración con un equipo back-end mediante la integración de APIs RESTful.",
            experiencelist41:
              "Mejora del desempeño y usabilidad de la interfaz mediante refactorización y testeo.",
            experiencetitle2:
              "Universitat Politècnica de València Desarrollo e Investigación",
            experiencedate2: "Febrero 2024 – Agosto 2025",
            experiencelist12:
              "Investigación orientada al TFG respecto a la aplicación de la IA en la industria turística.",
            experiencelist22:
              "Desarrollo de un prototipo de recomendación personalizado para viajes.",
            experiencelist32: "Análisis de soluciones actuales e innovaciones.",
            download: "Descargar CV",
          },

          projectssection: {
            project1: {
              description:
                "La app para guardar citas de libros dos años después incorporando los nuevos conocimientos adquiridos sobre diseño y desarrollo. En progreso.",
            },
            project2: {
              description:
                "Un pequeño pomodoro porque no encontraba ninguna web que me gustara.",
            },
            project3: {
              description:
                "Una aplicación web que recomienda música en base al género que  elijas y las canciones de tu librería de Spotify. Tenía ganas de escuchar música nueva.",
            },
            project4: {
              description:
                "Un proyecto básico para aprender a utilizar MUI. ¿Quién no tiene una app de pokemon?",
            },
            project5: {
              description:
                "Una aplicación web para guardar las citas de tus libros favoritos porque un día me di cuenta de que necesitaba",
            },
          },
          coursessection: {
            cooking: "En proceso...",
            course1: {
              title: "JavaScript​: From First Steps to Professional",
              year: "2025",
              web: "Frontend Masters",
            },
            course2: {
              title: "Website Accessibility, v3",
              year: "2025",
              web: "Frontend Masters",
            },
            course3: {
              title: "CSS Foundations",
              year: "2025",
              web: "Frontend Masters",
            },
            course4: {
              title: "Complete Intro to Web Development, v3",
              year: "2025",
              web: "Frontend Masters",
            },
            course5: {
              title: "Getting Started with CSS",
              year: "2025",
              web: "Frontend Masters",
            },
            course6: {
              title: "Getting Started with JavaScript, v2",
              year: "2025",
              web: "Frontend Masters",
            },
            course7: {
              title: "Basic aspects: Data, data, everywhere",
              year: "2023",
              web: "Coursera",
            },
            course8: {
              title: "Professional React Course",
              year: "2023",
              web: "Codigo Facilito",
            },
          },
        },
      },
    },
  });

export default i18n;
