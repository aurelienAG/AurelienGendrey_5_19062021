//Déclaration de la variable "savedInLocalStorage" 
let savedInLocalStorage = JSON.parse(localStorage.getItem("productAdded"));
//JSON.parse pour convertir les données JSON du local storage en objet javascript
console.log(savedInLocalStorage);

//----affichage des produits----

const cartContained = document.querySelector("#orderResume");
console.log(cartContained);

//si aucun article dans le panier l'indiquer à l'utilisateur 
if (savedInLocalStorage === null) {
  const emptyCart = `
  <h1 class="emptyPageText">Votre panier est vide</h1>
  `;
  cartContained.innerHTML = emptyCart;
}
//si le panier contient déjà un article
else {
  let productCartBloc = [];

  for (k = 0; k < savedInLocalStorage.length; k++) {

    productCartBloc = productCartBloc +
      `<span id="productName"><h3>${savedInLocalStorage[k].name}</h3></span>
        <span id="productLenses">${savedInLocalStorage[k].option}</span>
        <span id="productQuantity"><strong>Qté</strong></span>
        <input class="quantity" type="number">
        <option value="number"></option>
        </input>
        <span id="productPrice"><strong>${savedInLocalStorage[k].price}</strong></span>
        `;
  }
  if (k == savedInLocalStorage.length) {
    cartContained.innerHTML = productCartBloc;
  }
}