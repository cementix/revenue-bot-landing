document.addEventListener('DOMContentLoaded', function() {
    const gridItems = document.querySelectorAll('.grid-item');
    const image = document.querySelector('.launch__wrapper-image');
  
    function handleScroll() {
      gridItems.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        const viewportHeight = window.innerHeight;
  
        if (elementTop < viewportHeight) {
          element.classList.add('animate');
        }
      });
  
      if (image) {
        const imageTop = image.getBoundingClientRect().top;
        if (imageTop < window.innerHeight) {
          image.classList.add('animate');
        }
      }
    }
  
    window.addEventListener('scroll', handleScroll);
    handleScroll();
  });
  