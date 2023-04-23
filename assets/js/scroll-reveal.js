window.sr = ScrollReveal({ reset: true })
sr.reveal(".sobre-mim", {
  origin: "left", distance: "50px", duration: 2000
});


sr.reveal('.foto-card', { distance: "10px", duration: 2000, origin: 'right' })
sr.reveal('.escrita-sobre', { distance: "10px", duration: 2000, origin: 'bottom' })
sr.reveal('.escrita-projetos', { distance: "10px", duration: 2100, origin: 'top' })
sr.reveal('.terceiro-container', { distance: "10px", duration: 2500, origin: 'bottom' })
sr.reveal('.escrita-habilidades', { distance: "10px", duration: 2500, origin: 'right' })
sr.reveal('.container-tecnologias', { distance: "10px", duration: 2500, origin: 'left' })

/*rolagem suave menu*/
const linksMenu = document.querySelectorAll('.menu a');

linksMenu.forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();

    const section = document.querySelector(this.getAttribute('href'));

    section.scrollIntoView({
      behavior: 'smooth'
    });
  });
});



var ul = document.querySelector('.menu nav ul');
var menuBtn = document.querySelector('.menu-btn i');

function menuShow() {
  if (ul.classList.contains('open')) {
    ul.classList.remove('open');
  } else {
    ul.classList.add('open');
  }
}