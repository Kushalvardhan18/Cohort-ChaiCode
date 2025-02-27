let count =0
function addToCart(itemName, price) {
    // if(cart.contains(cartItem.it)){
    //     quantityInc()
    // }
    const products = document.querySelectorAll(".product")
    const cart = document.querySelector("#cart-items")
    const emptyCart = document.querySelector(".empty-cart")

    // created a div for adding the items details and class is added for easy selections. 
    const cartItem = document.createElement('div')
    cartItem.classList.add('cart-item')

    // created a div for adding the items details and class is added for easy selections. 
    const qualityControl = document.createElement('div')
    qualityControl.classList.add("quantity-controls")

    // Craeted a Image tag for the logo image and selecting src  of image for the logo display
    let itemImage = document.createElement('img')
    itemImage.style.width = "50px"
    // Src of the Image for the logo
    products.forEach((product) => {
        const productName = product.querySelector("h3").innerText
        if (productName === itemName) {
            itemImage.src = product.querySelector("img").src
            // console.log(itemImage);
        }
    })


    const quantityIncBtn = document.createElement('button')
    quantityIncBtn.innerText = "+"
    quantityIncBtn.addEventListener('click', () => {
        console.log(count);
        
       quantityInc(count)
    })

    const quantityDecBtn = document.createElement('button')
    quantityDecBtn.innerText = "-"
    quantityDecBtn.addEventListener('click', () => {
        count > 0 ? count = count - 1 : cart.removeChild(cartItem)
        // updateCount(count)

    })
    const removeBtn = document.createElement('button')
    removeBtn.innerText = "remove"
    removeBtn.addEventListener('click',()=>{
        cart.removeChild(cartItem)
    })
    cart.appendChild(cartItem)
    cartItem.appendChild(qualityControl)
    cartItem.append(itemName)
    cartItem.append(price)
    qualityControl.appendChild(quantityIncBtn)
    qualityControl.appendChild(itemImage)
    qualityControl.appendChild(quantityDecBtn)
    qualityControl.appendChild(removeBtn)
    cart.removeChild(emptyCart)

}

function quantityInc(){
    count = count + 1
    // updateCount(count)
}