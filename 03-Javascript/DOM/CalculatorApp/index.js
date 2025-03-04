const input = document.querySelector('#input');
const clear = document.querySelector('.clear');
clear.addEventListener('click',()=>{
    input.value = '';
    console.log("hiii kv");
})
document.querySelector('.backspace').addEventListener('click',()=>{
    input.value = input.value.slice(0,-1);    
})

