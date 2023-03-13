
let sectionTop = $('section.learn').offset().top;

document.addEventListener("DOMContentLoaded", () => {
  let toggleScroll = true;

window.addEventListener('scroll', function() {
    if (window.scrollY >= (sectionTop +100) && toggleScroll === true) {      
        function counter(id, start, end, duration) {
         let obj = document.getElementById(id),
          current = start,
          range = end - start,
          increment = end > start ? 1 : -1,
          step = Math.abs(Math.floor(duration / range)),
          timer = setInterval(() => {
           current += increment;
           obj.textContent = current;
           if (current == end) {
            clearInterval(timer);
           }
          }, step);
        }
        counter("count1", 0, 377, 5000);
        counter("count2", 0, 1204, 10);
        counter("count3", 0, 459, 5000);
        counter("count4", 0, 675, 5000);
        toggleScroll = false;
      }
       });
      });
