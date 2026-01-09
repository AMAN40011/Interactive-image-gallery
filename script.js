let scrollContainer = document.getElementById("gallery");
let backBtn = document.getElementById("backBtn");
let nextBtn = document.getElementById("nextBtn");

scrollContainer.addEventListener("wheel", (evt) => {
  evt.preventDefault();
  scrollContainer.scrollLeft += evt.deltaY;
});

nextBtn.addEventListener("click", () => {
  scrollContainer.scrollLeft += 300;
});

backBtn.addEventListener("click", () => {
  scrollContainer.scrollLeft -= 300;
});
