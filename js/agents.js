// handle toggle navbar

const barMark = document.querySelector(`.bar-mark`);
const xMark = document.querySelector(`.x-mark`);
const toggleLayer = document.querySelector(`.nav-toggle-layer`);

barMark.addEventListener("click", () => {
  // window.scrollTo({ top: 0, behavior: "smooth" });
  toggleLayer.style.width = "50vw";
  toggleLayer.style.opacity = ".8";
  barMark.style.display = "none";
  xMark.style.display = "flex";
});
xMark.addEventListener("click", () => {
  toggleLayer.style.width = "0vw";
  toggleLayer.style.opacity = "0";
  barMark.style.display = "flex";
  xMark.style.display = "none";
});