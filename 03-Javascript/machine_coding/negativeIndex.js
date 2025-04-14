const user = {
    name: "kushal",
    age: 23,
    password: "123"
}

const proxyUser = new Proxy(user, {
    get(target, prop) {
        console.log(prop);
        if (prop === "password") {
            throw new Error("Access Denied")
        }
        return target[prop]
    },
    // set(target,prop,user){}
})

console.log(proxyUser.name)
console.log(proxyUser.age)
// console.log(proxyUser.password)


let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(arr[2])

function negativeIndex(arr) {
    return new Proxy(arr, {
        get(target, prop) {
            const index = Number(prop)
            if (index < 0) {
                return target[target.length + index]
            }
            return target[index]
        },
        set(target, prop, value) {
            const index = Number(prop)
            if (index < 0) {
                target[target.length + index] = value
            } else {
                target[index] = value
            }
            return true
        }
    })
}

const proxyArr = negativeIndex([...arr])
console.log(proxyArr[-3]);

proxyArr[-2] = 25
console.log(proxyArr[-2]);


console.log(arr);
console.log(proxyArr)

