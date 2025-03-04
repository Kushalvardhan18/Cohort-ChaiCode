const main = document.querySelector(".main")
const dropDown = document.querySelector("#dropDown")

    dropDown.addEventListener('change',(e)=>{
    //    const colorChange = e.target.value
    const btn = document.createElement("button")
    
       main.style.backgroundColor = e.target.value
       btn.innerText = e.target.value
       main.append(btn)
    }
    )
 