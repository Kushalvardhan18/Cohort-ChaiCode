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
];
let n = images.length-1
let count = 0

//Next button
const nextBtn = document.querySelector("#nextButton")
const prevBtn = document.querySelector("#prevButton")
const carouselCard = document.querySelector('.carousel-track')
const carouselCardCaption = document.querySelector('#caption')
const carouselImages = document.createElement('img')
const carouselCaption = document.createElement('h4')

carouselImages.classList.add("carousel-images")
carouselImages.src = images[count].url
carouselCaption.textContent = images[count].caption
carouselCard.appendChild(carouselImages)
carouselCardCaption.appendChild(carouselCaption)

nextBtn.addEventListener('click', () => {
  count === n ? count =0 :count++;
  // count = count+1;
  updateImage(count)

})

//Previous button
prevBtn.addEventListener('click', () => {
  count ===0 ?count =n:count--
  // count = count-1;
  updateImage(count)

})


function updateImage(count){
  carouselImages.src = images[count].url
carouselCaption.textContent = images[count].caption

}
