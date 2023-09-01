const searchButtonElement = document.querySelector(".header__svg");
const searchFormElement = document.querySelector(".header__form");

searchButtonElement.addEventListener("click", () => {
	searchFormElement.reset();
	searchFormElement.classList.toggle("header__form_opened");
});