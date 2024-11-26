// 1-Cool Intro

let intro = document.querySelector(".intro");
let logo = document.querySelector(".logo-header");
let logoSpan = document.querySelectorAll(".logo");

const imgContainer = document.querySelector(".img-container");

window.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    setTimeout(() => {
      imgContainer.classList.add("hovered");
    }, 2000);

    logoSpan.forEach((span, idx) => {
      setTimeout(() => {
        span.classList.add("active");
      }, 2000 + (idx + 1) * 400);
    });

    setTimeout(() => {
      logoSpan.forEach((span, idx) => {
        setTimeout(() => {
          span.classList.remove("active");
          imgContainer.classList.remove("hovered");
          span.classList.add("fade");
          imgContainer.classList.add("fade");
        }, (idx + 1) * 50);
      });
    }, 4000);

    setTimeout(() => {
      intro.style.top = "-105%";
    }, 4600);
  });
});

// 1-Cool Intro

// 2-Scroll Animation Manager / Observer
const observer_Anim_Once = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const target = entry.target;
        const animationType = target.dataset.animation;

        switch (animationType) {
          case "fade-in":
            anime({
              targets: target,
              translateY: [
                {
                  value: 200,
                  duration: 500,
                  delay: 1000,
                },
                {
                  value: 0,
                  duration: 800,
                },
              ],
              rotate: {
                value: "1turn",
                easing: "easeInOutSine",
                delay: 1000,
              },
            });
            break;
        }
        observer.unobserve(target);
      }
    });
  },
  {
    threshold: 0.5,
  }
);

document.querySelectorAll(".animation-object-Once").forEach((box) => {
  observer_Anim_Once.observe(box);
});

// 2-Scroll Animation Manager / Observer
