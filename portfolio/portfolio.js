/* =========================================================
   RAMAN KASHYAP PORTFOLIO - JAVASCRIPT
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {


    /* =====================================================
       LOADER
    ===================================================== */

    const loader = document.getElementById("loader");

    window.addEventListener("load", () => {

        if (loader) {
            loader.style.display = "none";
        }

    });


    /* =====================================================
       AOS ANIMATION
    ===================================================== */

    if (typeof AOS !== "undefined") {

        AOS.init({
            duration: 800,
            once: true,
            offset: 70
        });

    }


    /* =====================================================
       TYPING EFFECT
    ===================================================== */

    const typingElement = document.getElementById("typing");

    if (typingElement && typeof Typed !== "undefined") {

        new Typed("#typing", {

            strings: [
                "Frontend Developer",
                "B.Tech (CSIT) Student",
                "Aspiring Full Stack Developer"
            ],

            typeSpeed: 65,
            backSpeed: 35,
            backDelay: 1400,
            loop: true

        });

    }


    /* =====================================================
       MOBILE MENU
    ===================================================== */

    const menuToggle = document.getElementById("menu-toggle");
    const navbar = document.getElementById("navbar");
    const navLinks = document.querySelectorAll(".nav-links a");


    if (menuToggle && navbar) {

        menuToggle.addEventListener("click", () => {

            navbar.classList.toggle("open");

            const isOpen = navbar.classList.contains("open");

            menuToggle.setAttribute(
                "aria-expanded",
                isOpen
            );


            const icon = menuToggle.querySelector("i");

            if (icon) {

                if (isOpen) {

                    icon.classList.remove("fa-bars");
                    icon.classList.add("fa-xmark");

                } else {

                    icon.classList.remove("fa-xmark");
                    icon.classList.add("fa-bars");

                }

            }

        });


        navLinks.forEach(link => {

            link.addEventListener("click", () => {

                navbar.classList.remove("open");

                menuToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );


                const icon = menuToggle.querySelector("i");

                if (icon) {

                    icon.classList.remove("fa-xmark");
                    icon.classList.add("fa-bars");

                }

            });

        });

    }


    /* =====================================================
       ACTIVE NAVBAR
    ===================================================== */

    const sections = document.querySelectorAll("section");
    const navigationLinks = document.querySelectorAll(".nav-links a");


    function updateActiveNav() {

        let currentSection = "home";


        sections.forEach(section => {

            const sectionTop =
                section.offsetTop - 160;

            if (window.scrollY >= sectionTop) {

                currentSection =
                    section.getAttribute("id");

            }

        });


        navigationLinks.forEach(link => {

            link.classList.remove("active");

            if (
                link.getAttribute("href") ===
                "#" + currentSection
            ) {

                link.classList.add("active");

            }

        });

    }


    window.addEventListener(
        "scroll",
        updateActiveNav
    );


    updateActiveNav();


    /* =====================================================
       SCROLL TO TOP
    ===================================================== */

    const topButton =
        document.getElementById("topBtn");


    if (topButton) {

        window.addEventListener("scroll", () => {

            if (window.scrollY > 350) {

                topButton.style.display = "flex";

            } else {

                topButton.style.display = "none";

            }

        });


        topButton.addEventListener("click", () => {

            window.scrollTo({

                top: 0,

                behavior: "smooth"

            });

        });

    }


    /* =====================================================
       DARK / LIGHT MODE
    ===================================================== */

    const themeToggle =
        document.getElementById("theme-toggle");


    function setTheme(theme) {

        const icon =
            themeToggle
                ? themeToggle.querySelector("i")
                : null;


        if (theme === "light") {

            document.body.classList.add("light-mode");

            if (icon) {

                icon.classList.remove("fa-moon");
                icon.classList.add("fa-sun");

            }

        } else {

            document.body.classList.remove("light-mode");

            if (icon) {

                icon.classList.remove("fa-sun");
                icon.classList.add("fa-moon");

            }

        }

    }


    if (themeToggle) {

        const savedTheme =
            localStorage.getItem("portfolio-theme");


        if (savedTheme === "light") {

            setTheme("light");

        } else {

            setTheme("dark");

        }


        themeToggle.addEventListener("click", () => {

            const isLight =
                document.body.classList.contains(
                    "light-mode"
                );


            if (isLight) {

                setTheme("dark");

                localStorage.setItem(
                    "portfolio-theme",
                    "dark"
                );

            } else {

                setTheme("light");

                localStorage.setItem(
                    "portfolio-theme",
                    "light"
                );

            }

        });

    }


    /* =====================================================
       CONTACT FORM
    ===================================================== */

    const contactForm =
        document.getElementById("contact-form");


    if (contactForm) {

        contactForm.addEventListener(
            "submit",
            event => {

                event.preventDefault();


                const name =
                    document.getElementById("name");


                const email =
                    document.getElementById("email");


                const message =
                    document.getElementById("message");


                if (
                    !name ||
                    !email ||
                    !message
                ) {

                    return;

                }


                if (
                    name.value.trim() === "" ||
                    email.value.trim() === "" ||
                    message.value.trim() === ""
                ) {

                    alert(
                        "Please fill in all fields."
                    );

                    return;

                }


                alert(
                    "Thank you, " +
                    name.value.trim() +
                    "! Your message has been recorded."
                );


                contactForm.reset();

            }
        );

    }


    /* =====================================================
       SMOOTH NAVIGATION
    ===================================================== */

    navigationLinks.forEach(link => {

        link.addEventListener("click", event => {

            const targetId =
                link.getAttribute("href");


            if (
                targetId &&
                targetId.startsWith("#")
            ) {

                const target =
                    document.querySelector(targetId);


                if (target) {

                    event.preventDefault();


                    target.scrollIntoView({

                        behavior: "smooth",

                        block: "start"

                    });

                }

            }

        });

    });


    /* =====================================================
       CONSOLE MESSAGE
    ===================================================== */

    console.log(
        "Raman Kashyap Portfolio Loaded Successfully."
    );

});