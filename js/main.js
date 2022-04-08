const burgerBtn = document.getElementById('hamburger-btn');
const navMobile = document.getElementById('nav-mobile');

function mobileVew() {
	navMobile.classList.toggle('header__nav-mobile--active');
	burgerBtn.classList.toggle('is-active');
}
burgerBtn.addEventListener('click', mobileVew);
