const height =document.querySelector('.height')
const weight =document.querySelector('.weight')

let result = ''

const calculate = document.querySelector('#calculate')
calculate.addEventListener('click',()=>{
    result = (weight.value)/((height.value*height.value)/10000)
    console.log(result)
    return value(result.toFixed(2))
    
})

function value(result){
    document.querySelector('.result').innerText += result
    const bmi = result
    bmi.style.color = 'red'

}``