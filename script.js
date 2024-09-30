function toggleLight() {
  const body = document.body;
  const lightSwitchButton = document.getElementById("lightSwitch");

  if (body.style.backgroundColor === "black") {
    body.style.backgroundColor = "white";
    document.title = "Good Morning";
    lightSwitchButton.textContent = "Turn Off Light";
  } else {
    body.style.backgroundColor = "black";
    document.title = "Good Night";
    lightSwitchButton.textContent = "Turn On Light";
  }
}
