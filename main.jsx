let inputEmail = document.getElementById("email"); //id= email
let button = document.getElementById("button"); //id = button

button.addEventListener("click", (event) => {
  event.preventDefault();
  ValidateEmail(inputEmail.value);
});
function ValidateEmail(email) {
  let expresionRegular =
    /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;

  if (expresionRegular.test(email) == true) {
    inputEmail.style.border = "1px solid hsl(223, 87%, 63%)";
    error.style.visibilite = "hidden";
    inputEmail.value = "";
  } else {
    inputEmail.style.border = "1px solid red";
    error.style.visibility = "visible";
  }
}
