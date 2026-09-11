/* ============================================================
   COREWEAR — BASE DE PRODUCTOS
   ------------------------------------------------------------
   ESTE ES EL ÚNICO ARCHIVO QUE NECESITAS EDITAR PARA AGREGAR,
   QUITAR O CAMBIAR PRODUCTOS. Se actualiza en TODO el sitio solo.

   Copia un bloque { ... }, pégalo, cambia los datos y listo.

   CAMPOS:
   id          -> texto único, sin espacios (ej: "playera-001")
   brand       -> nombre de la marca (ej: "Amazon Essentials")
   name        -> nombre del producto
   gender      -> "hombre" | "mujer" | "unisex"
   category    -> "playeras" | "sudaderas" | "joggers" | "shorts" |
                  "leggings" | "tanktops"
   sections    -> lista de páginas donde debe aparecer:
                  "home" | "gym" | "topPicks" | "ofertas" | "hombre" | "mujer"
   price       -> precio aproximado en MXN (solo número, ej: 299)
   rating      -> calificación COREWEAR de 0 a 10 (ej: 9.2)
   fit         -> "Oversized" | "Regular" | "Slim" | "N/A"
   material    -> ej: "Algodón", "Poliéster", "Mezcla"
   opinion     -> tu opinión corta del producto (1-2 frases)
   image       -> ruta de la imagen. Guarda tus fotos en la carpeta
                  /images con ese mismo nombre. Si no existe la imagen,
                  se muestra automáticamente un recuadro gris.
   link        -> tu enlace de afiliado (Amazon, etc.)
   tag         -> etiqueta opcional en amarillo (ej: "Más vendido").
                  Déjalo como "" si no quieres etiqueta.
   ================================================================ */

const PRODUCTS = [
  {
    id: "playera-001",
    brand: "Amazon Essentials",
    name: "Playera básica de algodón",
    gender: "hombre",
    category: "playeras",
    sections: ["home", "topPicks", "hombre"],
    price: 299,
    rating: 9.2,
    fit: "Regular",
    material: "Algodón",
    opinion: "Buena opción si buscas un básico sencillo para usar frecuentemente.",
    image: "images/playera-amazon-essentials.jpg",
    link: "#",
    tag: "Top pick"
  },
  {
    id: "playera-002",
    brand: "CRZ YOGA",
    name: "Playera deportiva ligera",
    gender: "hombre",
    category: "playeras",
    sections: ["home", "topPicks", "gym", "hombre"],
    price: 349,
    rating: 9.0,
    fit: "Slim",
    material: "Poliéster",
    opinion: "Ligera y transpirable, ideal para entrenar sin sentirte pesado.",
    image: "images/playera-crz-yoga.jpg",
    link: "#",
    tag: ""
  },
  {
    id: "jogger-001",
    brand: "Amazon Essentials",
    name: "Jogger casual",
    gender: "hombre",
    category: "joggers",
    sections: ["home", "ofertas", "hombre"],
    price: 459,
    rating: 8.8,
    fit: "Regular",
    material: "Algodón / spandex",
    opinion: "Cómodo para uso diario, buena relación calidad-precio.",
    image: "images/jogger-amazon-essentials.jpg",
    link: "#",
    tag: "Oferta"
  },
  {
    id: "top-001",
    brand: "CRZ YOGA",
    name: "Top deportivo",
    gender: "mujer",
    category: "tanktops",
    sections: ["home", "gym", "mujer", "topPicks"],
    price: 389,
    rating: 9.1,
    fit: "Regular",
    material: "Poliéster / spandex",
    opinion: "Buen soporte para entrenar y se ve bien fuera del gym también.",
    image: "images/top-crz-yoga.jpg",
    link: "#",
    tag: ""
  },
  {
    id: "legging-001",
    brand: "CRZ YOGA",
    name: "Legging deportivo",
    gender: "mujer",
    category: "leggings",
    sections: ["home", "gym", "mujer", "topPicks"],
    price: 549,
    rating: 9.3,
    fit: "N/A",
    material: "Poliéster / spandex",
    opinion: "De los favoritos para entrenar: no se transparenta y no se baja.",
    image: "images/legging-crz-yoga.jpg",
    link: "#",
    tag: "Más vendido"
  },
  {
    id: "sudadera-001",
    brand: "Amazon Essentials",
    name: "Sudadera con capucha",
    gender: "unisex",
    category: "sudaderas",
    sections: ["home", "ofertas"],
    price: 499,
    rating: 8.9,
    fit: "Oversized",
    material: "Algodón / poliéster",
    opinion: "Ideal para un look casual y cómodo, buen precio.",
    image: "images/sudadera-amazon-essentials.jpg",
    link: "#",
    tag: "Menos de $500"
  }
];
