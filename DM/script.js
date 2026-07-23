document.addEventListener("DOMContentLoaded", function () {

    /*==============================
      Fade Animation
    ==============================*/

    const fades = document.querySelectorAll(".fade");

    if ("IntersectionObserver" in window) {

        const observer = new IntersectionObserver(function(entries){

            entries.forEach(function(entry){

                if(entry.isIntersecting){

                    entry.classList.add("show");

                }

            });

        },{

            threshold:0.15

        });

        fades.forEach(function(el){

            observer.observe(el);

        });

    }else{

        fades.forEach(function(el){

            el.classList.add("show");

        });

    }


    /*==============================
      Hero Poster Animation
    ==============================*/

    const poster = document.querySelector(".hero-poster");

    if(poster){

        poster.style.opacity="0";
        poster.style.transform="translateY(60px)";

        setTimeout(function(){

            poster.style.transition="1.5s ease";
            poster.style.opacity="1";
            poster.style.transform="translateY(0)";

        },300);

    }


    /*==============================
      Video Auto Play
    ==============================*/

    const videos=document.querySelectorAll("video");

    videos.forEach(function(video){

        video.muted=true;
        video.loop=true;
        video.playsInline=true;

        video.play().catch(function(){});

    });


    /*==============================
      Hover Glow
    ==============================*/

    const images=document.querySelectorAll(
        ".planning-image img,.setup-grid img,.gallery img"
    );

    images.forEach(function(img){

        img.addEventListener("mouseenter",function(){

            this.style.transition=".45s";
            this.style.transform="scale(1.02)";

        });

        img.addEventListener("mouseleave",function(){

            this.style.transform="scale(1)";

        });

    });

});