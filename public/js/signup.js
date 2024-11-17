const toggleIcon = document.getElementById('toggleIcon');
toggleIcon.addEventListener('click', function () {
  document.body.classList.toggle('dark-mode');
  document.querySelector('.card').classList.toggle('dark-mode');
  toggleIcon.classList.toggle('bi-moon-fill');
  toggleIcon.classList.toggle('bi-brightness-high-fill');
});

const registerForm = document.getElementById('registerForm');
registerForm.addEventListener('submit', function (event) {
  event.preventDefault();
  alert('Registration successful!');
});
