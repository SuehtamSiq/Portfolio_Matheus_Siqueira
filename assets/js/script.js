document.querySelectorAll('.navbar__link').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault(); // Impede o comportamento padrão do link
        const targetId = this.getAttribute('href').substring(1); // Remove o #
        const targetSection = document.getElementById(targetId);

        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop - 50, // Ajuste conforme necessário
                behavior: 'smooth'
            });
        }
    });
});
