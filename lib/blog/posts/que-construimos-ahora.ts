import type { BlogPost } from "../types"

export const queConstruimosAhora: BlogPost = {
  slug: "que-construimos-ahora",
  title: "Qué estamos construyendo ahora y qué hemos pausado",
  excerpt:
    "Hemos ordenado el catálogo de Kaizenith: cinco proyectos en marcha, varios en pausa y un juego aplazado sin fecha. Qué hay en cada grupo y por qué.",
  category: "development",
  date: "2026-10-23",
  content: [
    {
      type: "paragraph",
      text: "Kaizenith lleva tiempo enseñando proyectos en distintas fases, y con el tiempo la web empezó a contar una historia más grande que la realidad: productos que ya no avanzaban convivían con otros que sí. Esta semana hemos hecho limpieza. Hemos ocultado lo que está en pausa, hemos actualizado lo que está vivo y hemos decidido contarlo aquí, sin maquillarlo.",
    },
    {
      type: "paragraph",
      text: "Ocultar un proyecto no es borrarlo. Cada uno sigue en el código con su texto y sus imágenes, detrás de un interruptor que se reactiva en una línea. Lo que cambia es lo que enseñamos hoy.",
    },
    {
      type: "heading",
      text: "Lo que está en marcha",
    },
    {
      type: "list",
      items: [
        "Kaizenith Workspace — nuestra herramienta de productividad, en producción (v0.3.2) y en uso diario. Es donde llevamos las tareas, las notas y el tiempo de todo lo demás, incluida esta web.",
        "Entrelazo — un editor web para escribir narrativa de videojuegos: fichas guiadas, notas enlazadas y diálogos con ramas y variables, con reproductor y exportación a Ink, Yarn Spinner y JSON. Funciona en local, sin cuentas, y la demo es gratuita. El nombre es provisional.",
        "Armazón — un backend multi-tenant para Supabase, con 16 paquetes que se instalan por separado (permisos, roles, reservas, notificaciones, cobro…). Tiene landing y demos propias, aunque las demos están en pausa mientras su proyecto de Supabase lo está, y todavía no hay sistema de venta.",
        "Señal — un juego de navegador para streamers, antes llamado Detector Paranormal. Está en desarrollo y aún no está publicado.",
        "MHAdle — un reto diario en español para fans de My Hero Academia, sin anuncios, financiado con apoyo voluntario.",
      ],
    },
    {
      type: "paragraph",
      text: "En Studio, además, siguen visibles los juegos de jam que ya hicimos y publicamos en itch.io. Están terminados y no los tocamos, pero cuentan la parte de nuestro recorrido que empezó todo.",
    },
    {
      type: "heading",
      text: "Lo que hemos pausado, y por qué",
    },
    {
      type: "paragraph",
      text: "No todas las pausas tienen el mismo motivo, y creemos que importa distinguirlas.",
    },
    {
      type: "list",
      items: [
        "Enlace y Cronista, dos herramientas pensadas para administración pública. Estaban en buen estado, pero las administraciones tienen requisitos y plazos que no encajan con un equipo pequeño que financia su propio trabajo. Decidimos parar en lugar de arrastrarlos a medias.",
        "Serena y Pet Care Pocket están preparados para recibir a sus primeros clientes y usuarios. Lo que nos falta no es producto: es salir a buscarlos, y todavía no lo hemos hecho.",
        "Zarpe, nuestra propuesta de webs para negocios locales, estaba lista para publicarse. Teníamos dudas legales sobre las demos y las pausamos. Para retomarlo hay que rehacerlas sin información real, y por ahora no es prioridad.",
        "Urbana, de licencias urbanísticas para ayuntamientos, llegó bastante lejos pero se quedó sin terminar.",
        "CashPilot, una herramienta de finanzas personales, está en pausa, y su proyecto de Supabase también.",
      ],
    },
    {
      type: "paragraph",
      text: "Ping Pong Mate, nuestro juego de escritorio, también se queda fuera por ahora: su publicación se ha aplazado sin fecha y no queremos que la web prometa un lanzamiento que no podemos sostener. En su lugar, en Studio decimos simplemente que hay juegos en desarrollo.",
    },
    {
      type: "heading",
      text: "Qué hemos aprendido",
    },
    {
      type: "paragraph",
      text: "Tener muchos proyectos abiertos da la sensación de avanzar, pero cada uno cuesta atención, hosting y decisiones. Ordenarlos nos ha obligado a preguntarnos cuáles tienen un camino claro hacia ingresos y cuáles solo existen porque los empezamos.",
    },
    {
      type: "paragraph",
      text: "Con Señal y MHAdle, por ejemplo, el objetivo es sencillo: que cubran lo que cuestan. Con Entrelazo, que alguien lo use y se pueda sostener. Con Armazón, aprovechar lo que ya construimos para nuestros propios productos y convertirlo en algo que otros puedan usar. Son objetivos pequeños y medibles, que es justo lo que pide el método.",
    },
    {
      type: "paragraph",
      text: "Seguiremos contando cómo avanza cada uno, incluidos los tropiezos. Si algo de lo pausado vuelve a la web, lo sabrás por aquí.",
    },
  ],
}
