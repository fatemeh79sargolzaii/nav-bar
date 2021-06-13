function nav() {
  const line = document.querySelector(".line");
  const links = document.querySelector(".links");
  const link = document.querySelectorAll(".links li");
  line.addEventListener("click", function () {
    links.classList.toggle("active");
    link.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFada 0.5s ease forwards ${
          index / 7 + 1.3
        }s`;
      }
    });
    line.classList.toggle("toggle");
  });
}
nav();
