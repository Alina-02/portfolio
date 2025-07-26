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
          repository: "Repository",
          Hi: "Hi",
          "I am": "I'm",
          "but also": "But also...",
          projects: "Projects",
          courses: "Courses",
          curriculum: "Curriculum",
          "photo progress": "Photo in progress...",
          "about me": "About Me",
          "about me first line":
            "Hi! I'm a front-end developer with a strong interest in UX/UI.",
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
                "In progress. I wanted to rebuild the first application I ever made from scratch, incorporating everything I’ve learned over the past two years. It still uses Firebase as the back-end but now features a more modern design, account management, and a dark mode. I also developed it with the goal of starting to work with animations in React.",
            },
            project2: {
              description:
                "A small app to set a one-hour Pomodoro timer. I wanted to build a simple project that would let me work with React without relying on MUI for components.",
            },
            project3: {
              description:
                "A music recommendation application based on genres using the Spotify API. It aims to return songs, albums, or artists from the selected genre that are new to the user (not saved in their account in any form). The app is currently online, but using the Spotify API requires explicit permission from Spotify to develop for the general public, so only users on the development whitelist can log in. It was built with MUI, and I’d like to expand it in the future.",
            },
            project4: {
              description:
                "My first project using TypeScript, Material UI, and Redux Toolkit. It allows users to view Pokémon information and add them to favorites. This project helped me start working with layouts, focus more on CSS, and consider making a responsive website.",
            },
            project5: {
              description:
                "An application that allows adding books and quotes from each of them. It was my first project after learning to use React without following a full tutorial. It helped me strengthen my understanding of basic hooks, fully grasp rendering, improve my JavaScript speed, and learn to use TailwindCSS. It uses Firebase as the back-end.",
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
            course9: {
              title: "Web UX Design for High Converting Websites",
              year: "2025",
              web: "Frontend Masters",
            },
            course10: {
              title: "Figma for Developers, v2",
              year: "2025",
              web: "Frontend Masters",
            },
          },
          send_email: {
            title: "Send me an email",
            text: "I am very interested in receiving any kind of feedback or suggestions regarding my education or projects, as my main goal is to keep improving. If you ultimately decide not to consider my profile, I would greatly appreciate any feedback you could provide to help me continue growing. Thank you very much for your time.",
            error: "Failed to send the message. Try again later.",
            success: "Message sent successfully!",
            message: "Your Message",
            name: "Your Name",
            email: "Your Email",
            send: "Send",
          },
        },
      },
      es: {
        translation: {
          repository: "Repositorio",
          Hi: "Hola",
          "I am": "soy",
          "but also": "Pero también...",
          projects: "Proyectos",
          courses: "Cursos",
          curriculum: "Currículum",
          "photo progress": "Fotografía en proceso...",
          "about me": "Sobre mí",
          "about me first line":
            "¡Hola! Soy una programadora front-end muy interesada por el diseño de interfaces y la interacción con el usuario.",
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
                "En proceso. Quería volver a realizar la primera aplicación que hice desde cero, incluyendo los conocimientos que he adquirido durante estos dos años. Se vuelve a utilizar Firebase como back-end pero con un diseño más moderno, gestión de cuentas y el añadido de un modo oscuro. También lo desarrollé con el objetivo de comenzar a tratar con animaciones en React.",
            },
            project2: {
              description:
                "Un pequeña app para establecer un Pomodoro de una hora. Quería hacer un proyecto pequeño que me permitiera trabajar con React sin tener MUI de intermediario a nivel de componentes. ",
            },
            project3: {
              description:
                "Una aplicación de recomendación de música en base a géneros utilizando la API de Spotify. Busca devolver canciones, álbumes o artistas del género que se seleccione y que sean nuevas para el usuario (que no tenga guardadas en su cuenta de ninguna forma). Actualmente está online, pero el uso de la API de Spotify requiere un permiso explícito por su parte para poder hacer desarrollos al público general y sólo pueden iniciar sesión quien esté previamente en la lista de desarrollo. Está desarrollada con MUI y me gustaría expandirla en un futuro.",
            },
            project4: {
              description:
                "Mi primer proyecto utilizando TypeScript, Material UI y Redux Toolkit. Permite observar la información de los Pokemons y añadirlos a favoritos. Me ayudó a comenzar a trabajar con layouts, centrarme más en el CSS y tener en consideración que la web fuera responsive.",
            },
            project5: {
              description:
                "Una aplicación para que permite añadir libros y citas de cada uno de ellos. Mi primer proyecto tras aprender a utilizar React sin seguir un tutorial completo. Me ayudó a afianzarme con los hooks básicos, entender del todo la renderización, ganar velocidad con JavaScript y aprender a usar TailwindCSS. Utiliza Firebase como back-end.",
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
            course9: {
              title: "Web UX Design for High Converting Websites",
              year: "2025",
              web: "Frontend Masters",
            },
            course10: {
              title: "Figma for Developers, v2",
              year: "2025",
              web: "Frontend Masters",
            },
          },
          send_email: {
            title: "Envíame un correo",
            text: "Estoy muy interesada en recibir cualquier tipo de crítica o sugerencia sobre mi formación o proyectos, ya que mi principal objetivo es seguir mejorando. Si finalmente decidieran no considerar mi perfil, agradecería enormemente cualquier feedback que me puedan brindar para seguir creciendo. Muchas gracias por su tiempo y consideración.",
            error: "Error al enviar el mensaje. Vuelve a intentarlo más tarde.",
            success: "Mensaje enviada de forma correcta.",
            message: "Tu mensaje",
            name: "Tu nombre",
            email: "Tu correo",
            send: "Enviar",
          },
        },
      },
    },
  });

export default i18n;
