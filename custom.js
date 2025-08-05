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
