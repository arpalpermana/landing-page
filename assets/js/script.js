document.addEventListener("DOMContentLoaded", function () {
  const burger = document.querySelector("#burger");
  const nav = document.querySelector(".nav-list");

  burger.addEventListener("click", () => {
    nav.classList.toggle("active");
  });
});

document.getElementById("meet-chef").addEventListener("click", function () {
  const details = document.getElementById("chef-details");
  details.classList.toggle("hidden");
});

document.querySelectorAll("nav a").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href");
    const targetElement = document.querySelector(targetId);
    const headerOffset = document.querySelector(".nav-container").offsetHeight;
    const elementPosition = targetElement.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
    if (targetId == "#trending") {
      window.scrollTo({
        top: offsetPosition + 350,
        behavior: "smooth",
      });
    } else {
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  });
});
