var dlmode = false;
function getdlmode() {
  var xmlHttp = new XMLHttpRequest();
  xmlHttp.open("GET", "https://ohsey.me/api/dlmode.php");
  xmlHttp.onreadystatechange((ready) => {
    if (xmlHttp.readyState === 200) {
      let doc = new DOMParser().parseFromString(xmlHttp.response);
      dlmode = doc.getElementById("result").innerText;
      if (document.readyState === "interactive") {
        updateSwitch(dlswitch);
      } else {
        document.addEventListener("readystatechange", (_) => {
          if (
            document.readyState === "complete" ||
            document.readyState === "interactive"
          ) {
            updateSwitch(dlswitch);
          }
        });
      }
    }
  });
}
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
