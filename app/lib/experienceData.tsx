
import NextImage from "next/image";
import AcordeonExperienceContecnt from "../ui/aboutMe/acordeonExperienceContecnt";


const tigo={
    fecha:"Octubre 2021 a Octubre 2022",
    cargo:"Desarrollador Junior",
    descripcion:`Durante mi tiempo en Tigo, tuve la oportunidad de trabajar como desarrollador junior, participando en los siguientes proyectos:`,
    items:[
      {
        title:"Automatización de procesos:",
        description:`Participé en la automatización de la carga masiva de información para las bases de datos de la empresa. Este proceso, que anteriormente podía tardar hasta un día completo, era fundamental para que los comerciales (vendedores) de la compañía pudieran vender productos y planes eficientemente. Utilicé React.js para el front-end, y Laravel y MySQL para el back-end.`
      },
      {
        title:"Actualización de multimedias:",
        description:`Las multimedias de la intranet se actualizaban constantemente. Este proceso involucraba la modificación de imágenes e información directamente en HTML, CSS y JavaScript, que luego se integraban en WordPress. Además, realizaba modificaciones en WordPress usando Elementor para crear y actualizar contenido.`
      },
      {
        title:"Creación de aplicativo para urbanizaciones:",
        description:`El área comercial de Tigo necesitaba un aplicativo para visualizar rápidamente toda la información de las urbanizaciones registradas en su base de datos. Desarrollé este aplicativo usando React para el front-end y Node.js para el back-end.`
      },
      {
        title:"Mantenimiento de aplicativo de cálculos:",
        description:`Los comerciales contaban con aplicativos para realizar cálculos internos de la empresa. Mi labor consistía en hacer ciertas modificaciones y mantenimientos en las operaciones de estos aplicativos, los cuales estaban desarrollados en Angular.`
      },
      {
        title:"Metodologías de trabajo:",
        description:`Trabajé bajo metodologías ágiles Scrum, donde se asignaban tareas en sprints quincenales. Además, todos los aplicativos estaban empezando a migrar y a ser gestionados con Git y GitHub para mantener un historial de versiones adecuado.`
      },

    ]
}

const Disruptive={
    fecha:"Octubre 2021 a Octubre 2022",
    cargo:"Front-End Developer",
    descripcion:`Durante mi estadía en Disruptive, he tenido la oportunidad de participar en diversos proyectos de diferentes nichos, ya que es una empresa que comercializa páginas web y aplicaciones móviles, tanto para la creación como para el mantenimiento de las mismas. En este entorno, he logrado adquirir grandes conocimientos y experiencias, tales como:`,
    items:[
      {
        title:"Liderazgo y acompañamiento de equipo de trabajo:",
        description:`He tenido la oportunidad de liderar un equipo de desarrollo, donde gestiono el flujo de trabajo, asigno tareas y realizo evaluaciones de rendimiento de los colaboradores en los proyectos asignados. Este rol me permitió desarrollar habilidades de liderazgo y mejorar la eficiencia y cohesión del equipo.`
      },
      {
        title:"Desarrollo de páginas web:",
        description:`He tenido la oportunidad de crear desde 0 y dar mantenimiento a aplicaciones web, en cada desarrollo que inicio, me aseguro de que todo el ciclo de vida del proyecto sea excelente. Comienzo con un análisis detallado de los requerimientos del cliente, cuidando cada detalle, con el objetivo de entregar un producto final de alta calidad.`
      },
      {
        title:"Herramientas de desarrollo:",
        description:`Dado que la empresa maneja diversos nichos para sus aplicaciones, también utilizamos distintos lenguajes de programación según los requerimientos de cada cliente. Por ejemplo, he trabajado en aplicaciones con diferentes estructuras y arquitecturas: desde aplicaciones con MVC utilizando PHP y jQuery, hasta aplicativos nativos con HTML, CSS y JavaScript, y aplicaciones RESTful con React o Next.js en el front-end y Node.js en el back-end. La diversidad de lenguajes es maravillosa, pero también significa que tenemos que adaptarnos constantemente a las necesidades de cada proyecto.`
      },
      {
        title:"Metodologías ágiles:",
        description:`Participé en equipos que utilizaban metodologías ágiles como Scrum para gestionar los proyectos. Esto incluía la participación en reuniones diarias, la planificación de sprints y la realización de retrospectivas para mejorar continuamente los procesos de trabajo.`
      },
      {
        title:"Control de versiones y colaboración:",
        description:`Utilicé Git y GitHub para el control de versiones y la colaboración en proyectos, asegurando un historial claro de los cambios y facilitando el trabajo en equipo.`
      },
    ]
}

export const experienceData = [
    {
      key: "1",
      label: "Tigo-Une",
      startContent: <NextImage  src="/imgs/tigo.png" alt="Front_End" width={35} height={35} />,
      title: "Preciona para ver detalles",
      content: <AcordeonExperienceContecnt data={tigo} />
    },
    {
      key: "2",
      label: "Disruptive Information Technologies",
      startContent: <NextImage  src="/imgs/disruptive.jpeg" alt="Back-End" width={35} height={35} />,
      title: "Preciona para ver detalles",
      content: <AcordeonExperienceContecnt data={Disruptive} />
    },
  ]
;




