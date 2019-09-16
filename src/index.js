import { createTransition, easeInOutQuad } from 'create-transition'

export function scrollToElement(el, offset = 0) {
  const y = window.scrollY
  const d = el.getBoundingClientRect().top - offset
  createTransition(t => window.scrollTo(0, y + t * d), 300, easeInOutQuad)
}

export function scrollToTop() {
  const y = window.scrollY
  createTransition(t => window.scrollTo(0, y - t * y), 300, easeInOutQuad)
}

export function scrollToBottom() {
  const y = window.scrollY
  const d = document.documentElement.scrollHeight - window.innerHeight - window.scrollY
  createTransition(t => window.scrollTo(0, y + t * d), 300, easeInOutQuad)
}
