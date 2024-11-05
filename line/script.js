// Lista de imágenes
const images = ["images/OIP (4).jfif", "images/OIP (5).jfif", "images/OIP (6).jfif"];
let currentIndex = 0;

function changeImage() {
    const imageElement = document.getElementById("dynamicImage");
    
    // Aplica la transición de salida
    imageElement.classList.add("fade-out");
    
    // Espera un segundo para cambiar la imagen
    setTimeout(() => {
        currentIndex = (currentIndex + 1) % images.length;
        imageElement.src = images[currentIndex];
        
        // Aplica la transición de entrada
        imageElement.classList.remove("fade-out");
    }, 1000);
}

// Cambiar imagen cada 5 segundos (puedes ajustar este tiempo)
setInterval(changeImage, 2000);
