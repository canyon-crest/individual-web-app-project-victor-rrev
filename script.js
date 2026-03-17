// add javascript here
function showTip() {
  document.getElementById("tip").innerText =
    "Study in short sessions and take breaks!";
}

function greetUser() {
  let name = document.getElementById("name").value;
  document.getElementById("greeting").innerText =
    "Hello, " + name + "!";
}