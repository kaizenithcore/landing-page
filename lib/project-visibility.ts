/**
 * Fuente única de visibilidad de proyectos y secciones.
 * Poner `false` oculta la entrada sin borrar sus textos ni imágenes;
 * poner `true` la reactiva. Los contadores de la web salen de aquí.
 */

/** Works: catálogo de proyectos propios. */
export const WORKS_VISIBLE = {
  workspace: true,
  entrelazo: true,
  armazon: true,
  // Pausados: dirigidos a administración pública (requisitos y plazos), sin buscar clientes.
  enlace: false,
  cronista: false,
  // Listos para recibir clientes, sin lanzar.
  serena: false,
  petCarePocket: false,
  // Pausados o parados.
  cashpilot: false,
  nexa: false,
  urbana: false,
  // Pausado por dudas legales sobre las demos; revisar demos sin datos reales antes de reactivar.
  zarpe: false,
} as const

/** Studio: juegos. `own: true` = proyectos propios vivos (no juegos de jam cerrados). */
export const STUDIO_VISIBLE = {
  senal: { visible: true, own: true },
  mhadle: { visible: true, own: true },
  itNeverEnds: { visible: true, own: false },
  teenRomantic: { visible: true, own: false },
  iudexInquisitor: { visible: true, own: false },
  fromHell: { visible: true, own: false },
  devoClicker: { visible: true, own: false },
  maldicionAprendiz: { visible: true, own: false },
  charmMiners: { visible: true, own: false },
  voidSurvivor: { visible: true, own: false },
} as const

/**
 * Ping Pong Mate: publicación retrasada indefinidamente.
 * `false` oculta hero con tráiler, hoja de ruta, wishlist de Steam y menciones en Root/metadatos.
 */
export const SHOW_PING_PONG_MATE = false

export const isWorksVisible = (id: keyof typeof WORKS_VISIBLE) => WORKS_VISIBLE[id]

export const worksVisibleCount = Object.values(WORKS_VISIBLE).filter(Boolean).length

const studioOwnCount = Object.values(STUDIO_VISIBLE).filter((p) => p.visible && p.own).length

/** Proyectos propios activos en todo el grupo (Works + Studio), para la estadística de Root. */
export const activeProjectsCount = worksVisibleCount + studioOwnCount
