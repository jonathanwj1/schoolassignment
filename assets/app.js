var nav = document.querySelector('nav');
var navLinks = document.querySelector('nav ul');
var navIcon = document.querySelector('.nav-icon');

navIcon.addEventListener('click', function() {
  navLinks.classList.toggle('show');
});