let salesData = [
    { product: "Laptop", price: 1200 },
    { product: "Smarthone", price: 800 },
    { product: "Headphone", price: 120 },
    { product: "Keyboard", price: 10 },
]

let initialValue = 0
let totalSales = salesData.reduce((acc ,sale) => (acc + sale.price), initialValue)
console.log(totalSales);
