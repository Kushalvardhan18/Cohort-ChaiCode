// clock.addEventListener()

function time(){
    function addZero(i){
        if(i<10){
            i = "0"+i
            return i
        }
         return i
    }
const clock = document.querySelector('.digital-clock')

    const date = new Date()
    let Hour =addZero(date.getHours()%12 || 12)
    let  minutes =addZero(date.getMinutes())
    // let Seconds =addZero(date.getSeconds())
    let Seconds =date.getSeconds().toString().padStart(2,"0")
    const ampm = date.getHours() <=12 ?"AM":"PM"

    clock.innerText = `${Hour}: ${minutes}: ${Seconds} ${ampm}`

    // console.log(date)
}

setInterval(time,1000)
time()