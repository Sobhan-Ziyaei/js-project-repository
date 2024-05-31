const usernameInputValidation = document.querySelector(".username-validation");
const passwordInputValidation = document.querySelector(".password-validation");
const usernameInput = document.querySelector(".username");
const passwordInput = document.querySelector(".password");

const usernameValidation = () => {
  if (usernameInput.value.length < 12) {
    usernameInputValidation.style.display = "block";
    usernameInputValidation.style.color = "red";
    usernameInputValidation.innerHTML = "Must Contain 12 Character (Min)";
  }else {
    usernameInputValidation.style.display = "block";
    usernameInputValidation.style.color = "green";
    usernameInputValidation.innerHTML = "Correct Value";
  }
};

const passwordValidation = () => {
    if (passwordInput.value.length < 8) {
        passwordInputValidation.style.display = "block";
        passwordInputValidation.style.color = "red";
        passwordInputValidation.innerHTML = "Must Contain 8 Character (Min)";
    }else {
        passwordInputValidation.style.display = "block";
        passwordInputValidation.style.color = "green";
        passwordInputValidation.innerHTML = "Correct Value";
    }
};


usernameInput.addEventListener('keydown' , usernameValidation);
passwordInput.addEventListener('keydown',passwordValidation);
