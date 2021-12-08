import { products } from "./product.js";

//Select div products List
const divProducts = document.querySelector('#products');
divProducts.setAttribute("class", "container row justify-content-center mx-auto");


//Array for extract data from Product-list
for (let i = 0; i < products.length; i++) {
    //Create div and set id for each item
    const ProductEle = document.createElement("div");
    ProductEle.setAttribute('id', products[i].id);
    ProductEle.setAttribute("class", "m-2 container col-xs-12 col-md-6 col-lg-6 col-xl-3 card rounded-0 bg-light border-light");
    ProductEle.setAttribute("style", "margin-bottom: 10px; text-align: center; ")

    const card = document.createElement("div");
    card.setAttribute("class", "card-body");

    const pProductImg = document.createElement("img");
    pProductImg.setAttribute("src", products[i].img);
    pProductImg.setAttribute("height", 200);

    //Create tag p and set text content (ID)
    const pProductId = document.createElement('p');
    pProductId.textContent = ` ID : ${products[i].id}`;

    //Create tag p and set text content (Name)
    const pProductName = document.createElement('p');
    pProductName.textContent = ` Name : ${products[i].name}`;

    //Create tag p and set text content (Price)
    const pProductPrice = document.createElement('p');
    pProductPrice.textContent = ` Price : ${products[i].price}` + ' Baht ';

    //Create tag p and set text content (Stock)
    const pProductStock = document.createElement('p');
    pProductStock.textContent = ` Stock : ${products[i].stock}`;

    const pProductButtom = document.createElement('buttom');
    pProductButtom.setAttribute("type", "button");
    pProductButtom.setAttribute("class", " btn btn-outline-dark rounded-0");

    pProductButtom.setAttribute("onclick", "addAlert()");
    pProductButtom.textContent = "Add Now";

    //AppendChild to ProductEle
    card.appendChild(pProductImg);
    card.appendChild(pProductId);
    card.appendChild(pProductName);
    card.appendChild(pProductPrice);
    card.appendChild(pProductStock);
    card.appendChild(pProductButtom);

    //AppendChild to divProducts
    ProductEle.appendChild(card);
    divProducts.appendChild(ProductEle);




}