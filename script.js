// Lightbox functionality
const images = document.querySelectorAll(".slide img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.querySelector(".lightbox .close");

// Open lightbox
images.forEach(img => {
  img.addEventListener("click", () => {
    lightbox.style.display = "flex";
    lightboxImg.src = img.src;
  });
});

// Close lightbox (button)
closeBtn.addEventListener("click", () => {
  lightbox.style.display = "none";
});

// Close lightbox (background click)
lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) {
    lightbox.style.display = "none";
  }
});

// Close on ESC key
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    lightbox.style.display = "none";
  }
});
