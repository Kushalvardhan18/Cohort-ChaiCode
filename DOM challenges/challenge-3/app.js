const nameDisplay = document.querySelector('#nameDisplay')
const jobDisplay = document.querySelector('#jobDisplay')
const ageDisplay = document.querySelector('#ageDisplay')
const BioDisplay = document.querySelector('#bioDisplay')

const name = document.querySelector('#nameInput')
const job = document.querySelector('#jobInput')
const age = document.querySelector('#ageInput')
const Bio = document.querySelector('#bioInput')

function userInputs(input,output){
    input.addEventListener('input',(e)=>{
        output.textContent= e.target.value
    })
}

userInputs(name,nameDisplay)
userInputs(job,jobDisplay)
userInputs(age,ageDisplay)
userInputs(Bio,BioDisplay)