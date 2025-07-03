function changeHeading() {
  document.getElementById("mainHeading").textContent = "Welcome to Our Future!";
}

function changeBgColor() {
  document.body.style.backgroundColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
}

function toggleFunFact() {
  const fact = document.getElementById("funFact");
  fact.style.display = fact.style.display === "none" ? "block" : "none";
}
