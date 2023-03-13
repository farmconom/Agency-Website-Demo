const hamburger = document.querySelector('#hamburger'),
      body = document.querySelector('body'),
      nav = document.querySelector('.navbar');

let toggle = false;

// when X is pressed, everything behind nav will be opacity: 0
hamburger.addEventListener('click', function() {
  if(toggle === false) {
    activeHam();
  } else {
    inactiveHam();
  }
});

// mediaQuery
const mql = window.matchMedia('(min-width: 678px)');

function handleMediaQueryChange(event) {
  if (event.matches && toggle === true) {
    hamburger.click();
  }
}

mql.addListener(handleMediaQueryChange);

// ============================================================
// function for toggle
function activeHam() {
  nav.style.opacity = 1;
  body.style.overflow = 'hidden';

  toggle = true;
}
function inactiveHam() {
  nav.style.opacity = 1;
  body.style.overflow = '';

  toggle = false;
}