
    let menu = document.getElementById("nav-toggle");
    let headerInner = document.getElementById("header__inner");

    /* Smooth Scroll */

    document.addEventListener("DOMContentLoaded", makeLinksSmooth);

    function makeLinksSmooth() {
        const navLinks = document.querySelectorAll(".header__nav");

        navLinks.forEach((link) => {
            link.addEventListener("click", smoothScroll);
        });
    }
    function smoothScroll(e) {
        e.preventDefault();
        const targetId = this.getAttribute("href");
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            targetElement.scrollIntoView({ behavior: "smooth", });
        }
    }


    /* Menu nav toggle */

    menu.addEventListener("click", function (event){
        event.preventDefault();

        menu.classList.toggle("active");
        headerInner.classList.toggle("active");

    });



    const buttons = document.querySelectorAll("[data-slide-direction]");

    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            const offset = button.dataset.slideDirection === "next" ? 1 : -1;
            changeSlide(offset);
        });
    });

    const changeSlide = (offset) => {
        const slides = document.querySelector(".slides");
        const activeSlide = slides.querySelector("[data-active-slide]");
        let newIndex = [...slides.children].indexOf(activeSlide) + offset;
        newIndex =
            newIndex < 0
                ? slides.children.length - 1
                : newIndex === slides.children.length
                    ? 0
                    : newIndex;
        slides.children[newIndex].dataset.activeSlide = true;
        delete activeSlide.dataset.activeSlide;

        const circles = document.querySelector(".slides-circles");
        const activeCircle = circles.querySelector("[data-active-slide]");
        circles.children[newIndex].dataset.activeSlide = true;
        delete activeCircle.dataset.activeSlide;
    };

    setInterval(changeSlide.bind(null, 1), 6000);


