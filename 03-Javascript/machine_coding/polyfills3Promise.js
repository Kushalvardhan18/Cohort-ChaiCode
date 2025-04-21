class MyPromise {
    constructor(executorFn) {
        this._state = "pending",
            this._successCallbacks = [],
            this._errorCallbacks = []
        this._finallyCallbacks = []
        executorFn(
            this.resolverFunction.bind(this),
            this.rejectorFunction.bind(this)
        )
    }
    then(cb) {
        this._successCallbacks.push(cb)
        return this
    }

    catch(cb) {
        this._errorCallbacks.push(cb)
        return this

    }
    finally(cb) {
        this._finallyCallbacks.push(cb)
        return this
    }
    resolverFunction(value) {
        this._state = "fulfilled"
        this._successCallbacks.forEach((cb) => cb(value))
        this._finallyCallbacks.forEach((cb) => cb())
    }
    rejectorFunction(err) {
        this._state = "rejected"
        this._errorCallbacks.forEach((cb) => cb(err))
        this._finallyCallbacks.forEach((cb) => cb())
    }
}

function wait(seconds) {
    const p = new MyPromise((resolve, reject) => {
        setTimeout(() => reject("err"), seconds * 1000)
    })
    return p
}

wait(5)
    .then(() => console.log("Promise resolved after 5 seconds"))
    .catch((err) => console.log("Rejected after 5 seconds",err))
.finally(() => console.log("Mei toh har baar chlunga"))