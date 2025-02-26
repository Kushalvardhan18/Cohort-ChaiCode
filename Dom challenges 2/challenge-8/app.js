function addToCart(itemName, price,image) {
    
    const cart = document.querySelector("#cart-items")
    const emptyCart = document.querySelector(".empty-cart")
    const cartItem = document.createElement('div')
    const qualityControl = document.createElement('div')
    const removeButton = document.createElement('button')
    
    qualityControl.classList.add("quantity-controls")
    cartItem.classList.add('cart-item')
    cartItem.appendChild(qualityControl)
    cartItem.appendChild(removeButton)
    cartItem.append(itemName)
    cartItem.append(price)
    cart.appendChild(cartItem)
    cart.removeChild(emptyCart)


    const quantityIncBtn = document.createElement('button')
    const quantityDecBtn = document.createElement('button')
    const itemImage = document.createElement('img')
    // itemImage.src = newSrc

    qualityControl.appendChild(quantityIncBtn)
    qualityControl.appendChild(itemImage)
    qualityControl.appendChild(quantityDecBtn)
}


