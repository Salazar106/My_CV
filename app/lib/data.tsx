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
