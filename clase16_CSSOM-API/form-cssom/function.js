document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.form');
  const inputs = {
    firstName: document.querySelector('.form__firstName'),
    lastName: document.querySelector('.form__lastName'),
    username: document.querySelector('.form__username'),
    password: document.querySelector('.form__password'),
    confirmPassword: document.querySelector('.form__confirmPassword'),
    birthday: document.querySelector('.form__birthday'),
  };

  const nameRegex = /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžæÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u;

  const showError = (input, message) => {
    input.classList.add('is-invalid');
    const span = input.nextElementSibling;
    span.textContent = message;
  };

  const clearError = (input) => {
    input.classList.remove('is-invalid');
    const span = input.nextElementSibling;
    span.textContent = '';
  };

  inputs.firstName.addEventListener('input', () => {
    if (!nameRegex.test(inputs.firstName.value)) {
      showError(inputs.firstName, 'El nombre no debe tener números ni símbolos.');
    } else {
      clearError(inputs.firstName);
    }
  });

  inputs.lastName.addEventListener('input', () => {
    if (!nameRegex.test(inputs.lastName.value)) {
      showError(inputs.lastName, 'El apellido no debe tener números ni símbolos.');
    } else {
      clearError(inputs.lastName);
    }
  });

  inputs.password.addEventListener('input', () => {
    if (inputs.password.value.length < 9) {
      showError(inputs.password, 'La contraseña debe tener al menos 9 caracteres.');
    } else {
      clearError(inputs.password);
    }
  });

  inputs.confirmPassword.addEventListener('input', () => {
    if (inputs.confirmPassword.value !== inputs.password.value) {
      showError(inputs.confirmPassword, 'Las contraseñas no coinciden.');
    } else {
      clearError(inputs.confirmPassword);
    }
  });

  inputs.birthday.addEventListener('input', () => {
    const today = new Date();
    const birthday = new Date(inputs.birthday.value);
    if (birthday > today) {
      showError(inputs.birthday, 'No podés nacer en el futuro.');
    } else {
      clearError(inputs.birthday);
    }
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    let isValid = true;

    if (!nameRegex.test(inputs.firstName.value)) {
      showError(inputs.firstName, 'Nombre inválido.');
      isValid = false;
    }

    if (!nameRegex.test(inputs.lastName.value)) {
      showError(inputs.lastName, 'Apellido inválido.');
      isValid = false;
    }

    if (inputs.password.value.length < 9) {
      showError(inputs.password, 'Contraseña muy corta.');
      isValid = false;
    }

    if (inputs.password.value !== inputs.confirmPassword.value) {
      showError(inputs.confirmPassword, 'Contraseñas diferentes.');
      isValid = false;
    }

    const birthday = new Date(inputs.birthday.value);
    if (birthday > new Date()) {
      showError(inputs.birthday, 'Fecha de nacimiento inválida.');
      isValid = false;
    }

    if (!isValid) return;

    // Guardar en localStorage
    const formData = {
      firstName: inputs.firstName.value,
      lastName: inputs.lastName.value,
      username: inputs.username.value,
      password: inputs.password.value,
      birthday: inputs.birthday.value,
      newsletter: document.querySelector('.form__newsletter').checked,
    };

    localStorage.setItem('user', JSON.stringify(formData));
    alert('Registro exitoso');
    form.reset();
    document.querySelectorAll('.error-msg').forEach(span => span.textContent = '');
  });
});
