// Mobile nav toggle
const navToggle = document.querySelector('.nav-toggle');
const mainNav = document.querySelector('.main-nav');

if (navToggle && mainNav) {
  navToggle.addEventListener('click', () => {
    mainNav.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', mainNav.classList.contains('open'));
  });
}

// Quote form submission feedback (Netlify Forms handles the POST)
document.querySelectorAll('.quote-form, .contact-form').forEach(form => {
  form.addEventListener('submit', function (e) {
    const btn = form.querySelector('button[type="submit"]');
    const success = form.querySelector('.form-success');
    if (btn) {
      btn.disabled = true;
      btn.textContent = 'Sending...';
    }
    // Let Netlify handle the actual submission — just show UI feedback on redirect back
  });
});
