const toggleButton = document.querySelector(".navigation");
const navLink = document.querySelector(".nav__link")
toggleButton.addEventListener("click", () => {
    navLink.classList.toggle("hide");
    toggleButton.classList.toggle("nav__btn--closed");
});
