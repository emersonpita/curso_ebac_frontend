const form = document.getElementById("form");
form.addEventListener("submit", function(event) {
  event.preventDefault();
  const fieldA = document.getElementById("fieldA").value;
  const fieldB = document.getElementById("fieldB").value;
  if (fieldB > fieldA) {
    alert("Formulário válido!");
  } else {
    alert("Formulário inválido!");
  }
});