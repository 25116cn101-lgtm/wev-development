// ==========================
// LOADER
// ==========================

window.addEventListener("load", () => {

const loader = document.getElementById("loader");

if(loader){

loader.style.display = "none";

}

});


// ==========================
// AOS
// ==========================

AOS.init({

duration:1000,

once:true

});


// ==========================
// TYPING EFFECT
// ==========================

new Typed("#typing",{

strings:[

"Frontend Developer",

"B.Tech (CSIT) Student",

"Aspiring Full Stack Developer"

],

typeSpeed:70,

backSpeed:40,

backDelay:1500,

loop:true

});


// ==========================
// SCROLL TO TOP
// ==========================

const topBtn=document.getElementById("topBtn");

window.addEventListener("scroll",()=>{

if(window.scrollY>300){

topBtn.style.display="block";

}else{

topBtn.style.display="none";

}

});

topBtn.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});


// ==========================
// ACTIVE NAVBAR
// ==========================

const sections=document.querySelectorAll("section");

const navLinks=document.querySelectorAll(".nav-links a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const sectionTop=section.offsetTop-150;

if(pageYOffset>=sectionTop){

current=section.getAttribute("id");

}

});

navLinks.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")==="#"+current){

link.classList.add("active");

}

});

});


// ==========================
// DARK MODE
// ==========================

const toggle=document.getElementById("theme-toggle");

toggle.addEventListener("click",()=>{

document.body.classList.toggle("light-mode");

});


// ==========================
// CONTACT FORM
// ==========================

const form=document.getElementById("contact-form");

form.addEventListener("submit",(e)=>{

e.preventDefault();

alert("Thank you! Your message has been recorded.");

form.reset();

});