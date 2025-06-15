document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.form');
  const firstNameInput = document.querySelector('.form__firstName');
  const lastNameInput = document.querySelector('.form__lastName');
  const usernameInput = document.querySelector('.form__username');
  const passwordInput = document.querySelector('.form__password');
  const confirmPasswordInput = document.querySelector('.form__confirmPassword');
  const birthdayInput = document.querySelector('.form__birthday');
  const errorMsg = document.querySelector('.form__errorMsg');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    errorMsg.textContent = '';

    const nameRegex = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/;

    if (!nameRegex.test(firstNameInput.value)) {
      errorMsg.textContent = 'El nombre no debe contener números ni caracteres especiales.';
      firstNameInput.focus();
      return;
    }

    if (!nameRegex.test(lastNameInput.value)) {
      errorMsg.textContent = 'El apellido no debe contener números ni caracteres especiales.';
      lastNameInput.focus();
      return;
    }

    if (passwordInput.value !== confirmPasswordInput.value) {
      errorMsg.textContent = 'Las contraseñas no coinciden.';
      confirmPasswordInput.focus();
      return;
    }

    const today = new Date();
    const birthday = new Date(birthdayInput.value);
    if (birthday > today) {
      errorMsg.textContent = 'La fecha de nacimiento no puede estar en el futuro.';
      birthdayInput.focus();
      return;
    }

    alert('Formulario enviado con éxito');
    form.reset();
  });
});
