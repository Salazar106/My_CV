const Footer = () => {
    return (
      <footer className="relative w-full h-fit  text-white text-center overflow-hidden">
        {/* SVG de fondo */}
        <svg
          className="absolute bottom-0 left-0 "
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#0099ff"
            fillOpacity="1"
            d="M0,64L120,85.3C240,107,480,149,720,144C960,139,1200,85,1320,58.7L1440,32L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
          ></path>
        </svg>
        {/* Contenido del footer */}
        <div className="relative z-10 p-5 max-w-full min-w-full mx-auto">
          <p>© 2024 Tu Sitio Web. Todos los derechos reservados.</p>
          <p>
            <a href="/privacy-policy" className="text-yellow-300 hover:underline">
              Política de Privacidad
            </a>{" "}
            |{" "}
            <a href="/terms-of-service" className="text-yellow-300 hover:underline">
              Términos de Servicio
            </a>
          </p>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  