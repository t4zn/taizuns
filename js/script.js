/* =============== LIGHT MODE =============== */
const toggleButton = document.getElementById("theme-toggle");
const themeIcon = document.getElementById("theme-icon");

document.addEventListener("DOMContentLoaded", () => {
  const isLightMode = localStorage.getItem("theme") === "light";
  document.body.classList.toggle("light-mode", isLightMode);
  themeIcon.src = isLightMode ? "assets/images/icon/sun.svg" : "assets/images/icon/moon.svg";
  themeIcon.alt = isLightMode ? "Sun icon" : "Moon icon";
});

toggleButton.addEventListener("click", () => {
  const isLightMode = document.body.classList.toggle("light-mode");
  localStorage.setItem("theme", isLightMode ? "light" : "dark");
  themeIcon.src = isLightMode ? "assets/images/icon/sun.svg" : "assets/images/icon/moon.svg";
  themeIcon.alt = isLightMode ? "Sun icon" : "Moon icon";
});

/* =============== SHARE MODE =============== */
document.getElementById("shareBtn").addEventListener("click", function () {
  if (navigator.share) {
    navigator.share({
      url: window.location.href
    });
  }
});

