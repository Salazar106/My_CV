import { FaGithub, FaLinkedin, FaMailBulk } from "react-icons/fa";

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
