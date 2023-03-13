// on top every re fresh
$(document).ready(function(){
  $('html, body').animate({scrollTop: 0}, 'fast');
  return false;
});


const topBtn = document.querySelector(".top");

window.addEventListener('scroll', function() {
    if (window.scrollY < 450) {
      topBtn.classList.add('hide-arrow');
    } else if (window.scrollY > 380) {
      topBtn.classList.remove('hide-arrow');
    }
  });

$(function() {
  $('.top').click (function() {
    $('html, body').animate({scrollTop: 0}, 'slow');
    return false;
  });
});

  
  
  