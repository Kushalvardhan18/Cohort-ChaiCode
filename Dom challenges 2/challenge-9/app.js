const toggleBtn = document.querySelector(".toggle-btn")
const panel = document.querySelector(".panel")
const panelButtons = document.querySelectorAll(".panel .menu-item")
const closeBtn = document.querySelector(".close-btn")

// togge button functionality
toggleBtn.addEventListener('click',(event)=>{
    panel.classList.toggle('active')
    event.stopPropagation()
})

// panel buttons access and functionality
panelButtons.forEach((button)=>{
    console.log(button);
    button.addEventListener('click',()=>{
        alert(`${button.innerText} Button is Clicked`)
        panel.classList.toggle('active')
    })   
})

// close btn functionality
closeBtn.addEventListener("click",()=>{
    panel.classList.remove('active')
})

// If Panel is active and anywhere in document is clicked then it will close
document.addEventListener("click", (event) => {
    if (panel.classList.contains("active")) {
        panel.classList.remove("active");
    }
});
