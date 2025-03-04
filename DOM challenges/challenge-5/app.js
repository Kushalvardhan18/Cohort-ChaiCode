/**
 * Write your challenge solution here
 */
// Image data
const images = [
  {
    url: 'https://plus.unsplash.com/premium_photo-1666863909125-3a01f038e71f?q=80&w=1986&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    caption: 'Beautiful Mountain Landscape',
  },
  {
    url: 'https://plus.unsplash.com/premium_photo-1690576837108-3c8343a1fc83?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    caption: 'Ocean Sunset View',
  },
  {
    url: 'https://images.unsplash.com/photo-1473448912268-2022ce9509d8?q=80&w=2041&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    caption: 'Autumn Forest Path',
  },
  {
    url: 'https://plus.unsplash.com/premium_photo-1680466057202-4aa3c6329758?q=80&w=2138&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    caption: 'Urban City Skyline',
  },
  {
    url: "https://images.pexels.com/photos/1766838/pexels-photo-1766838.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    caption: "Beautiful River"
  }, {
    url: "https://images.pexels.com/photos/1519088/pexels-photo-1519088.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    caption: "CityLights"
  },
  {
    url: "https://images.pexels.com/photos/954599/pexels-photo-954599.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    caption: "Hello there"
  }
];
//taking length of array
let n = images.length - 1
let interValid = null
let timerValid = null
let countDown = 5
// intialization of counter 
let count = 0

//Next button
const nextBtn = document.querySelector("#nextButton")
//prev button
const prevBtn = document.querySelector("#prevButton")
const carouselCard = document.querySelector('.carousel-track')
const carouselCardCaption = document.querySelector('#caption')
const carouselImages = document.createElement('img')
const carouselCaption = document.createElement('h4')
// navigators
const navigators = document.querySelector('#carouselNav')
// autoplay button
const timer = document.querySelector('#timerDisplay')
const autoplayBtn = document.querySelector('#autoPlayButton')

autoplayBtn.addEventListener('click', () => {
  updateImage(count);
  startCountdown();
  if (!interValid) {
    autoplayBtn.innerText = "Stop Auto Play"

    interValid = setInterval(() => {
      count === n ? count = 0 : count++
      updateImage(count)
      console.log(count)
      startCountdown();


    }, 5000)
  }
  else {
    clearInterval(interValid)
    interValid = null
    if (timerValid) {
      clearTimeout(timerValid); // Clear the countdown timer
      timerValid = null;
    }
    timer.innerText = "";
    autoplayBtn.innerText = " Start Auto Play"
  }
  // count = count + 1
})

//  const stopAutoPlay =() =>{
//   if(interValid){
//     clearInterval(interValid);
//     interValid= null
//   }
// }
carouselImages.classList.add("carousel-images")
carouselImages.src = images[count].url
carouselCaption.textContent = images[count].caption
carouselCard.appendChild(carouselImages)
carouselCardCaption.appendChild(carouselCaption)

// Indicators
for (let i = 0; i < n + 1; i++) {
  const navIndicator = document.createElement('div')
  navIndicator.classList.add("carousel-indicator")
  // navIndicator.setAttribute("id",`#carousel-indicator${i}`)

  navIndicator.addEventListener('click', () => {
    count = i
    console.log(i);
    updateImage(count)
  })
  navigators.appendChild(navIndicator)
  // console.log(navIndicator);
}
const indicators = document.querySelectorAll('.carousel-indicator');
indicators[count].classList.add('active')
// const navImages = document.querySelector("#carousel-indicator0")
// navigators.addEventListener('click',(e)=>{
//   count =1
//   updateImage(count )
//   // e.target.value = images[1].url
//   // console.log(e.target.value);

// })

// updation 
function updateImage(count) {
  carouselImages.src = images[count].url
  carouselCaption.textContent = images[count].caption
  indicators.forEach((indicator) => indicator.classList.remove('active'))

  indicators[count].classList.add('active')

}

function startCountdown() {
  // Countdown Display
  countDown = 5;
  timer.innerText = `Next slide in ${countDown} seconds`;

  if (timerValid) clearInterval(timerValid);
  timerValid = setInterval(() => {
    countDown--;
    timer.innerText = `next slide in ${countDown} seconds`
    if (countDown <= 0) {
      clearInterval(timerValid)
    }
  }, 1000)
}
nextBtn.addEventListener('click', () => {
  count === n ? count = 0 : count++;
  // count = count+1;
  updateImage(count)

})

//Previous button
prevBtn.addEventListener('click', () => {
  count === 0 ? count = n : count--
  // count = count-1;
  updateImage(count)

})



