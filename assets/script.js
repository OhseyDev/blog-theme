var dlmode = false;
function toggleDarkMode() {
  let val = !localStorage.getItem("lightmode");
  localStorage.setItem("lightmode", val);
  document.body.classList.toggle("light");
}
document.addEventListener("ready", () => {
  if (localStorage.lightmode) {
    document.body.classList.add("light");
    document.getElementById("dlswitch").checked = false;
  } else {
    document.getElementById("dlswitch").checked = true;
  }
  document.getElementById("logo").addEventListener("click", () => {
    window.location.href = "https://ohsey.me/";
  });
});
function updateSwitch(self) {
  let lightmode = localStorage.getItem("lightmode");
  if (lightmode === undefined) {
    localStorage.setItem("lightmode", false);
  } else if (lightmode === true) {
    document.body.classList.add("light");
    self.checked = false;
  } else {
    self.checked = true;
  }
}
window.addEventListener("load", () => {
  var dlswitch = document.getElementById("dlswitch");
  dlswitch.addEventListener("click", toggleDarkMode);
});
