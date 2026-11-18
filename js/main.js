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

/* --- Lógica del Modal de Vídeo y Control Programático --- */

document.addEventListener("DOMContentLoaded", () => {
    const btnAbrirModal = document.getElementById("btn-abrir-modal");
    const btnCerrarModal = document.getElementById("btn-cerrar-modal");
    const videoModal = document.getElementById("video-modal");
    const modalVideo = document.getElementById("modal-video");

    // Abrir el modal y reproducir el vídeo automáticamente
    if (btnAbrirModal) {
        btnAbrirModal.addEventListener("click", () => {
            videoModal.style.display = "flex";
            modalVideo.play().catch(error => {
                console.log("Reproducción automática bloqueada por el navegador:", error);
            });
        });
    }

    // Función para cerrar el modal y pausar el vídeo
    const cerrarModal = () => {
        videoModal.style.display = "none";
        modalVideo.pause();
        // Opcional: si quieres que al cerrar también se reinicie al inicio:
        // modalVideo.currentTime = 0;
    };

    // Cerrar al pulsar el botón "X"
    if (btnCerrarModal) {
        btnCerrarModal.addEventListener("click", cerrarModal);
    }

    // Cerrar también si el usuario hace clic fuera del contenido (en el fondo oscuro)
    if (videoModal) {
        videoModal.addEventListener("click", (e) => {
            if (e.target === videoModal) {
                cerrarModal();
            }
        });
    }
});