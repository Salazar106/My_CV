import { Avatar, Tooltip, image } from "@nextui-org/react";
import { FaGithub, FaLinkedin, FaMailBulk } from "react-icons/fa";
import Porcent from "../ui/aboutMe/knob";
import {Image} from "@nextui-org/react";
import NextImage from "next/image";
import AcordeonContent from "@/app/ui/aboutMe/AcordeonSkillContent"


  const FrontEnd = [
    {
      key: "1",
      nombre: "HTML",
      description: <Porcent values={100} />,
      image: "/imgs/html.png",
      habilidades:[
        {
          tittle: "Estructuracion de contenido",
          description:'Experto en la creación de estructuras semánticas utilizando etiquetas HTML adecuadas, asegurando que el contenido sea accesible y fácil de entender tanto para usuarios como para motores de búsqueda.'
        },
        {
          tittle: "Optimización SEO",
          description:'Implementación de técnicas de SEO on-page a través de un marcado HTML correcto, incluyendo el uso de etiquetas meta, encabezados y atributos alt en imágenes.'
        },
        {
          tittle: "Responsividad",
          description:'Conoce y utiliza las técnicas de diseño responsivo para adaptar el contenido y la interfaz de usuario a diferentes tamaños de pantalla y dispositivos.'
        },
        {
          tittle: "Formularios web",
          description:'Conocimiento avanzado en la creación y validación de formularios web, utilizando elementos de formulario adecuados y atributos para mejorar la usabilidad y accesibilidad.'
        }
      ]
    },
    {
      key: "2",
      nombre: "CSS",
      image: "/imgs/css.png",
      description: <Porcent values={100} />,
      habilidades:[
        {
          tittle: "Diseño responsivo",
          description:'Dominio en la creación de diseños web responsivos que se adaptan a diferentes tamaños de pantalla y dispositivos, utilizando técnicas como media queries, flexbox y grid layout.'
        },
        {
          tittle: "Estilización avanzada",
          description:'Habilidad para aplicar estilos avanzados utilizando CSS3, incluyendo animaciones, transiciones, sombras y gradientes para mejorar la experiencia visual del usuario.'
        },
        {
          tittle: "Frameworks CSS",
          description:'Conocimiento en la utilización de frameworks como Bootstrap y Tailwind CSS para acelerar el desarrollo de interfaces atractivas y coherentes.'
        }
      ]
    },
    {
      key: "3",
      nombre: "JavaScript",
      image: "/imgs/js.png",
      description: <Porcent values={100} />,
      habilidades:[
        {
          tittle: "Programación de interfaces dinámicas",
          description:' Creación de interfaces de usuario interactivas y dinámicas utilizando JavaScript puro y frameworks como React, Angular o Next.js.'
        },
        {
          tittle: "Manipulación del DOM",
          description:'Experiencia en la manipulación del Document Object Model (DOM) para crear experiencias de usuario fluidas y responsivas mediante el uso de eventos, selectores y métodos de manipulación de elementos.'
        },
        {
          tittle: "Asincronía y AJAX",
          description:' Dominio en la gestión de operaciones asíncronas utilizando Promesas, async/await y la API Fetch para realizar solicitudes AJAX y trabajar con datos en tiempo real.'
        },
        {
          tittle: "Testing y depuración",
          description:'Capacidades avanzadas en la depuración de código JavaScript utilizando herramientas de desarrollo en navegadores y frameworks de testing como Jest y Mocha para asegurar la calidad del código.'
        }
      ]
    },
    {
      key: "4",
      nombre: "JQuery",
      image: "/imgs/jquery.svg",
      description: <Porcent values={90} />,
      habilidades:[
        {
          tittle: "Estructuracion de contenido",
          description:'Experto en la creación de estructuras semánticas utilizando etiquetas HTML adecuadas, asegurando que el contenido sea accesible y fácil de entender tanto para usuarios como para motores de búsqueda.'
        },
        {
          tittle: "Optimización SEO",
          description:'Implementación de técnicas de SEO on-page a través de un marcado HTML correcto, incluyendo el uso de etiquetas meta, encabezados y atributos alt en imágenes.'
        },
        {
          tittle: "Responsividad",
          description:'Conoce y utiliza las técnicas de diseño responsivo para adaptar el contenido y la interfaz de usuario a diferentes tamaños de pantalla y dispositivos.'
        },
        {
          tittle: "Formularios web",
          description:'Conocimiento avanzado en la creación y validación de formularios web, utilizando elementos de formulario adecuados y atributos para mejorar la usabilidad y accesibilidad.'
        }
      ]
    },
    {
      key: "5",
      nombre: "React.js",
      image: "/imgs/react-1.svg",
      description: <Porcent values={80} />,
     habilidades:[
        {
          tittle: "Estructuracion de contenido",
          description:'Experto en la creación de estructuras semánticas utilizando etiquetas HTML adecuadas, asegurando que el contenido sea accesible y fácil de entender tanto para usuarios como para motores de búsqueda.'
        },
        {
          tittle: "Optimización SEO",
          description:'Implementación de técnicas de SEO on-page a través de un marcado HTML correcto, incluyendo el uso de etiquetas meta, encabezados y atributos alt en imágenes.'
        },
        {
          tittle: "Responsividad",
          description:'Conoce y utiliza las técnicas de diseño responsivo para adaptar el contenido y la interfaz de usuario a diferentes tamaños de pantalla y dispositivos.'
        },
        {
          tittle: "Formularios web",
          description:'Conocimiento avanzado en la creación y validación de formularios web, utilizando elementos de formulario adecuados y atributos para mejorar la usabilidad y accesibilidad.'
        }
      ]
    },
    {
      key: "6",
      nombre: "Next.js",
      image: "/imgs/next.svg",
      description: <Porcent values={80} />,
     habilidades:[
        {
          tittle: "Estructuracion de contenido",
          description:'Experto en la creación de estructuras semánticas utilizando etiquetas HTML adecuadas, asegurando que el contenido sea accesible y fácil de entender tanto para usuarios como para motores de búsqueda.'
        },
        {
          tittle: "Optimización SEO",
          description:'Implementación de técnicas de SEO on-page a través de un marcado HTML correcto, incluyendo el uso de etiquetas meta, encabezados y atributos alt en imágenes.'
        },
        {
          tittle: "Responsividad",
          description:'Conoce y utiliza las técnicas de diseño responsivo para adaptar el contenido y la interfaz de usuario a diferentes tamaños de pantalla y dispositivos.'
        },
        {
          tittle: "Formularios web",
          description:'Conocimiento avanzado en la creación y validación de formularios web, utilizando elementos de formulario adecuados y atributos para mejorar la usabilidad y accesibilidad.'
        }
      ]
    },
    {
      key: "7",
      nombre: "Angular",
      image: "/imgs/angular.svg",
      description: <Porcent values={60} />,
     habilidades:[
        {
          tittle: "Estructuracion de contenido",
          description:'Experto en la creación de estructuras semánticas utilizando etiquetas HTML adecuadas, asegurando que el contenido sea accesible y fácil de entender tanto para usuarios como para motores de búsqueda.'
        },
        {
          tittle: "Optimización SEO",
          description:'Implementación de técnicas de SEO on-page a través de un marcado HTML correcto, incluyendo el uso de etiquetas meta, encabezados y atributos alt en imágenes.'
        },
        {
          tittle: "Responsividad",
          description:'Conoce y utiliza las técnicas de diseño responsivo para adaptar el contenido y la interfaz de usuario a diferentes tamaños de pantalla y dispositivos.'
        },
        {
          tittle: "Formularios web",
          description:'Conocimiento avanzado en la creación y validación de formularios web, utilizando elementos de formulario adecuados y atributos para mejorar la usabilidad y accesibilidad.'
        }
      ]
    }
  ]
  
  
  const BackEnd = [
    {
      key: "1",
      nombre: "Javascript",
      image: "/imgs/js.svg",
      description: <Porcent values={100} />,
     habilidades:[
        {
          tittle: "Estructuracion de contenido",
          description:'Experto en la creación de estructuras semánticas utilizando etiquetas HTML adecuadas, asegurando que el contenido sea accesible y fácil de entender tanto para usuarios como para motores de búsqueda.'
        },
        {
          tittle: "Optimización SEO",
          description:'Implementación de técnicas de SEO on-page a través de un marcado HTML correcto, incluyendo el uso de etiquetas meta, encabezados y atributos alt en imágenes.'
        },
        {
          tittle: "Responsividad",
          description:'Conoce y utiliza las técnicas de diseño responsivo para adaptar el contenido y la interfaz de usuario a diferentes tamaños de pantalla y dispositivos.'
        },
        {
          tittle: "Formularios web",
          description:'Conocimiento avanzado en la creación y validación de formularios web, utilizando elementos de formulario adecuados y atributos para mejorar la usabilidad y accesibilidad.'
        }
      ]
    },
    {
      key: "2",
      nombre: "Typescript",
      image: "/imgs/typescript.svg",
      description: <Porcent values={90} />,
      habilidades:''
    },
    {
      key: "3",
      nombre: "PHP",
      image: "/imgs/react-1.svg",
      description: <Porcent values={100} />,
      habilidades:[
          {
            tittle: "Estructuracion de contenido",
            description:'Experto en la creación de estructuras semánticas utilizando etiquetas HTML adecuadas, asegurando que el contenido sea accesible y fácil de entender tanto para usuarios como para motores de búsqueda.'
          },
          {
            tittle: "Optimización SEO",
            description:'Implementación de técnicas de SEO on-page a través de un marcado HTML correcto, incluyendo el uso de etiquetas meta, encabezados y atributos alt en imágenes.'
          },
          {
            tittle: "Responsividad",
            description:'Conoce y utiliza las técnicas de diseño responsivo para adaptar el contenido y la interfaz de usuario a diferentes tamaños de pantalla y dispositivos.'
          },
          {
            tittle: "Formularios web",
            description:'Conocimiento avanzado en la creación y validación de formularios web, utilizando elementos de formulario adecuados y atributos para mejorar la usabilidad y accesibilidad.'
          }
        ]
    },
    {
      key: "4",
      nombre: "Java",
      image: "/imgs/java.svg",
      description: <Porcent values={90} />,
      habilidades:[
          {
            tittle: "Estructuracion de contenido",
            description:'Experto en la creación de estructuras semánticas utilizando etiquetas HTML adecuadas, asegurando que el contenido sea accesible y fácil de entender tanto para usuarios como para motores de búsqueda.'
          },
          {
            tittle: "Optimización SEO",
            description:'Implementación de técnicas de SEO on-page a través de un marcado HTML correcto, incluyendo el uso de etiquetas meta, encabezados y atributos alt en imágenes.'
          },
          {
            tittle: "Responsividad",
            description:'Conoce y utiliza las técnicas de diseño responsivo para adaptar el contenido y la interfaz de usuario a diferentes tamaños de pantalla y dispositivos.'
          },
          {
            tittle: "Formularios web",
            description:'Conocimiento avanzado en la creación y validación de formularios web, utilizando elementos de formulario adecuados y atributos para mejorar la usabilidad y accesibilidad.'
          }
        ]
    },
    {
      key: "5",
      nombre: "Node.js",
      image: "/imgs/node.svg",
      description: <Porcent values={"80"} />,
      habilidades:[
          {
            tittle: "Estructuracion de contenido",
            description:'Experto en la creación de estructuras semánticas utilizando etiquetas HTML adecuadas, asegurando que el contenido sea accesible y fácil de entender tanto para usuarios como para motores de búsqueda.'
          },
          {
            tittle: "Optimización SEO",
            description:'Implementación de técnicas de SEO on-page a través de un marcado HTML correcto, incluyendo el uso de etiquetas meta, encabezados y atributos alt en imágenes.'
          },
          {
            tittle: "Responsividad",
            description:'Conoce y utiliza las técnicas de diseño responsivo para adaptar el contenido y la interfaz de usuario a diferentes tamaños de pantalla y dispositivos.'
          },
          {
            tittle: "Formularios web",
            description:'Conocimiento avanzado en la creación y validación de formularios web, utilizando elementos de formulario adecuados y atributos para mejorar la usabilidad y accesibilidad.'
          }
        ]
    },
    {
      key: "6",
      nombre: "Laravel",
      image: "/imgs/laravel.svg",
      description: <Porcent values={60} />,
     habilidades:[
        {
          tittle: "Estructuracion de contenido",
          description:'Experto en la creación de estructuras semánticas utilizando etiquetas HTML adecuadas, asegurando que el contenido sea accesible y fácil de entender tanto para usuarios como para motores de búsqueda.'
        },
        {
          tittle: "Optimización SEO",
          description:'Implementación de técnicas de SEO on-page a través de un marcado HTML correcto, incluyendo el uso de etiquetas meta, encabezados y atributos alt en imágenes.'
        },
        {
          tittle: "Responsividad",
          description:'Conoce y utiliza las técnicas de diseño responsivo para adaptar el contenido y la interfaz de usuario a diferentes tamaños de pantalla y dispositivos.'
        },
        {
          tittle: "Formularios web",
          description:'Conocimiento avanzado en la creación y validación de formularios web, utilizando elementos de formulario adecuados y atributos para mejorar la usabilidad y accesibilidad.'
        }
      ]
    }
  ]

  export const dataAcordeon = [
    {
      key: "1",
      label: "Front-End",
      startContent: <NextImage  src="/imgs/fontEnd.png" alt="Front_End" width={35} height={35} />,
      title: "Preciona para ver detalles",
      content: <AcordeonContent data={FrontEnd} />
    },
    {
      key: "2",
      label: "Back-End",
      startContent: <NextImage  src="/imgs/backend.png" alt="Back-End" width={35} height={35} />,
      title: "Preciona para ver detalles",
      content: <AcordeonContent data={BackEnd} />
    },
    {
      key: "3",
      label: "Bases de Datos",
      startContent: <NextImage  src="/imgs/db.svg" alt="DataBase" width={35} height={35} />,
      title: "Preciona para ver detalles",
      content: <AcordeonContent data={BackEnd} />
    },
    {
      key: "4",
      label: "Otras Herramientas De Desarrollo",
      startContent: <NextImage  src="/imgs/herramienta.svg" alt="Herramientas" width={35} height={35} />,
      title: "Preciona para ver detalles",
      content: <AcordeonContent data={BackEnd} />
    },
  
  ]
  export default dataAcordeon;