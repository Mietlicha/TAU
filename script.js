const element = document.querySelector('.icon-yr_krolik_1min');
const elementHeight = element.clientHeight;

document.addEventListener('scroll', animate);

function inView() {
  const windowHeight = window.innerHeight;
  const scrollY = window.scrollY || window.pageYOffset;

  const scrollPosition = scrollY + windowHeight;
  const elementPosition =
    element.getBoundingClientRect().top + scrollY + elementHeight;

  if (scrollPosition > elementPosition) {
    return true;
  }

  return false;
}

function animate() {
  if (inView()) {
    element.classList.add('animate');
  }
}
