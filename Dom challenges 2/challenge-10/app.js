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
    url: 'https://imgs.search.brave.com/nG1XXrjBGwj_rWKgiJkqEsDlf4PbjUpJ0kzu9eRx4Ag/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/aXN0b2NrcGhvdG8u/Y29tL3Jlc291cmNl/cy9pbWFnZXMvRnJl/ZVBob3Rvcy9GcmVl/LVBob3RvLTc0MHg0/OTItMTc0NDkxNTMz/My5qcGc',
    caption: 'River through forest',
  },
  {
    url: 'https://imgs.search.brave.com/6m3xgQN3DlbdTGDHkHgGvbXk5QyaqyaVM6NfkR1Crj0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA3LzQxLzcxLzkz/LzM2MF9GXzc0MTcx/OTM5NF9DOUJQM1li/aVhTSjdXc3BTREx0/S2RZeFpLS1dsZjBK/ei5qcGc',
    caption: 'Beautiful birds',
  },
  {
    url: 'https://imgs.search.brave.com/bJOxXkH3P7hXrfNVrSNHyC5WvsEjY-P3a_8qymMQMYc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA4LzM4LzkyLzcw/LzM2MF9GXzgzODky/NzAxNl9PMHJEeU95/VUtLMDVhS0l0a0Nx/WGhYd1hqdTZHM2oz/NS5qcGc',
    caption: 'Bunglow in forest',
  },
  {
    url: 'https://imgs.search.brave.com/yUu30Ph5qfzF2nx0aw2tryoH3Nt3IHgb2NQCAw1UsoQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA5LzQ2LzgyLzU3/LzM2MF9GXzk0Njgy/NTc1Nl9qZGR2Mk5h/cGN0d0JXamxuSWxZ/dGFkVngzeHVPQk4w/Ti5qcGc',
    caption: 'Horses and Sunset',
  },
  {
    url: 'https://imgs.search.brave.com/m-vYUxh13QGKU1aHrC1G-YyC4wMiMK3gvBBSbEwLTUk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/ZXNhd2ViYi5vcmcv/YXJjaGl2ZXMvaW1h/Z2VzL3NjcmVlbi9w/aWxsYXJzb2ZjcmVh/dGlvbl9jb21wb3Np/dGUuanBn',
    caption: 'Galaxy',
  },
  {
    url: 'https://imgs.search.brave.com/f_NqT2Patz9SLLv4w80K5vN1os36jDAKMEYs6zbdcZE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9idXJz/dC5zaG9waWZ5Y2Ru/LmNvbS9waG90b3Mv/Zm9vdHN0ZXBzLWxl/ZnQtaW4tc2FuZC1k/dW5lcy5qcGc_d2lk/dGg9MTAwMCZmb3Jt/YXQ9cGpwZyZleGlm/PTAmaXB0Yz0w',
    caption: 'Footsteps in sand dunes',
  },
  
]
const gameContainer = document.querySelector(".game-container")
const movesPlayed = document.querySelector("#moves")
const playingTime = document.querySelector("#time")
const doubledImages = [...images, ...images]
let flippedImages = []
let matchedImages = []
let moves = 0
let time = 0

function imagesShuffle(images) {
  for (let i = images.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    const temp = images[i];
    images[i] = images[j];
    images[j] = temp;
  }
  return images
}
imagesShuffle(doubledImages)

doubledImages.forEach((image) => {
  const card = document.createElement('div')
  card.classList.add("card")

  const frontSide = document.createElement('div')
  frontSide.classList.add("card-front")

  const backSide = document.createElement('img')
  backSide.src = image.url
  backSide.classList.add("card-back")

  card.dataset.image = image.url
  card.addEventListener('click', () => {

    if (flippedImages.length < 2 && !flippedImages.includes(card) && !matchedImages.includes(card)
    ) {
      card.classList.toggle("flipped")
      flippedImages.push(card)
      if (flippedImages.length === 2) {
        moves++;

        movesPlayed.innerText = moves
        setTimeout(checkMatch, 500)
      }
    }
  })

  card.append(frontSide)
  card.append(backSide)
  gameContainer.append(card)
})

function checkMatch() {
  const card1 = flippedImages[0]
  const card2 = flippedImages[1]

  if (card1.dataset.image === card2.dataset.image) {
    matchedImages.push(card1, card2)
    if (matchedImages.length === doubledImages.length) {
      alert("Congratulation You have won the game ")
    }
  }
  else {
    card1.classList.remove("flipped")
    card2.classList.remove("flipped")
  }
  flippedImages = []
}


function restartGame() {
  location.reload()
}



