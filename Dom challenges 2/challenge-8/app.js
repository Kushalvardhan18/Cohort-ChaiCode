// let count =0
// const cart = document.querySelector("#cart-items")
// const emptyCart = document.querySelector(".empty-cart")
// const cartItem = document.createElement('div')
// const qualityControl = document.createElement('div')


// // const removeButton = document.createElement('button')
// function addToCart(itemName, price,image) {
//    count++;
//     qualityControl.classList.add("quantity-controls")
//     cartItem.classList.add('cart-item')
//     cartItem.appendChild(qualityControl)
//     // cartItem.appendChild(removeButton)
//     cartItem.append(itemName)
//     cartItem.append(price)
//     cart.appendChild(cartItem)
//     cart.removeChild(emptyCart)


//     const quantityIncBtn = document.createElement('button')
//     quantityIncBtn.innerText = "+"
//     quantityIncBtn.addEventListener('click',()=>{
//         count = count+1
//         updateCount(count)
//     })

//     const quantityDecBtn = document.createElement('button')
//     quantityDecBtn.innerText = "-"
//     quantityDecBtn.addEventListener('click',()=>{
//         count > 0 ?count =count-1 : cart.removeChild(cartItem)
//         updateCount(count)

//     })
//     const removeBtn = document.createElement('button')
//     removeBtn.innerText = "remove"
//     const itemImage = document.createElement('img')
//     qualityControl.appendChild(quantityIncBtn)
//     qualityControl.appendChild(itemImage)
//     qualityControl.appendChild(quantityDecBtn)
//     qualityControl.appendChild(removeBtn)
// }


// const products = document.querySelector('.products')
// const product =products.querySelectorAll('.product img')

// console.log(product);

// // product.forEach((input)=>{
// //     console.log(input);
// //     // console.log(img.src);



// // })
const cart = document.querySelector("#cart-items")
const products = document.querySelectorAll(".product")
const cartItem = document.createElement('div')
const qualityControl = document.createElement('div')

function addToCart(itemName, price, image) {
let itemImage = document.createElement('img')

    products.forEach((product) => {
        const productName = product.querySelector("h3").innerText
        if (productName === itemName) {
           itemImage.src = product.querySelector("img").src
            console.log(itemImage);
        }
    })
    cart.appendChild(cartItem)
    cartItem.classList.add('cart-item')
    cartItem.appendChild(qualityControl)
    cartItem.append(itemName)
    cartItem.append(price)
    qualityControl.classList.add("quantity-controls")
    qualityControl.appendChild(itemImage)
}