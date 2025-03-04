const text = document.querySelector('#mainHeading')
function colorChange(selectedColor) {
    if(selectedColor === 'Reset'){
        text.style.color = 'Black'
    }
    else{
        text.style.color = selectedColor
    }
}
const buttons = document.querySelectorAll('.color-buttons button')
buttons.forEach(function (button) {
    console.log(button);
    button.addEventListener('click', () => {
        const selectedColor = button.innerText
       
        colorChange(selectedColor)
        console.log(selectedColor)
    })
})

