let expenses = [
    { description: "Groceries", amount: 50, category: "Food" },
    { description: "Electricity Bill", amount: 100, category: "Utilities" },
    { description: "Dinner", amount: 30, category: "Food" },
    { description: "Internet Bill", amount: 50, category: "Utilities" }
]

let expenseReport = expenses.reduce((report, expense) => {
    // report[expense.category] += expense.amount
    report[expense.category] = (report[expense.category] || 0) + expense.amount
    return report
    // },{Food:0,Utilities:0})
}, {})
console.log("Expense Report", expenseReport);


let tasks = [
    { description: "Write report", completed: false, priorty: 2 },
    { description: "Send email", completed: true, priorty: 3 },
    { description: "Prepare presentation", completed: false, priorty: 1 },
]

let pendingSortedTasks = tasks
    .filter((task) => !task.completed)
    .sort((a, b) => a.priorty - b.priorty)

console.log(pendingSortedTasks);

let movieRatings = [
    { title: "Movie A", ratings: [4, 5, 3] },
    { title: "Movie B", ratings: [5, 5, 4] },
    { title: "Movie C", ratings: [3, 4, 2] }
]

let avgMovieRating = movieRatings.map((movie) => {
    let total = movie.ratings.reduce((acc, avg) => acc + avg, 0)
    let average = total / movie.ratings.length
    return { title: movie.title, averageRatings: average.toFixed(1) }

})
console.log(avgMovieRating);
