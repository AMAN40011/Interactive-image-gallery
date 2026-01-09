document.addEventListener("DOMContentLoaded", () => {
  const scrollContainer = document.getElementById("gallery");
  const backBtn = document.getElementById("backBtn");
  const nextBtn = document.getElementById("nextBtn");

  if (!scrollContainer || !backBtn || !nextBtn) {
    console.error("Gallery or buttons not found in DOM");
    return;
  }

  // Mouse wheel → horizontal scroll
  scrollContainer.addEventListener("wheel", (evt) => {
    evt.preventDefault();
    scrollContainer.scrollLeft += evt.deltaY;
  }, { passive: false });

  // Next button
  nextBtn.addEventListener("click", () => {
    scrollContainer.scrollLeft += 300;
  });

  // Back button
  backBtn.addEventListener("click", () => {
    scrollContainer.scrollLeft -= 300;
  });
});
