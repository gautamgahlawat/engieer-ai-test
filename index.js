var timer;
let reCalculate = true;
window.addEventListener(
  "wheel",
  function(e) {
    // console.log("run");
    document.body.style.overflow = "hidden";
    if (reCalculate) {
      if (e.deltaY > 0) {
        window.scrollBy({ top: window.innerHeight, behavior: "smooth" });
      } else {
        window.scrollBy({ top: -window.innerHeight, behavior: "smooth" });
      }
      reCalculate = false;
    }

    if (timer) {
      window.clearTimeout(timer);
    }

    timer = window.setTimeout(function() {
      // console.log("scroll stopped");
      reCalculate = true;
      document.body.style.overflow = "scroll";
    }, 60);
  },
  false
);

$(document).ready(function() {
  var firstSectionHeight = $(".first-section").innerHeight();
  $(".first-section .down-arrow").click(function() {
    $("html, body").animate({ scrollTop: firstSectionHeight }, "slow");
  });
});
