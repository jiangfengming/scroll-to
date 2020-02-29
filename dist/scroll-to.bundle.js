function createTransition(animate, duration, easing) {
  return new Promise(function (resolve) {
    var start;

    function step(now) {
      if (!start) start = now;
      var t = (now - start) / duration;
      if (t > 1) t = 1;
      animate(easing ? easing(t) : t);
      if (t < 1) requestAnimationFrame(step);else resolve();
    }

    requestAnimationFrame(step);
  });
}

var easeIn = function easeIn(p) {
  return function (t) {
    return Math.pow(t, p);
  };
};

var easeOut = function easeOut(p) {
  return function (t) {
    return 1 - Math.abs(Math.pow(t - 1, p));
  };
};

var easeInOut = function easeInOut(p) {
  return function (t) {
    return t < 0.5 ? easeIn(p)(t * 2) / 2 : easeOut(p)(t * 2 - 1) / 2 + 0.5;
  };
};

var easeInOutQuad = easeInOut(2); // accelerating from zero velocity

function scrollToElement(el, offset) {
  if (offset === void 0) {
    offset = 0;
  }

  var y = window.scrollY;
  var d = el.getBoundingClientRect().top - offset;
  createTransition(function (t) {
    return window.scrollTo(0, y + t * d);
  }, 300, easeInOutQuad);
}
function scrollToTop() {
  var y = window.scrollY;
  createTransition(function (t) {
    return window.scrollTo(0, y - t * y);
  }, 300, easeInOutQuad);
}
function scrollToBottom() {
  var y = window.scrollY;
  var d = document.documentElement.scrollHeight - window.innerHeight - window.scrollY;
  createTransition(function (t) {
    return window.scrollTo(0, y + t * d);
  }, 300, easeInOutQuad);
}

export { scrollToBottom, scrollToElement, scrollToTop };
