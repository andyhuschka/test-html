const lightSwitchButton = document.getElementById("light-switch");
const body = document.body;

let isLightOn = true;

lightSwitchButton.addEventListener("click", function () {
  if (isLightOn) {
    body.classList.add("dark-mode");
    document.title = "Good Night";
  } else {
    body.classList.remove("dark-mode");
    document.title = "Good Morning";
  }
  isLightOn = !isLightOn;
});
