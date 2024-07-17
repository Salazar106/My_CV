

const Footer = () => {
    return (
      <footer className="footersito flex items-end w-full  h-72 text-white text-center overflow-hidden">
       
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
  