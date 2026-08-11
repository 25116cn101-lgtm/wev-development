// ==============================
// Portfolio JavaScript - Part 1
// ==============================

// Navbar
const header = document.querySelector(".header");

// Navbar Links
const navLinks = document.querySelectorAll(".nav-links a");

// Sabhi Sections
const sections = document.querySelectorAll("section");

// Scroll To Top Button
const scrollBtn = document.getElementById("scrollTopBtn");

// ==============================
// Sticky Navbar
// ==============================

window.addEventListener("scroll", function () {

    if (window.scrollY > 50) {

        header.style.background = "rgba(2,6,23,.98)";
        header.style.boxShadow = "0 5px 20px rgba(0,0,0,.4)";

    }

    else {

        header.style.background = "rgba(15,23,42,.95)";
        header.style.boxShadow = "none";

    }

});


// ==============================
// Scroll To Top Button
// ==============================

window.addEventListener("scroll", function () {

    if (window.scrollY > 400) {

        scrollBtn.style.display = "block";

    }

    else {

        scrollBtn.style.display = "none";

    }

});


// ==============================
// Scroll To Top Click
// ==============================

scrollBtn.addEventListener("click", function () {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});


// ==============================
// Active Navbar Link
// ==============================

window.addEventListener("scroll", function () {

    let currentSection = "";

    sections.forEach(function (section) {

        const sectionTop = section.offsetTop - 120;

        const sectionHeight = section.offsetHeight;

        if (window.scrollY >= sectionTop) {

            currentSection = section.getAttribute("id");

        }

    });

    navLinks.forEach(function (link) {

        link.style.color = "white";

        if (link.getAttribute("href") === "#" + currentSection) {

            link.style.color = "#38bdf8";

        }

    });

});


// ==============================
// Hero Image Animation
// ==============================

const heroImage = document.querySelector(".hero-image");

window.addEventListener("scroll", function () {

    let value = window.scrollY;

    heroImage.style.transform =
        "translateY(" + value * 0.10 + "px)";

});


// ==============================
// Button Hover Effect
// ==============================

const buttons = document.querySelectorAll(".btn");

buttons.forEach(function (button) {

    button.addEventListener("mouseenter", function () {

        button.style.boxShadow =
            "0 10px 25px rgba(56,189,248,.5)";

    });

    button.addEventListener("mouseleave", function () {

        button.style.boxShadow = "none";

    });

});


// ==============================
// Project Card Hover
// ==============================

const projectCards = document.querySelectorAll(".project-card");

projectCards.forEach(function (card) {

    card.addEventListener("mouseenter", function () {

        card.style.transform = "translateY(-15px)";

    });

    card.addEventListener("mouseleave", function () {

        card.style.transform = "translateY(0px)";

    });

});


// ==============================
// Education Card Hover
// ==============================

const educationCards = document.querySelectorAll(".education-card");

educationCards.forEach(function (card) {

    card.addEventListener("mouseenter", function () {

        card.style.transform = "scale(1.03)";

    });

    card.addEventListener("mouseleave", function () {

        card.style.transform = "scale(1)";

    });

});


// ==============================
// Console Message
// ==============================

console.log("Portfolio Part 1 Loaded Successfully");
// ==============================
// Portfolio JavaScript Part 2A
// ==============================

// ------------------------------
// Typing Effect
// ------------------------------

const typingText = document.querySelector(".hero-text h2");

const words = [
    "Frontend Developer",
    "JavaScript Learner",
    "DSA Student",
    "Future Full Stack Developer"
];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {

    let currentWord = words[wordIndex];

    if (!isDeleting) {

        typingText.textContent =
            currentWord.substring(0, charIndex);

        charIndex++;

        if (charIndex > currentWord.length) {

            isDeleting = true;

            setTimeout(typeEffect, 1200);

            return;
        }

    }

    else {

        typingText.textContent =
            currentWord.substring(0, charIndex);

        charIndex--;

        if (charIndex < 0) {

            isDeleting = false;

            wordIndex++;

            if (wordIndex >= words.length) {

                wordIndex = 0;

            }

        }

    }

    setTimeout(typeEffect, isDeleting ? 60 : 120);

}

typeEffect();


// ------------------------------
// Reveal Animation
// ------------------------------

