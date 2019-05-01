var timer;
var lastScrollTop = 0;
var lastSectionTop = 0;
let reCalculate = true;
let start = 0;
let end = 0;
let distance = 0;
let direction_top = true;
const threshold = 100;
window.addEventListener(
  "wheel",
  function() {
    if (reCalculate) {
      start = window.scrollY;
      reCalculate = false;
    }

    console.log("start" + start);

    if (timer) {
      window.clearTimeout(timer);
    }

    timer = window.setTimeout(function() {
      console.log("scroll stopped");
      reCalculate = true;
      end = window.scrollY;
      distance = end - start;
      console.log("dist" + distance);
      if (distance < 0) {
        direction_top = true;
      } else direction_top = false;
      distance = Math.abs(distance);
      console.log("abs dist" + distance);
      if (distance < threshold && !direction_top) {
        window.scrollBy({ top: -distance, behavior: "smooth" });
      } else if (distance > threshold && !direction_top) {
        window.scrollBy({
          top: window.innerHeight - distance,
          behavior: "smooth"
        });
      } else if (distance < threshold && direction_top) {
        window.scrollBy({ top: distance, behavior: "smooth" });
      } else if (distance > threshold && direction_top) {
        window.scrollBy({
          top: -(window.innerHeight - distance),
          behavior: "smooth"
        });
      }
    }, 60);
  },
  false
);

$(document).ready(function() {
  $(".first-section .down-arrow").click(function() {
    $("html, body").animate({ scrollTop: 800 }, "slow");
  });
});
