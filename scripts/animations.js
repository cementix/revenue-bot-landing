// Animate bonus

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

// Animate launch

document.addEventListener("DOMContentLoaded", function () {
  const gridItems = document.querySelectorAll(".grid-item");
  const image = document.querySelector(".launch__wrapper-image");

  function handleScroll() {
    gridItems.forEach((element) => {
      const elementTop = element.getBoundingClientRect().top;
      const viewportHeight = window.innerHeight;

      if (elementTop < viewportHeight) {
        element.classList.add("animate");
      }
    });

    if (image) {
      const imageTop = image.getBoundingClientRect().top;
      if (imageTop < window.innerHeight) {
        image.classList.add("animate");
      }
    }
  }

  window.addEventListener("scroll", handleScroll);
  handleScroll();
});

// Animate burses

document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".burses");
  const row = container.querySelector(".burse__row");
  for (let i = 0; i < 2; i++) {
    const clone = row.cloneNode(true);
    container.appendChild(clone);
  }
});
