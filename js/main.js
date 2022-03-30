const burgerBtn = document.querySelector('.hamburger');
const navMobile = document.querySelector('.nav__mobile');

function mobileVew() {
	navMobile.classList.toggle('nav__mobile--active');
	burgerBtn.classList.toggle('is-active');
}
burgerBtn.addEventListener('click', mobileVew);
