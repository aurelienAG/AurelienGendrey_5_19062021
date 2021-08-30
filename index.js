
//récupération des données de l'API + affichage des produits
function fetchData() {
    fetch('http://localhost:3000/api/cameras')
        .then(response => {
            if (!response.ok) {
                throw Error("ERROR");
            }
            return response.json();
        })
        .then(data => {
            console.log(data);
            const html = data.map(cameras => {
                return `
          <div class="cameras">
          <img src="${cameras.imageUrl}" alt="${cameras.name}"/>
          <h3 class="camerasNames">${cameras.name}</h3>
          <p class="indexPrices"><strong>${cameras.price / 100}€</strong></p> 
          <a class="btn btn-secondary product_link" href="products.html?+=${cameras._id}">voir le produit</a>
          </div>
          `;
            })
                .join("");
            console.log(html);
            document.querySelector('#allProducts').insertAdjacentHTML('afterbegin', html);
        })
        .catch(error => {
            console.log(error);
        });
}

fetchData();

