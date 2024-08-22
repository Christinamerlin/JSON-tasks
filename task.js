fetch("https://fakestoreapi.com/products")
.then(response=>response.json())
.then(data=>{
    const jpdt=data.filter(pdt=>pdt.category==="jewelery");
    jpdt.sort((a,b)=>b.price-a.price);
    

    const pdtlist=document.getElementById("pdtlist");
    jpdt.forEach(pdt=>{
        const pdtdiv=document.createElement("div");
        pdtdiv.style.width='50%';
        pdtdiv.style.height='500px';
        pdtdiv.style.float='left';
        pdtdiv.innerHTML=
        "<h3> ID: "+pdt.id+"</h3>"+
        "<p> <b>Title:</b> "+pdt.title+"</p>"+"<p> <b>Price:</b> "+pdt.price+"</p>"+"<p>"+pdt.description+"</p>"
        +"<p><b>Category:</b> "+pdt.category+"</p>"+'<img src="'+pdt.image+'"width="100">'+"</img>"+"<p> <b>Rating: </b>"+pdt.rating.rate+"</p>";
    
    pdtlist.appendChild(pdtdiv);
    });
})





























// fetch("https://fakestoreapi.com/products")
// .then(response=>response.json())
// .then(data=>{
//     const jpdt=data.filter(pdt=>pdt.category=="jewelery");
//     jpdt.sort((a,b)=>b.price-a.price);
//     console.log(jpdt);
// })
// .catch(error=>console.log("Error",error));
