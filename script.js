document.addEventListener('DOMContentLoaded', function() {
    const greetingEl = document.getElementById('greeting-text');
    if (greetingEl) {
        const now = new Date();
        const hours = now.getHours();
        let message = "Selamat Malam";
        if (hours >= 5 && hours < 12) {
            message = "Selamat Pagi";
        } else if (hours >= 12 && hours < 15) {
            message = "Selamat Siang";
        } else if (hours >= 15 && hours < 18) {
            message = "Selamat Sore";
        }
        greetingEl.textContent = "Hai Tetangga Tuku, " + message + "!!";
    }

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) { entry.target.classList.add('active');}
        });
    }, { threshold: 0.1 });
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
});