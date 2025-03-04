// function is created to make the background color change
function changeBg(body,bulbClr) {
    if(body.style.backgroundColor === 'white') {
        body.style.backgroundColor = 'grey'
        bulbClr.style.backgroundColor = 'yellow'
        body.style.color ='white'
        bulbStatus.innerText = "Status: ON"
        toggle.innerText = "Turn Off"
    }
    else{
        body.style.backgroundColor = 'white'
        bulbClr.style.backgroundColor = '#95a5a6'
        body.style.color ='Black'
        bulbStatus.innerText = "Status: Off"
         toggle.innerText = "Turn On"
    }

}
const body = document.querySelector('#body')
const bulbClr = document.querySelector('#bulb')
const bulbStatus =document.querySelector('.switch-status')
// Initially the body color is given the white style to take a temp value in it 
body.style.backgroundColor = 'white'
const toggle = document.querySelector('#toggleButton')
toggle.addEventListener('click', () => {
    changeBg(body, bulbClr)
})
