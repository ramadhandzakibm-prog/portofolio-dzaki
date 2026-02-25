// Efek Tilt (Miring)
VanillaTilt.init(document.querySelectorAll(".card"), {
    max: 10,
    speed: 400,
    glare: true,
    "max-glare": 0.2,
});

// Animasi Muncul Fade-in
document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll('.card');
    cards.forEach((card, index) => {
        card.style.opacity = "0";
        card.style.transform = "translateY(20px)";
        card.style.transition = "all 0.6s ease-out";
        
        setTimeout(() => {
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
        }, 100 * index);
    });
});
