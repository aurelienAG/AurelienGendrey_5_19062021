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
      const productPrice = product.price / 100;
      const productLenses = product.lenses;
      const productQuantity = product.lenses;

      //----- Affichage du produit
      displayProductImage.innerHTML = `<img src=${productImage}>`;
      displayProductName.innerHTML = product.name;
      displayProductDescription.innerHTML = product.description;
      displayProductPrice.innerHTML = `<strong>${product.price / 100}€</strong>`;
      displayProductLenses.innerHTML =
        `<option>${product.lenses[0]}</option>
      <option>${product.lenses[1]}</option>
      <option>${product.lenses[2]}</option>
      `
    });
  })
  .catch((err) => console.log(err)
  );

localStorage.setItem = ('image', 'product.imageUrl');
console.log(localStorage);



