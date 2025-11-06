document.addEventListener("DOMContentLoaded", function () {
  const scrollBtn = document.getElementById("icon-scroll-up");
  if (scrollBtn) {
    scrollBtn.addEventListener("click", function () {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });
  }
});
