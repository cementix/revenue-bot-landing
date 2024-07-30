document.addEventListener("DOMContentLoaded", function () {
  const bonusItems = document.querySelectorAll(".bonus__row-item");

  function handleScroll() {
    bonusItems.forEach((element, index) => {
      const elementTop = element.getBoundingClientRect().top;
      const viewportHeight = window.innerHeight;

      if (elementTop < viewportHeight) {
        element.classList.add("animate");
        element.classList.add(`div${index}`);
      }
    });
  }

  window.addEventListener("scroll", handleScroll);
  handleScroll();
});
