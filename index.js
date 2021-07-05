//récupération des données de l'API
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
          <a href="products.html">
          <img src="${cameras.imageUrl}" alt="${cameras.name}"/>
          <h3>${cameras.name}</h3>
          <p><strong>${cameras.price / 100}€</strong></p>
          </a>
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

//Selection du produit et renvoi sur la page produit
const clickOnProduct = () => {

}
