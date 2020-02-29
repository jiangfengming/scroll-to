import { createTransition, easeInOutQuad } from 'create-transition';

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
