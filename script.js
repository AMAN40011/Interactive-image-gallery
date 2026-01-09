document.addEventListener("DOMContentLoaded", () => {
  const scrollContainer = document.getElementById("gallery");
  const backBtn = document.getElementById("backBtn");
  const nextBtn = document.getElementById("nextBtn");

  if (!scrollContainer || !backBtn || !nextBtn) {
    console.error("Gallery or buttons not found in DOM");
    return;
  }

  const slideWidth = scrollContainer.clientWidth;

  // Mouse wheel → horizontal scroll
  scrollContainer.addEventListener(
    "wheel",
    (evt) => {
      evt.preventDefault();
      scrollContainer.scrollLeft += evt.deltaY;
    },
    { passive: false }
  );

  // Next slide
  nextBtn.addEventListener("click", () => {
    scrollContainer.scrollBy({
      left: slideWidth,
      behavior: "smooth",
    });
  });

  // Previous slide
  backBtn.addEventListener("click", () => {
    scrollContainer.scrollBy({
      left: -slideWidth,
      behavior: "smooth",
    });
  });
});
