// 0-Scroll Animation

// Initialize Lenis
//
const lenis = new Lenis({
  // Seem, I can set the attributes here.
  lerp: 0.05,
  duration: 1.4,
  easing: 1 - Math.pow(1 - x, 5),
});

// Use requestAnimationFrame to continuously update the scroll
//
function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

// 0-Scroll Animation

// ? 0-1 href animation

// ! methods One

// !! Since the methods from the interest won't be work for my case.

// const scrollButtons = document.querySelectorAll("[data-target]");

// scrollButtons.forEach((button) => {
//   button.addEventListener("click", (e) => {
//     e.preventDefault();
//     var target = button.dataset.target,
//       $el = document.getElementsById(target.replace("#", ""));
//     lenis.scrollTo($el, {
//       offset: 0,
//       immediate: false,
//       duration: 3,
//       easing: (x) =>
//         x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2,
//     });
//   });
// });

// ! methods One

// ! methods Two

// document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
//   anchor.addEventListener("click", function (e) {
//     e.preventDefault(); // Prevent default anchor click behavior
//     lenis.scrollTo(this.getAttribute("href"), {
//       offset: 100,                                                               // offset won't work, not targetId as reference
//       immediate: false,
//       duration: 3,
//       easing: (x) =>
//         x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2,
//     }); // Use Lenis to scroll
//   });
// });

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href");
    lenis.scrollTo(targetId, {
      immediate: false,
      offset: -100,
      duration: 3,
      easing: (x) =>
        x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2,
    });
  });
});

// ! methods Two

// ? 0-1 href animation

// ? 0-2 CSS by myself

// const elements = document.querySelectorAll("*");

// element.style.transition = "all 0.6s cubic-bezier(0.83, 0, 0.17, 1)";

// ? 0-2 CSS by myself


// 3 Lightbox

// 3 Lightbox
