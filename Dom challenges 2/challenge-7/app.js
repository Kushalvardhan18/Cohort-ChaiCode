let accordianItems = document.querySelectorAll('.accordion-item')
accordianItems.forEach((item)=>{
  item.addEventListener('click',()=>{
    const isActive = item.classList.contains('active')
    accordianItems.forEach((input)=>input.classList.remove('active'))

    if(!isActive){

        item.classList.add('active')
    }
  })
})