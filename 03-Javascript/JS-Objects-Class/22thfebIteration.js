let salesData = [
    { product: "Laptop", price: 1200 },
    { product: "Smarthone", price: 800 },
    { product: "Headphone", price: 120 },
    { product: "Keyboard", price: 10 },
];

let initialValue = 0;
let totalSales = salesData.reduce(
    (acc, sale) => acc + sale.price,
    initialValue
);
console.log(totalSales);

let inventory = [
    { name: "Widget A", stock: 30 },
    { name: "Widget B", stock: 120 },
    { name: "Widget C", stock: 45 },
    { name: "Widget D", stock: 70 },
];

// Output from filter is always an array.
let lowStockItems = inventory.filter((item) => {
    return item.stock < 50;
});
console.log(lowStockItems);


let userActivity = [
    { user: "Alice", activityCount: 45 },
    { user: "Bob", activityCount: 72 },
    { user: "Charlie", activityCount: 33 },
]

let mostAcitveUser = userActivity.reduce((maxUser, user) => user.activityCount > maxUser.activityCount ? user : maxUser)
console.log(mostAcitveUser);

