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

  const iconFacebook = document.getElementById("icon-facebook");
  if (iconFacebook) {
    iconFacebook.addEventListener("click", function () {
      window.open(
        " https://www.facebook.com/profile.php?id=61581066525012&sk=about",
        "_blank"
      );
    });
  }

  const iconInstagram = document.getElementById("icon-instagram");
  if (iconInstagram) {
    iconInstagram.addEventListener("click", function () {
      window.open("https://www.instagram.com/mayacopups/", "_blank");
    });
  }
});
