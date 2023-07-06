
let url = 'https://fakestoreapi.com/products';
let product = document.getElementById('cart');

fetch(url)
    .then(mohit => mohit.json())
    .then((data) => {
        console.log(data);

        data.forEach(element => {
            product.innerHTML += `<div id="one">
            <h2>${element.title}</h2>
            <img src="${element.image}" alt="">
            <p>${element.price}</p>
        </div>`
        });
    })
