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

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Setup ScrollTrigger to use custom scroll container
ScrollTrigger.scrollerProxy("#scroll-container", {
  scrollTop(value) {
    if (arguments.length) {
      document.getElementById("scroll-container").scrollTop = value;
    }
    return document.getElementById("scroll-container").scrollTop;
  },
  getBoundingClientRect() {
    return {
      top: 0,
      left: 0,
      width: window.innerWidth,
      height: window.innerHeight,
    };
  },
  pinType: document.querySelector("#scroll-container").style.transform
    ? "transform"
    : "fixed",
});

// Set ScrollTrigger to use the custom scroller by default
ScrollTrigger.defaults({
  scroller: "#scroll-container",
});

const frameCount = 300;
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
    trigger: "#scroll-inner",
    start: "top top",
    end: "bottom bottom",
  },
  onUpdate: () => {
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.drawImage(images[obj.frame], 0, 0);
  },
});

// Animate .choose-card elements
gsap.utils.toArray(".choose-card").forEach((card) => {
  ScrollTrigger.create({
    trigger: card,
    start: "bottom bottom",
    end: "top center",
    scrub: true,
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

// Final refresh
ScrollTrigger.refresh();
