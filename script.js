const toggle = document.getElementById('menu-toggle');
  const navLinks = document.querySelector('.nav-links');

  toggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    document.querySelector('.nav-links').classList.remove('active');
  });
});

// script.js me add karo
window.addEventListener('scroll', function () {
  const header = document.querySelector("header");
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});
