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
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const video = document.getElementById("scrollVideo");
const duration = 300; // number of video frames to scroll through

ScrollTrigger.create({
  trigger: "section",
  start: "top top",
  end: "bottom bottom",
  scrub: true,
  onUpdate: (self) => {
    const scrollFraction = self.progress;
    video.currentTime = scrollFraction * video.duration;
  },
});
