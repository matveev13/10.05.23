/*------модальное окно----------*/

const reg = document.querySelector(".registration"),
  log = document.querySelector(".logIn"),
  modal = document.querySelector(".modal-registration"),
  closeM = document.querySelector(".close"),
  submit = document.querySelector(".modal__btn"),
  mData = document.querySelector(".modal-data");

/* console.log(reg, log, modal, closeM); */

reg.addEventListener("click", () => {
  (document.body.style.overflow = "hidden"), show();
});

modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    closeModal();
  }
});

document.body.addEventListener("keyup", (e) => {
  if (e.key === "Escape") {
    closeModal();
  }
});

closeM.onclick = closeModal;

submit.onclick = closeModal;

function show() {
  modal.classList.toggle("show2");
}

function closeModal() {
  modal.classList.remove("show2"), (document.body.style.overflow = "");
}

/*-----бургер-------*/

let btn = document.getElementById("menu-toggle"),
  menu = document.getElementById("menu");

btn.addEventListener("click", (e) => {
  menu.classList.toggle("show");
});

/*--- перехват и вывод данных-----*/

const form = document.querySelector(".modal-reg-form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  let name = form.name.value,
    email = form.eMail.value,
    password = form.password.value;

  console.log(name);
  console.log(email);
  console.log(password);
});

const data = document.getElementById("modal-data");

console.log(data, submit, mData);

submit.addEventListener("click", (e) => {
  let name = form.name.value,
    email = form.eMail.value,
    password = form.password.value;

  mData.classList.toggle("show2"),
    (data.innerText = name + ", " + email + ", " + password);
});

mData.addEventListener("click", (e) => {
  if (e.target === mData) {
    mData.classList.remove("show2");
  }
});

document.body.addEventListener("keyup", (e) => {
  if (e.key === "Escape") {
    mData.classList.remove("show2");
  }
});
