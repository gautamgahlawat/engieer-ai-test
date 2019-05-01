// $(document).ready(function() {

// });

var timer;
var lastScrollTop = 0;
var lastSectionTop = 0;

window.addEventListener(
  "wheel",
  function() {
    console.log("cjewb");
    // or window.addEventListener("scroll"....
    if (timer) {
      window.clearTimeout(timer);
    }

    timer = window.setTimeout(function() {
      var st = window.pageYOffset || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
      if (st > lastScrollTop) {
        // downscroll code
        window.scroll({
          top: lastSectionTop + window.innerHeight,
          left: 0,
          behavior: "smooth"
        });
        lastSectionTop += window.innerHeight;
      } else {
        // upscroll code
        window.scroll({
          top: lastSectionTop - window.innerHeight,
          left: 0,
          behavior: "smooth"
        });
        lastSectionTop -= window.innerHeight;
      }
      lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
    }, 100);
  },
  false
);
