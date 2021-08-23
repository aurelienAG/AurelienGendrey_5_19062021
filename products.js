//-----Variables qui gérent l'url du produit choisi pour l'afficher dynamiquement
const id = window.location.search.substring(3);
console.log(id);
const productUrl = `http://localhost:3000/api/cameras/${id}`;

//----Variables pour implémenter les données dans le HTML 
const displayProductImage = document.querySelector('#productImg');
const displayProductName = document.querySelector('#product_Name');
const displayProductDescription = document.querySelector('#product_Description');
const displayProductPrice = document.querySelector('#product_Price');
const displayProductLenses = document.querySelector('#form-control');
const displayQuantity = document.querySelector('#product_quantity');

//---Récupération des infos du produit choisi auprès de l'api
fetch(productUrl)
  .then((response) => {
    console.log(response);
    const productData = response.json();
    console.log(productData);

    productData.then((product) => {
      console.log(product);
      //-----Variables à utiliser pour l'affichage du produit      
      const productImage = product.imageUrl;
      const productName = product.name;
      const productDescription = product.description;
      let productPrice = parseInt(product.price / 100);
      console.log(productPrice);
      const productLenses = product.lenses; 
      
      //----- Affichage du produit
      displayProductPrice.innerHTML = `<strong>${productPrice},00€</strong>`;
      displayProductImage.innerHTML = `<img src=${productImage}>`;
      displayProductName.innerHTML = productName;
      displayProductDescription.innerHTML = productDescription;
      displayProductLenses.innerHTML =
        `<option>${productLenses[0]}</option>
      <option>${productLenses[1]}</option>
      <option>${productLenses[2]}</option>
      `;
      displayQuantity.innerHTML =
        `
        <a class="btn-decrease" id="btn-decrease"><i class="fas fa-minus-circle"></i></a>
        <span class="quantityClicked" id="quantity">${1}</span>
        <a class="btn-increase"><i class="fas fa-plus-circle"></i></a>
      `
      //-----------Gestion des quantités et modification du prix
  let buttonIncrease = document.querySelector(".btn-increase"); 
  let buttonDecrease = document.querySelector(".btn-decrease");
  let quantity = document.querySelector(".quantityClicked").innerText;
 let quantityParsed = parseInt(quantity);
 let finalPriceProduct = document.getElementById('product_Price').innerText;
 let finalProductPriceParsed = parseInt(finalPriceProduct); 
buttonIncrease.addEventListener("click",(event)=>{
  event.preventDefault(); 
  document.querySelector("#quantity").innerText = quantityParsed += 1; 
  document.querySelector("#product_Price").innerHTML =`<strong>${quantityParsed* finalProductPriceParsed},00€</strong>`  ;
})
buttonDecrease.addEventListener("click",(event)=>{
  event.preventDefault(); 
  document.querySelector("#quantity").innerText = quantityParsed -= 1; 
  document.querySelector("#product_Price").innerHTML =`<strong>${quantityParsed* finalProductPriceParsed},00€</strong>`  ;
})
    });
   
  })
  .catch((err) => console.log(err)
  )
  
//-----------------------Local Storage------------ 
//---------------Stocker la récupération des valeurs du produit dans le Local Storage------------ 

let productBtn = document.querySelector("#addToCart");
console.log(productBtn);
productBtn.addEventListener("click", (event) => {
  event.preventDefault();
  const idForm = document.querySelector("#form-control");
  const formChoice = idForm.value;
  let priceToSend = document.querySelector("#product_Price").innerText; 
  console.log(priceToSend); 
  let convertedPrice = parseInt(priceToSend); 
console.log(convertedPrice);
  let productSelected = {
    id: id,
    name: document.querySelector("#product_Name").innerText,
    option: formChoice,
    quantity: document.querySelector("#quantity").innerText,
    price: convertedPrice
  };

  //-------Le local storage------- 
  //-----Stocker la récupération des valeurs du produit 

  //Déclaration de la variable "savedInLocalStorage" 
  let savedInLocalStorage = JSON.parse(localStorage.getItem("productAdded"));
  //JSON.parse pour convertir les données JSON du local storage en objet javascript
  console.log(savedInLocalStorage);

  //Fonction fenêtre pop-up 
  const popUpAdded = () => {
    if (window.confirm(`Votre produit a bien été ajouté au panier!
Cliquez sur OK pour voir votre panier`)) {
      window.location.href = "cart.html";
    } else {
      window.location.href = window.location;
    }
  }
  //si il y a déjà des produits dans le local storage 
  if (savedInLocalStorage) {
    savedInLocalStorage.push(productSelected);
    localStorage.setItem("productAdded", JSON.stringify(savedInLocalStorage));
    console.log(savedInLocalStorage);
    popUpAdded();
  }

  //si il n'y a pas de produits dans le local storage
  else {
    savedInLocalStorage = [];
    savedInLocalStorage.push(productSelected);
    localStorage.setItem("productAdded", JSON.stringify(savedInLocalStorage));
    console.log(savedInLocalStorage);
  }

});




