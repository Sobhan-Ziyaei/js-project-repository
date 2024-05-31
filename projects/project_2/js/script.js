const sumbitBtn = document.querySelector("button");
const usernameInput = document.querySelector(".username");
const passwordInput = document.querySelector(".password");
const modal = document.querySelector(".modal");

const submitForm = () => {
  let usernameValue = usernameInput.value;
  let passwordValue = passwordInput.value;

  if (usernameValue.length < 12 || passwordValue < 8) {
    modal.style.display = "inline";
    modal.style.background = "red";
    modal.innerHTML = "لطفا اطلاعات لازم را به درستی وارد نمایید";
  } else {
    modal.style.display = "inline";
    modal.style.background = "green";
    modal.innerHTML = "لاگین با موفقیت انجام شد";
  }

  setTimeout(() => {
    modal.style.display = "none";
  }, 3000);
};

sumbitBtn.addEventListener("click", submitForm);
