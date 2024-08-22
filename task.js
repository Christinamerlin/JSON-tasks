fetch("https://fakestoreapi.com/products")
.then(response=>response.json())
.then(data=>{
    const jpdt=data.filter(pdt=>pdt.category==="jewelery");
    jpdt.sort((a,b)=>b.price-a.price);
    console.log(jpdt);
})






























// fetch("https://fakestoreapi.com/products")
// .then(response=>response.json())
// .then(data=>{
//     const jpdt=data.filter(pdt=>pdt.category=="jewelery");
//     jpdt.sort((a,b)=>b.price-a.price);
//     console.log(jpdt);
// })
// .catch(error=>console.log("Error",error));