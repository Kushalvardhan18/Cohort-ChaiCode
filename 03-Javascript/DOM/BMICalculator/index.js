const height =document.querySelector('.height')
const weight =document.querySelector('.weight')

let result = ''

const calculate = document.querySelector('#calculate')
calculate.addEventListener('click',()=>{
    let heightVal = height.value
    let weightVal = weight.value
    resultFn(weightVal,heightVal)  
})
function resultFn(weight,height){
    result = (weight)/((height*height)/10000)
    console.log(result)
    return value(result)
}
function value(result){
   const resultVal= document.querySelector('.result')
   resultVal.innerText = `The BMI is :${result.toFixed(2)}`
    
    resultVal.style.color = 'red'

}