const p1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("foo")
    },2000)
})