console.log(localStorage);

//----Variables pour afficher les infos de confirmation de commande
const displayOrderId = document.querySelector('#order_id');
const displayOrderPrice = document.querySelector('#order_totalPrice');

const idToShow = localStorage.order_id; 
console.log(idToShow);
const priceToShow = localStorage.order_price; 
console.log(priceToShow); 

displayOrderId.innerHTML = `<strong>${idToShow}</strong>`;
displayOrderPrice.innerHTML = `<strong>${priceToShow}</strong>`;
