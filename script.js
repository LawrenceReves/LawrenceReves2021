
let projectButton = document.getElementById("projects");

projectButton.addEventListener("click", function(){
  document.querySelector('.project-grid').scrollIntoView({
    behavior: 'smooth'
  });
});



let aboutButton = document.getElementById("about");
let aboutPage = document.getElementsByClassName("about-page")[0];
let exitAbout = document.getElementById("about-close");

aboutButton.addEventListener("click", function(){
  aboutPage.style.display = "flex";
  exitAbout.style.display = "block";
  projectButton.style.display = "none";
});

exitAbout.addEventListener("click", function(event) {
  aboutPage.style.display = "none";
  exitAbout.style.display = "none";
  projectButton.style.display = "block";
});


let mobileAbout = document.getElementById("mobile-about");

mobileAbout.addEventListener("click", function(){
  aboutPage.style.display = "flex";
});

let mobileProjectButton = document.getElementById("mobile-projects");

mobileProjectButton.addEventListener("click", function(){
  menuContent.style.display = "none";
  menuButton.style.display = "block";
  exitMenu.style.display = "none";

  aboutPage.style.display = "none";
});



let menuButton = document.getElementById("menu-button");
let menuContent = document.getElementsByClassName("menu-content")[0];
let exitMenu = document.getElementById("exit-button");

menuButton.addEventListener("click", function(){
  menuContent.style.display = "flex";
  menuButton.style.display = "none";
  exitMenu.style.display = "block";
});

exitMenu.addEventListener("click", function(event) {
  menuContent.style.display = "none";
  menuButton.style.display = "block";
  exitMenu.style.display = "none";

  aboutPage.style.display = "none";
});
