# Prime Store GT – Catálogo con carrito

Página web estática (HTML + CSS + JavaScript, sin frameworks ni servidor).

## Estructura
```
index.html        Estructura de la página (portada, menú, carrito, ventana de fotos)
css/style.css     Estilos (colores en las variables de :root)
js/app.js         Productos, precios, carrito y envío del pedido por WhatsApp
images/           14 fotos de productos en JPG (las rutas se usan en js/app.js)
```
Para verla en tu computadora basta con abrir `index.html` en el navegador, o usar Live Server en VS Code. Necesita internet solo para las fuentes de Google.

## Qué editar y dónde (js/app.js)
- `const WA="50254071797";` número de WhatsApp con código de país (502), sin + ni espacios.
- `const I={...}` rutas de las fotos (`images/...jpg`). La clave es el número de foto.
- `const S=[...]` secciones del catálogo. Cada una tiene: `id`, `n` (texto del menú), `t` (título), `d` (descripción), `p` (etiquetas de precio), `im` (fotos), `it` (productos: `[nombre, código, precio opcional]`).
- `const T={...}` precios para el total del carrito: `[precio unitario, cantidad de oferta, precio de oferta]`. Ejemplo: `cojines:[39.99,6,229.99]` = 1 por Q39.99 o 6 por Q229.99. Si cambias una oferta, cámbiala también en `S` (etiquetas) y en `T` (cálculo).
- Combos: el precio de cada combo está en `it` (por ejemplo `"Q120.00"`) y el carrito lo suma.
- El mensaje de WhatsApp se arma en la función `up()` y el enlace en `L()` (usa `api.whatsapp.com/send`).

## Estilos (css/style.css)
Colores en `:root` (`--g` verde, `--r` rojo, `--gold` dorado). Hay variables aparte para modo oscuro.

## Publicar
Sube la carpeta completa (con `index.html` en la raíz y las carpetas `css`, `js` e `images`) a un hosting estático, por ejemplo app.netlify.com/drop. Si falta una carpeta, la página se verá sin diseño o sin fotos.

## Precios actuales
- Combo de 6 cojines (45x45 cm): Q219.99
- Combo Navideño y Combo Dulce Navidad: Q120.00 cada uno
- Cojines navideños: 1 x Q39.99, 6 x Q229.99
- Cortinas navideñas: Q79.99 el set
- Cojines para sillas: 1 x Q29.99, 4 x Q114.99
- Cojines decorativos: 1 x Q39.99, 3 x Q114.99
- Camas para mascotas: Q85.00
- Cama XL para perros: Q240.00
