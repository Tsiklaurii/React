const signUpForm = document.getElementById("sign_up_form");
const fullNameInput = document.getElementById("full_name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirm_password");

signUpForm.addEventListener("submit", (e) => {
    const hasErrors = validateSignUp(fullNameInput, emailInput, passwordInput, confirmPasswordInput);

    if (hasErrors) {
        e.preventDefault();
    }
});

function validateSignUp(name, email, password, confirmPassword) {
    let hasError = false;

    const nameError = document.getElementById("name_error_message");
    const emailError = document.getElementById("email_error_message");
    const passwordError = document.getElementById("password_error_message");
    const confirmError = document.getElementById("confirm_password_error_message");

    if (name.value.trim() === "") {
        showError(nameError, "Enter your full name");
        hasError = true;
    } else if (!isValidName(name.value)) {
        showError(nameError, "Name must contain only letters");
        hasError = true;
    } else {
        clearError(nameError);
    }

    if (email.value.trim() === "") {
        showError(emailError, "Enter your email");
        hasError = true;
    } else if (!isValidEmail(email.value)) {
        showError(emailError, "Invalid email format");
        hasError = true;
    } else {
        clearError(emailError);
    }

    if (password.value.trim() === "") {
        showError(passwordError, "Enter your password");
        hasError = true;
    } else if (!isValidPassword(password.value)) {
        showError(passwordError, "At least 8 chars, 1 letter & 1 number");
        hasError = true;
    } else {
        clearError(passwordError);
    }

    if (confirmPassword.value.trim() === "") {
        showError(confirmError, "Confirm your password");
        hasError = true;
    } else if (confirmPassword.value !== password.value) {
        showError(confirmError, "Passwords do not match");
        hasError = true;
    } else {
        clearError(confirmError);
    }

    return hasError;
}

function showError(error, message) {
    error.textContent = message;
    error.classList.add("block");
}

function clearError(error) {
    error.textContent = "";
    error.classList.remove("block");
}

function isValidName(name) {
    const regex = /^[A-Za-z\s]{2,}$/;
    return regex.test(name);
}

function isValidEmail(email) {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return regex.test(email);
}

function isValidPassword(password) {
    const regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*#?&]{8,}$/;
    return regex.test(password);
}
