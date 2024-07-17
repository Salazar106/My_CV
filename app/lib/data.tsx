import { FaGithub, FaLinkedin, FaMailBulk } from "react-icons/fa";

export const navLinks = [
  {
    id: "1",
    label: "Sobre Mi",
    link: '/',
  },
  {
    id: "2",
    label: "Portafolio",
    link: '/portafolio',
  },
  {
    id: "3",
    label: "Contactame",
    link: '/contact',

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

export const productData = [
  {
    id: "1",
    title: "Buñuelo",
    description:"de queso y arina",
    precio:1000,
    img:"/imgs/html.sgv"
  },
  {
    id: "2",
    title: "Empanada",
    description:"de queso y arina",
    precio:2400,
    img:"/imgs/html.sgv"
  },
  {
    id: "3",
    title: "Palito de Queso",
    description:"de queso y arina",
    precio:3850,
    img:"/imgs/html.sgv"
  },
  {
    id: "4",
    title: "Pastel de Queso",
    description:"de queso y arina",
    precio:2000,
    img:"/imgs/html.sgv"
  },
  {
    id: "5",
    title: "Pastel de Pollo",
    description:"de queso y arina",
    precio:3400,
    img:"/imgs/html.sgv"
  },
  {
    id: "6",
    title: "Pan de Queso",
    description:"de queso y arina",
    precio:6700,
    img:"/imgs/html.sgv"
  }
] 