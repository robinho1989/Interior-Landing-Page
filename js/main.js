const burgerBtn = document.querySelector('.hamburger');
const navMobile = document.querySelector('.header__nav-mobile');

function mobileVew() {
	navMobile.classList.toggle('header__nav-mobile--active');
	burgerBtn.classList.toggle('is-active');
}
burgerBtn.addEventListener('click', mobileVew);
