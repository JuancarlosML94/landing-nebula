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

/* --- Lógica del Reproductor de Audio Personalizado --- */

document.addEventListener("DOMContentLoaded", () => {
    const audio = document.getElementById("studio-audio");
    const btnPlay = document.getElementById("btn-audio-play");
    const btnStop = document.getElementById("btn-audio-stop");
    const progressBar = document.getElementById("progress-bar");
    const progressContainer = document.getElementById("progress-container");
    const audioTime = document.getElementById("audio-time");

    if (audio) {
        // 1. Control de Play / Pause
        btnPlay.addEventListener("click", () => {
            if (audio.paused) {
                audio.play();
                btnPlay.textContent = "⏸ Pausar";
            } else {
                audio.pause();
                btnPlay.textContent = "▶ Reproducir";
            }
        });

        // 2. Control de Stop / Reiniciar
        btnStop.addEventListener("click", () => {
            audio.pause();
            audio.currentTime = 0;
            btnPlay.textContent = "▶ Reproducir";
            progressBar.style.width = "0%";
        });

        // 3. Actualizar la barra de progreso y el tiempo en pantalla mientras suena
        audio.addEventListener("timeupdate", () => {
            const currentMinutes = Math.floor(audio.currentTime / 60);
            const currentSeconds = Math.floor(audio.currentTime % 60);
            const formattedCurrent = `${currentMinutes}:${currentSeconds < 10 ? '0' : ''}${currentSeconds}`;

            const durationMinutes = Math.floor(audio.duration / 60) || 0;
            const durationSeconds = Math.floor(audio.duration % 60) || 0;
            const formattedDuration = `${durationMinutes}:${durationSeconds < 10 ? '0' : ''}${durationSeconds}`;

            audioTime.textContent = `${formattedCurrent} / ${formattedDuration}`;

            // Porcentaje para la barra de progreso
            if (audio.duration) {
                const porcentaje = (audio.currentTime / audio.duration) * 100;
                progressBar.style.width = `${porcentaje}%`;
            }
        });

        // 4. Permitir hacer clic en la barra de progreso para saltar a ese punto del audio
        progressContainer.addEventListener("click", (e) => {
            const rect = progressContainer.getBoundingClientRect();
            const clickX = e.clientX - rect.left;
            const width = rect.width;
            if (audio.duration) {
                audio.currentTime = (clickX / width) * audio.duration;
            }
        });

        // Al terminar el audio, restablecer el botón de reproducción
        audio.addEventListener("ended", () => {
            btnPlay.textContent = "▶ Reproducir";
            progressBar.style.width = "0%";
        });
    }
});