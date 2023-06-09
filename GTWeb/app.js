// const mainContainer = document.querySelector('.main__container');

// function fadeIn() {
//   mainContainer.style.opacity = 0;
//   let position = 0;

//   function animate() {
//     if (position >= 100) {
//       clearInterval(animation);
//     } else {
//       position += 5; // Adjust the speed of the animation by changing the increment value
//       mainContainer.style.opacity = position / 100;
//     }
//   }

//   const animation = setInterval(animate, 30); // Adjust the interval duration for smoother animation
// }

// window.addEventListener('load', fadeIn);

// Wait for the page to load
window.addEventListener('load', function() {
    // Select the main__content element
    const mainContent = document.querySelector('.main__content');
    // Add the animation class after a delay
    setTimeout(function() {
      mainContent.classList.add('animate-content');
    }, 1000); // Adjust the delay as needed
  });

document.addEventListener('DOMContentLoaded', function() {
    function checkViewportVisibility(element) {
      const rect = element.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    }
    
    function handleScroll() {
      const elements = document.querySelectorAll('.servdesc__maps');
      elements.forEach((element) => {
        if (checkViewportVisibility(element)) {
          element.classList.add('show-animation');
        }
      });
    }
    
    window.addEventListener('scroll', handleScroll);


})