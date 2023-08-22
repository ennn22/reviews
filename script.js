const rating = document.querySelector('.avg-rating-number')

let count = 0;
console.log(rating);

setInterval(() => {
  if (count < 4.5) {
    count = count + 0.2;
    rating.innerHTML = count.toFixed(1)
  }
}, 30)

const ratingBarProgress = document.querySelectorAll('.rating-bar-progress');

for(let ratingBar of ratingBarProgress) {
  ratingBar.animate([
    { width: "0%" },
    { width: ratingBar.getAttribute('width') },
  ], {
    duration: 500,
    iterations: 1,
  });
  ratingBar.style.width = ratingBar.getAttribute('width')

}

