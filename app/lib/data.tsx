import { Avatar, Tooltip } from "@nextui-org/react";
import { FaGithub, FaLinkedin, FaMailBulk } from "react-icons/fa";
import Porcent from "../ui/knob";
import {Image} from "@nextui-org/react";

const FrontEnd = [
  {
    key: "1",
    nombre: "HTML",
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
    nombre: "CSS",
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
    description: <Porcent values={90} />,
    habilidades:''
  },
  {
    key: "3",
    nombre: "PHP",
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
    nombre: "Laravel",
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



const AcordeonContent = ({ data }: any) => {

  return (
    <div className="flex flex-wrap justify-end md:justify-center items-start gap-5 h-full w-full px-10 ">
      {data.map((item: any,index: number) => (
        <Tooltip
          key={index}
          classNames={{
            base: [
              "before:bg-neutral-400 dark:before:bg-white",
            ],
            content: [
              "py-2 px-4 shadow-xl",
              "text-black bg-gradient-to-br from-gray-200 to-neutral-700",
            ],
          }}
          content={
            <div className="px-1 py-2">
              <div className="text-small font-bold">Mis Habilidades con {item.nombre}</div>
              {item.habilidades && item.habilidades.map((habilidad: any, i: number) => (
                <div key={i} className="text-tiny break-words max-w-80">
                  <strong>{habilidad.tittle}:</strong> {habilidad.description}
                </div>
              ))}
              
            </div>
          }
        >
          <div key={item.key} className="flex items-center flex-wrap text-center cursor-pointer ">
            <div className="text-[20px]">{item.nombre}</div>
            {item.description}
          </div>
        </Tooltip>
      ))}
    </div>
  )
}
const dataAcordeon = [
  {
    key: "1",
    label: "Front-End",
    startContent: <Image isZoomed src="/imgs/fontEnd.png" alt="mail" width={35} height={35} />,
    subtitle: "Preciona para ver detalles",
    title: "Habilidades Front-End",
    content: <AcordeonContent data={FrontEnd} />
  },
  {
    key: "2",
    label: "Back-End",
    startContent: <Image isZoomed src="/imgs/backend.png" alt="mail" width={35} height={35} />,
    subtitle: "Preciona para ver detalles",
    title: "Habilidades Back-End",
    content: <AcordeonContent data={BackEnd} />
  },

]
export default dataAcordeon;

export const navLinks = [
  {
    id: "about",
    label: "Sobre Mi",
    link: '/',
  },
  {
    id: "skills",
    label: "Habilidades",
    link: '/skills',
  },
  {
    id: "contact",
    label: "habilidades",
    link: '/contacts',

  }
];

export const socialLinks=[
  {
    id: "linkedin",
    label: <FaLinkedin/>,
    link:'https://www.linkedin.com/in/jefersson-daniel-pe%C3%B1a-salazar-2b4ba1271/',
  },
  {
    id: "github",
    label: <FaGithub/>,
    link:'https://github.com/Salazar106',
  }
]
