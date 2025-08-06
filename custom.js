// ====== body overflow hidden ======
document.addEventListener("DOMContentLoaded", function () {
  const nav = document.getElementById("Hamburger");

  nav.addEventListener("click", function () {
    document.body.classList.toggle("overflow-hidden");
  });
});

// ====== toggle menu ======
function toggleHighlight() {
  const element = document.getElementById("slideNavigation");
  element.classList.toggle("slideMenu");
}

// ====== Hero section ======

gsap.registerPlugin(ScrollTrigger);

const frameCount = 300; // Number of frames exported
const canvas = document.getElementById("hero-canvas");
const context = canvas.getContext("2d");
canvas.width = 1920;
canvas.height = 1080;

const images = [];
const currentFrame = (index) =>
  `assets/images/frame_${index.toString().padStart(4, "0")}.jpg`;

let img = new Image();
img.onload = () => context.drawImage(img, 0, 0);
img.src = currentFrame(1);

for (let i = 0; i < frameCount; i++) {
  const image = new Image();
  image.src = currentFrame(i + 1);
  images.push(image);
}

const obj = { frame: 0 };

gsap.to(obj, {
  frame: frameCount - 1,
  snap: "frame",
  ease: "none",
  scrollTrigger: {
    scrub: 1,
    trigger: "#scroll-container",
    start: "top top",
    end: "bottom bottom",
  },
  onUpdate: () => {
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.drawImage(images[obj.frame], 0, 0);
  },
});

// Animate Why Choose Us Section
// Set initial state
gsap.utils.toArray(".choose-card").forEach((card, i, all) => {
  ScrollTrigger.create({
    trigger: card,
    start: "bottom bottom",
    end: "top center",
    scrub: true,
    pin: false,
    pinSpacing: false,
    animation: gsap.fromTo(
      card,
      {
        opacity: 0,
        y: 0,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
      }
    ),
  });
});

// ===== Why choose ======
// gsap.utils.toArray(".choose-card").forEach((card, i) => {
//   gsap.from(card, {
//     opacity: 0,
//     y: 40,
//     duration: 0.8,
//     delay: i * 0.2,
//     scrollTrigger: {
//       trigger: card,
//       start: "top 85%",
//     },
//   });
// });

// ===== How it works ======
// gsap.registerPlugin(ScrollTrigger);

// Heading animation
// gsap.from(".how-section-header > *", {
//   opacity: 0,
//   y: 30,
//   duration: 1,
//   stagger: 0.2,
//   ease: "power2.out",
//   scrollTrigger: {
//     trigger: ".how-section-header",
//     start: "top 85%",
//   },
// });

// Card animation
// gsap.registerPlugin(ScrollTrigger);

// Animate section heading
// gsap.from(".timeline-header > *", {
//   opacity: 0,
//   y: 30,
//   duration: 1,
//   stagger: 0.2,
//   scrollTrigger: {
//     trigger: ".timeline-header",
//     start: "top 80%",
//   },
// });

// gsap.utils.toArray(".timeline-step").forEach((step, i) => {
//   gsap.from(step, {
//     opacity: 0,
//     x: i % 2 === 0 ? -50 : 50,
//     duration: 1,
//     ease: "power2.out",
//     scrollTrigger: {
//       trigger: step,
//       start: "top 85%",
//     },
//   });
// });

// ===== use cases ======
// gsap.registerPlugin(ScrollTrigger);

// gsap.utils.toArray(".capability-row").forEach((row, i) => {
//   const text = row.querySelector("h3");
//   const paragraph = row.querySelector("p");
//   const image = row.querySelector(".capability-image");

//   const tl = gsap.timeline({
//     scrollTrigger: {
//       trigger: row,
//       start: "top 85%",
//     },
//   });

//   tl.from(text, {
//     opacity: 0,
//     x: -40,
//     duration: 0.8,
//   })
//     .from(
//       paragraph,
//       {
//         opacity: 0,
//         x: -20,
//         duration: 0.8,
//       },
//       "-=0.6"
//     )
//     .from(
//       image,
//       {
//         opacity: 0,
//         scale: 0.9,
//         duration: 1.1,
//         ease: "power2.out",
//       },
//       "-=0.8"
//     );
// });
