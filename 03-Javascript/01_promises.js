fetch('https://api.freeapi.app/api/v1/public/randomproducts')
    .then((res) => {
       return res.json()
    })
    .then((obj) => {
        const products = obj.data.data
        // console.log(products);
        products.forEach((product)=>{
            console.log(product.title)
        })
        // console.log("Response is", obj);
    })
    .catch((err) => {
        console.error("Error:", err);
    })
    .finally(() => {
        console.log("Unity in diversity");

    })