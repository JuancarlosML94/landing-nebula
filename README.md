# Nébula - Landing Page de Artista Digital

Proyecto de desarrollo web frontend realizado como práctica/portfolio para el ciclo de Desarrollo de Aplicaciones Web (DAW). La página web está centrada en la presentación de una artista digital de ciencia ficción, priorizando el rendimiento, la accesibilidad y el diseño responsivo.

## Tecnologías utilizadas

* **HTML5**: Estructura semántica avanzada (`header`, `main`, `section`, `figure`, `figcaption`, `footer`).

* **CSS3**: Estilos personalizados, diseño adaptativo y control de contenedores mediante Flexbox.

* **Multimedia nativa**: Uso de etiquetas `<video>` y `<audio>` con controles y optimización de carga.

## Estructura del proyecto

```text
raiz/
│
├── index.html
├── css/
│   └── styles.css
└── assets/
    ├── img/
    │   ├── hero-nebula.webp
    │   ├── thumb-1.webp
    │   ├── thumb-2.webp
    │   └── thumb-3.webp
    ├── audio/
    │   └── hero-audio.mp3
    └── video/
        └── process-video.mp4
```

## Decisiones técnicas y optimización

Durante el desarrollo de la landing page se han aplicado varias buenas prácticas de optimización web:

### 1. Optimización de imágenes

* **Formato de nueva generación**: Todas las imágenes se han convertido a formato **WebP** para reducir drásticamente el peso de carga sin perder calidad visual.

* **Prevención de CLS**: Se han definido explícitamente los atributos `width` y `height` en todas las etiquetas `<img>` para evitar el *Cumulative Layout Shift* (saltos de diseño mientras carga la página).

* **Carga diferida**: Se ha implementado `loading="lazy"` en las imágenes secundarias y de la galería para diferir su carga hasta que el usuario haga scroll, mejorando el rendimiento inicial.

### 2. Gestión de recursos multimedia

* **Formato de vídeo**: El vídeo del proceso creativo está integrado en formato `.mp4` con el atributo `preload="metadata"` para optimizar el consumo de ancho de banda.

* **Formato de audio**: El archivo de audio ambiental se encuentra en formato `.mp3` optimizado a una duración corta (24 segundos) para mantener un peso mínimo.

### 3. Diseño Responsivo
* **Adaptabilidad**: Se han utilizado unidades relativas y restricciones de ancho (`max-width: 100%`) para garantizar que la web se adapte correctamente a diferentes resoluciones de pantalla sin generar scroll horizontal no deseado.

---

##  Cómo ejecutar el proyecto

1. Clona este repositorio o descarga los archivos en tu equipo.
2. Abre la carpeta del proyecto en **Visual Studio Code**.
3. Utiliza la extensión **Live Server** para levantar un servidor local y visualizar el archivo `index.html` en el navegador.

---
*Desarrollado por Juan Carlos Macías López*

