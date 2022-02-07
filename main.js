const toggleButton = document.querySelector(".navigation");
const navLink = document.querySelector(".nav__link")
const main = document.querySelector(".main");
toggleButton.addEventListener("click", () => {
    navLink.classList.toggle("hide");
    main.classList.toggle("hide");
});


