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

// Animate possibilities

function cycleColors() {
  const items = document.querySelectorAll(".possibilities__grid-item h3");
  let currentIndex = 0;

  function next() {
    items.forEach((item, index) => {
      if (index === currentIndex) {
        item.style.color = "#363CB0";
      } else {
        item.style.color = "";
      }
    });

    currentIndex = (currentIndex + 1) % items.length;
  }

  setInterval(next, 1000);
}

document.addEventListener("DOMContentLoaded", cycleColors);

// Animate consultation

document.addEventListener("DOMContentLoaded", function () {
  const image = document.querySelector(".consultation-image");
  const viewportHeight = window.innerHeight;

  const handleScroll = () => {
    const imageTop = image.getBoundingClientRect().top;
    if (imageTop < viewportHeight) {
      image.classList.add("animate");
    }
  };

  window.addEventListener("scroll", handleScroll);
  handleScroll();
});
