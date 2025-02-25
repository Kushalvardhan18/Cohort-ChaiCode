const accordionItems = document.querySelectorAll('.accordion-item')


accordionItems.forEach((item) => {
    const accordionBtn = item.querySelector('.accordion-button')

    accordionBtn.addEventListener('click', () => {
        const isActive = item.classList.contains('active')
        accordionItems.forEach((e) => e.classList.remove('active'))


        if (!isActive) {
            item.classList.add('active')
        }

    })

})