const password = document.querySelector('#password');

password.addEventListener("input", () => {
    if (password.value.length < 8) {
        password.setCustomValidity("La contraseña debe tener al menos 8 caracteres");
    } else {
        password.setCustomValidity("");
    }

    confirmPassword.dispatchEvent(new Event("input"));

});

function validateConfirmPassword() {
    if (confirmPassword.value === "") {
        confirmPassword.setCustomValidity("");
        return;
    }
    if (confirmPassword.value !== password.value) {
        confirmPassword.setCustomValidity("Las contraseñas no coinciden");
    } else {
        confirmPassword.setCustomValidity("");
    }
}

confirmPassword.addEventListener("input", validateConfirmPassword);
confirmPassword.addEventListener("blur", validateConfirmPassword);
password.addEventListener("blur", validateConfirmPassword);

const form = document.querySelector('.contacto form');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    if (!form.checkValidity()) {
        const firstInvalid = form.querySelector(":invalid");
        if (firstInvalid) {
            firstInvalid.focus();
        }
        form.reportValidity();
        return;
    }
    console.log("Formulario enviado");
});

const email = document.querySelector('#email');

email.addEventListener("input", () => {
    if (email.validity.typeMismatch) {
        email.setCustomValidity("Ingresa un correo válido");
    } else {
        email.setCustomValidity("");
    }
});

