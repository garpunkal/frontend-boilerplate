export default function animateOut(
  element: HTMLElement,
  animateClass: string, // This should reference a CSS class in _src/scss/utilities/_js-animations.scss
  animationDuration: number
) {
  element.style.animationDuration = `${animationDuration}ms`;
  element.classList.add(animateClass);

  setTimeout(() => {
    element.style.display = "none";
    element.style.animationDuration = "";
    element.classList.remove(animateClass);
  }, animationDuration + 100);
}