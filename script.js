document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('form-compra');
  const mensaje = document.getElementById('mensaje-compra');

  if (form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      const usuario = document.getElementById('usuario').value;
      const juego = document.getElementById('juego');
      const juegoNombre = juego.options[juego.selectedIndex].text;
      mensaje.textContent = `¡Gracias, ${usuario}! Has comprado "${juegoNombre}". Pronto recibirás un correo con los detalles.`;
      form.reset();
    });
  }
});

// Animación al hacer scroll (fade in)
function revealOnScroll() {
  const reveals = document.querySelectorAll('.juego-card, .noticias-section, .contacto-section');
  const windowHeight = window.innerHeight;
  reveals.forEach(el => {
    const elementTop = el.getBoundingClientRect().top;
    if (elementTop < windowHeight - 80) {
      el.classList.add('visible');
    }
  });
}
window.addEventListener('scroll', revealOnScroll);
window.addEventListener('DOMContentLoaded', revealOnScroll);

// Efecto hover con sonido en tarjetas de juegos
const juegoCards = document.querySelectorAll('.juego-card');
juegoCards.forEach((card, idx) => {
  const soundId = `hover-sound${idx+1}`;
  const sound = document.getElementById(soundId);
  card.addEventListener('mouseenter', () => {
    if (sound) {
      sound.currentTime = 0;
      sound.play();
    }
    card.style.boxShadow = '0 0 48px #00ffe7, 0 0 64px #ff00c8';
  });
  card.addEventListener('mouseleave', () => {
    if (sound) sound.pause();
    card.style.boxShadow = '';
  });
});

// Animación de mensaje enviado en formulario de contacto
const formContacto = document.getElementById('form-contacto');
if (formContacto) {
  formContacto.addEventListener('submit', function(e) {
    e.preventDefault();
    const mensajeDiv = document.getElementById('mensaje-enviado');
    mensajeDiv.textContent = '¡Mensaje enviado! Pronto nos pondremos en contacto.';
    mensajeDiv.style.opacity = 0;
    mensajeDiv.style.transition = 'opacity 0.7s';
    setTimeout(() => {
      mensajeDiv.style.opacity = 1;
    }, 100);
    formContacto.reset();
    setTimeout(() => {
      mensajeDiv.style.opacity = 0;
    }, 3500);
  });
}

