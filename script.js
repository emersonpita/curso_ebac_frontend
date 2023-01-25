const form = document.getElementById("form");
const number_a = document.getElementById("number-a");
const number_b = document.getElementById("number-b");

form.addEventListener("submit", (e) => {
  e.preventDefault()

  checkInputs()
});

function checkInputs() {
  const number_aValue = number_a.value
  const number_bValue = number_b.value

  if (number_bValue < number_aValue) {
    errorValidation(number_b)
    errorValidation(number_a)
  } else {
    successValidation(number_a)
    successValidation(number_b)
  }
};

function errorValidation (input) {
  const formControl = input.parentElement;

  formControl.className = "form-control error"
}

function successValidation (input) {
  const formControl = input.parentElement;

  formControl.className = "form-control success"
}