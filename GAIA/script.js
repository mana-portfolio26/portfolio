document.addEventListener("DOMContentLoaded", function () {

    // ===============================
    // Fade In Animation
    // ===============================
    const fadeElements = document.querySelectorAll(".fade");

    if ("IntersectionObserver" in window) {

        const observer = new IntersectionObserver((entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {
                    entry.target.classList.add("show");
                }

            });

        }, {
            threshold: 0.15
        });

        fadeElements.forEach((el) => observer.observe(el));

    } else {

        // 古いブラウザ用
        fadeElements.forEach((el) => {
            el.classList.add("show");
        });

    }


    // ===============================
    // Hero Poster Animation
    // ===============================
    const poster = document.querySelector(".hero-poster");

    if (poster) {

        poster.style.opacity = "0";
        poster.style.transform = "translateY(60px)";

        setTimeout(() => {

            poster.style.transition = "1.5s ease";
            poster.style.opacity = "1";
            poster.style.transform = "translateY(0)";

        }, 400);

    }


    // ===============================
    // Video Auto Play
    // ===============================
    const videos = document.querySelectorAll("video");

    videos.forEach((video) => {

        video.muted = true;
        video.loop = true;
        video.playsInline = true;

        video.play().catch(() => {});

    });

});