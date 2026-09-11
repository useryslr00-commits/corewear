# COREWEAR — Sitio web

Sitio estático (HTML + CSS + JS), sin backend, sin costo de hosting.

## Estructura

```
corewear/
  index.html        Inicio
  hombre.html
  mujer.html
  gym.html
  top-picks.html
  marcas.html
  ofertas.html
  guias.html
  sobre.html
  afiliados.html
  privacidad.html
  contacto.html
  css/style.css      Todos los estilos y colores
  js/products.js     ÚNICO archivo que editas para productos
  js/render.js       Motor del sitio (no lo toques)
  images/            Aquí van tus fotos de producto
```

## Cómo agregar o editar productos (lo único que harás seguido)

Abre `js/products.js`. Cada producto es un bloque como este:

```js
{
  id: "playera-003",
  brand: "Nombre de la marca",
  name: "Nombre del producto",
  gender: "hombre",        // hombre | mujer | unisex
  category: "playeras",    // playeras | sudaderas | joggers | shorts | leggings | tanktops
  sections: ["home", "topPicks", "hombre"],
  price: 349,
  rating: 9.0,
  fit: "Regular",
  material: "Algodón",
  opinion: "Tu opinión corta.",
  image: "images/nombre-de-archivo.jpg",
  link: "TU-ENLACE-DE-AFILIADO",
  tag: "Top pick"          // o "" si no quieres etiqueta
}
```

Copia un bloque, cámbialo y agrégalo a la lista. El producto aparecerá
automáticamente en todas las páginas donde corresponda (Inicio, Hombre,
Mujer, Gym, Top Picks, Ofertas), según lo que pongas en `sections`,
`gender` y `category`. No tienes que tocar el HTML.

## Cómo agregar fotos

Guarda tus fotos dentro de la carpeta `images/` con el mismo nombre que
pusiste en el campo `image` de cada producto. Si la foto no existe
todavía, la tarjeta muestra automáticamente un recuadro gris con
"Foto pendiente" — el sitio no se rompe.

## Colores del sitio

Todo el color vive en `css/style.css`, arriba de todo, dentro de `:root`.
Cambia esos valores y se actualiza en todo el sitio:

- `--white`, `--gray-50/100/300/500`: blanco y grises
- `--black`: negro
- `--navy` / `--navy-dark`: azul marino (color principal de marca)
- `--yellow`: acento amarillo (úsalo poco, solo en etiquetas pequeñas)

## Publicarlo gratis (sin gastar nada)

Opción recomendada: **GitHub Pages**

1. Crea una cuenta gratis en https://github.com
2. Crea un repositorio nuevo (puede llamarse `corewear`)
3. Sube todos los archivos de esta carpeta (arrastrar y soltar funciona)
4. Ve a Settings → Pages → selecciona la rama `main` y carpeta `/root`
5. En un par de minutos tu sitio queda publicado en:
   `https://tu-usuario.github.io/corewear/`

Alternativa igual de gratuita: **Netlify** (netlify.com) — arrastras la
carpeta completa a "Deploys" y te da un link al instante.

Ambas opciones son 100% gratuitas para este tipo de sitio, no piden
tarjeta de crédito y son legales para publicar un sitio de afiliados.

## Sobre lo legal

- No se usó ningún logo, foto ni texto de ninguna marca real.
- El aviso de afiliados y la política de privacidad ya están redactados
  como base, pero AJÚSTALOS según el programa de afiliados que uses
  (Amazon Afiliados, etc.) — cada uno tiene sus propias reglas sobre
  cómo mostrar los enlaces.
- Antes de usar el logo o fotos de producto de una marca, confirma
  que el programa de afiliados te autoriza a usarlas (Amazon, por
  ejemplo, sí lo permite dentro de su programa).
