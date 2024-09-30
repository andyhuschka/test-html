const lightSwitchButton = document.getElementById("light-switch");
const body = document.body;

let isLightOn = true;

lightSwitchButton.addEventListener("click", function () {
  if (isLightOn) {
    body.style.backgroundColor = "#2c3e50";
    document.title = "Good Night";
    body.classList.add("dark-mode");
  } else {
    body.style.backgroundColor = "whitesmoke";
    document.title = "Good Morning";
    body.classList.remove("dark-mode");
  }

  isLightOn = !isLightOn;
});
