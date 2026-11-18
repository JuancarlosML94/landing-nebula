/* --- Lógica de la Galería Interactiva con JavaScript --- */

document.addEventListener("DOMContentLoaded", () => {
    const imagenPrincipal = document.getElementById("imagen-principal");
    const captionPrincipal = document.getElementById("caption-principal");
    const miniaturas = document.querySelectorAll(".gallery-thumb");

    // Recorremos todas las miniaturas para escuchar el evento click

    miniaturas.forEach(miniatura => {
        miniatura.addEventListener("click", () => {
            
            // 1. Cambiamos la fuente de la imagen principal por la de la miniatura pulsada
            imagenPrincipal.src = miniatura.src;

            // 2. Actualizamos el texto del pie de foto con el atributo data-caption
            captionPrincipal.textContent = miniatura.getAttribute("alt");

            // 3. Gestionamos la clase activa para dar feedback visual en las miniaturas
            miniaturas.forEach(m => m.classList.remove("activa"));
            miniatura.classList.add("activa");
        });
    });
});