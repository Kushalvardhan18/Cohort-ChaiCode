let totalPrice = 0
function addToCart(itemName, price) {
    let count = 1
    const products = document.querySelectorAll(".product")
    const cart = document.querySelector("#cart-items")
    const emptyCart = document.querySelector(".empty-cart")
    const cartTotal = document.querySelector("#cart-total h3 ")
    totalPrice += price
    totalPrice = parseFloat(totalPrice.toFixed(2))
    cartTotal.innerText = `Total:$: ${totalPrice}`
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
    const quantityDisplay = document.createElement("span")
    quantityDisplay.innerText = count

    const quantityIncBtn = document.createElement('button')
    quantityIncBtn.innerText = "+"
    quantityIncBtn.addEventListener('click', () => {
        count = count + 1
        totalPrice += price
        totalPrice = parseFloat(totalPrice.toFixed(2))
        quantityDisplay.innerText = count
        cartTotal.innerText = `Total:$: ${totalPrice}`

    })

    const quantityDecBtn = document.createElement('button')
    quantityDecBtn.innerText = "-"
    quantityDecBtn.addEventListener('click', () => {
        if (count > 1) {
            count = count - 1
            totalPrice -= price
            totalPrice = parseFloat(totalPrice.toFixed(2))
            
            quantityDisplay.innerText = count
            cartTotal.innerText = `Total:$: ${totalPrice}`
        }
        else {
            totalPrice -=price
            totalPrice = parseFloat(totalPrice.toFixed(2))
            cartTotal.innerText = `Total:$: ${totalPrice}`
            cart.removeChild(cartItem)
        }


    })
    const removeBtn = document.createElement('button')
    removeBtn.innerText = "remove"
    removeBtn.addEventListener('click', () => {
        totalPrice -= price * count;
        cartTotal.innerText = `Total: $${totalPrice}`;
        cart.removeChild(cartItem)

    })


    // Append 
    cartItem.append(itemImage)
    cartItem.append(`${itemName} - ${price}`)
    cartItem.appendChild(qualityControl)
    qualityControl.appendChild(quantityIncBtn)
    qualityControl.append(quantityDisplay)
    qualityControl.appendChild(quantityDecBtn)
    qualityControl.appendChild(removeBtn)
    cart.appendChild(cartItem)

    // empty cart is present then remove it
    if (emptyCart) {
        emptyCart.remove()
    }
    
}