const revealElements = document.querySelectorAll(

".about-container, .card, .project-card, .education-card, .contact-box"

);

function revealAnimation() {

    revealElements.forEach(function(item){

        const windowHeight = window.innerHeight;

        const elementTop =
            item.getBoundingClientRect().top;

        if(elementTop < windowHeight - 120){

            item.style.opacity = "1";

            item.style.transform =
            "translateY(0px)";

        }

    });

}

window.addEventListener(

"scroll",

revealAnimation

);

revealAnimation();


// ------------------------------
// Skills Hover Animation
// ------------------------------

const skillCards =
document.querySelectorAll(".card");

skillCards.forEach(function(card){

    card.addEventListener(

    "mouseenter",

    function(){

        card.style.transform =
        "translateY(-12px) scale(1.05)";

    });

    card.addEventListener(

    "mouseleave",

    function(){

        card.style.transform =
        "translateY(0px) scale(1)";

    });

});


// ------------------------------
// About Animation
// ------------------------------

const about =
document.querySelector(".about-container");

window.addEventListener(

"scroll",

function(){

    const top =
    about.getBoundingClientRect().top;

    if(top < window.innerHeight-150){

        about.style.opacity="1";

        about.style.transform=
        "translateY(0px)";

    }

});


// ------------------------------
// Console
// ------------------------------

console.log("Portfolio Part 2A Loaded");
// ==============================
// Portfolio JavaScript Part 2B
// ==============================


// ------------------------------
// Project Cards Stagger Animation
// ------------------------------

const projects = document.querySelectorAll(".project-card");

projects.forEach(function(card,index){

    card.style.transitionDelay = (index * 0.2) + "s";

});


// ------------------------------
// Education Cards Animation
// ------------------------------

const educationCards =
document.querySelectorAll(".education-card");

educationCards.forEach(function(card,index){

    card.style.transitionDelay = (index * .15) + "s";

});


// ------------------------------
// Contact Animation
// ------------------------------

const contactBox =
document.querySelector(".contact-box");

window.addEventListener("scroll",function(){

    let top =
    contactBox.getBoundingClientRect().top;

    if(top < window.innerHeight-120){

        contactBox.style.opacity="1";

        contactBox.style.transform="translateY(0px)";

    }

});


// ------------------------------
// Hero Floating Effect
// ------------------------------

const heroImage =
document.querySelector(".hero-image");

let direction = 1;

setInterval(function(){

    heroImage.style.transform =
    "translateY(" + (direction*12) + "px)";

    direction *= -1;

},1500);


// ------------------------------
// Counter Animation
// ------------------------------

const counters = document.querySelectorAll("[data-count]");

function startCounter(){

    counters.forEach(function(counter){

        let target =
        Number(counter.dataset.count);

        let current = 0;

        let speed =
        Math.ceil(target/80);

        const timer = setInterval(function(){

            current += speed;

            if(current >= target){

                current = target;

                clearInterval(timer);

            }

            counter.textContent = current;

        },20);

    });

}


// ------------------------------
// Counter Trigger
// ------------------------------

let counterStarted = false;

window.addEventListener("scroll",function(){

    const skills =
    document.querySelector(".skills");

    if(!skills) return;

    const top =
    skills.getBoundingClientRect().top;

    if(top < window.innerHeight-150){

        if(!counterStarted){

            counterStarted = true;

            startCounter();

        }

    }

});


// ------------------------------
// Active Button Animation
// ------------------------------

const buttons =
document.querySelectorAll(".btn");

buttons.forEach(function(btn){

    btn.addEventListener("mousedown",function(){

        btn.style.transform =
        "scale(.95)";

    });

    btn.addEventListener("mouseup",function(){

        btn.style.transform =
        "scale(1)";

    });

});


// ------------------------------
// Navbar Hover Glow
// ------------------------------

const links =
document.querySelectorAll(".nav-links a");

links.forEach(function(link){

    link.addEventListener("mouseenter",function(){

        link.style.textShadow =
        "0 0 10px #38bdf8";

    });

    link.addEventListener("mouseleave",function(){

        link.style.textShadow =
        "none";

    });

});


// ------------------------------
// Console
// ------------------------------

console.log("Portfolio Part 2B Loaded");