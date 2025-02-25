
const hourHand = document.querySelector('.hand.hour')
const minuteHand = document.querySelector('.hand.minute')
const secondsHand = document.querySelector('.hand.second')
function time() {
    // function addZero(i) {
    //     if (i < 10) {
    //         i = "0" + i
    //         return i
    //     }
    //     return i
    // }
    const clock = document.querySelector('.digital-clock')
    const date = new Date()

    // Digital Clock Working
    // let Hour = addZero(date.getHours() % 12 || 12)
    // let minutes = addZero(date.getMinutes())
    // let Seconds =addZero(date.getSeconds())
    let Hour = (date.getHours() % 12 || 12).toString().padStart(2,"0")
    let minutes = date.getMinutes().toString().padStart(2,"0")
    let Seconds = date.getSeconds().toString().padStart(2, "0")
    const ampm = date.getHours() <= 12 ? "AM" : "PM"

    clock.innerText = `${Hour}: ${minutes}: ${Seconds} ${ampm}`


    // Analog CLock working 
    const hourHandDegree = Hour * 30
    const minutesHandDegree = minutes * 6
    const secondsHandDegree = Seconds * 6
    secondsHand.style.transform = `rotate(${secondsHandDegree}deg)`
    hourHand.style.transform = `rotate(${hourHandDegree}deg)`
    minuteHand.style.transform = `rotate(${minutesHandDegree}deg)`
}

setInterval(time, 1000)
time()