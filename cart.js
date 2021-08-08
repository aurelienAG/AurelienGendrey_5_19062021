//Déclaration de la variable "savedInLocalStorage" 
let savedInLocalStorage = JSON.parse(localStorage.getItem("productAdded"));
//JSON.parse pour convertir les données JSON du local storage en objet javascript
console.log(savedInLocalStorage);

//----affichage des produits----

const cartContained = document.querySelector("#orderResume");
// const optionQuantity = document.getElementsByClassName('quantityProduct');
// console.log(optionQuantity);

//si aucun article dans le panier l'indiquer à l'utilisateur 
if (savedInLocalStorage === null) {
  const emptyCart = `
  <p class="emptyPageText"><strong><em>Votre panier est vide. Rendez-vous sur la page d'accueil pour selectionner vos articles.</em></strong></p>
  `;
  cartContained.innerHTML = emptyCart;
}
//si le panier contient déjà un article 

else {
  let productCartBloc = [];
  for (b = 0; b < savedInLocalStorage.length; b++) {

    productCartBloc = productCartBloc +
      `<table class="table my-3">
      <tbody>
      <tr id="articleChoiced">
      <th scope="row" id="productName">${savedInLocalStorage[b].name}</th>
        <td id="productLenses">${savedInLocalStorage[b].option}</td>
        <td id="productQuantity">
        <form name="fo" id="quantityForm">
        <select name="select" id="quantitySelect">
        <option class="quantityProduct" name="option" value="1">1</option>
        <option class="quantityProduct" name="option" value="2">2</option>
        <option class="quantityProduct" name="option" value="3">3</option>
        <option class="quantityProduct" name="option" value="4">4</option>
        <option class="quantityProduct" name="option" value="5">5</option>
        <option class="quantityProduct" name="option" value="6">6</option>
        <option class="quantityProduct" name="option" value="7">7</option>
        <option class="quantityProduct" name="option" value="8">8</option>
        </select>
        </form></td>
        <td id="productPrice"><strong>${savedInLocalStorage[b].price}</strong></td>
        <td><button class="btn-delete"><i class="fas fa-trash"></i></button></td>
        </tr>
        </tbody>
        </table>
        `
      ;
  }

  if (b === savedInLocalStorage.length) {
    cartContained.innerHTML = productCartBloc;
  }
}
let btn_delete = document.querySelectorAll(".btn-delete");
console.log(btn_delete);

for (let c = 0; c < btn_delete.length; c++) {
  btn_delete[c].addEventListener("click", (event) => {
    event.preventDefault();
    let elementToDelete = savedInLocalStorage[c].productSelected;
    console.log(elementToDelete);
  })
}

//------Gestion du formulaire de contact-------- 
//---variable qui sélectionnent le formulaire

let userForm = document.querySelector('#userDataForm');

//----------------------VALIDATION NOM et PRENOM   

//Ecouter la modification du nom
userForm.lastName.addEventListener('change', function () {
  validLastName(this)
});

const validLastName = function (inputLastName) {
  //-----Création de l'expresion régulière pour la validation du nom
  let lastNameRegExp = new RegExp(
    '^[A-Z]{2,10}$', 'g'
  );

  //Selection de la balise small pour alerter de la validité du champs
  let small = inputLastName.nextElementSibling;

  //----Test de la reg exp
  if (lastNameRegExp.test(inputLastName.value)) {
    small.innerHTML = 'Nom valide';
    small.classList.remove('text-danger')
    small.classList.add('text-success');
  }
  else {
    small.innerHTML = 'Nom non valide';
    small.classList.remove('text-success');
    small.classList.add('text-danger');
  }
};

//Ecouter la modification du prénom
userForm.firstName.addEventListener('change', function () {
  validFirstName(this)
});

const validFirstName = function (inputFirstName) {
  //-----Création de l'expresion régulière pour la validation du nom
  let firstNameRegExp = new RegExp(
    '^[a-zA-Z\é\è\ê\-]{2,10}$', 'g'
  );

  //Selection de la balise small pour alerter de la validité du champs
  let small = inputFirstName.nextElementSibling;

  //----Test de la reg exp
  if (firstNameRegExp.test(inputFirstName.value)) {
    small.innerHTML = 'Prénom valide';
    small.classList.remove('text-danger')
    small.classList.add('text-success');
  }
  else {
    small.innerHTML = 'Prénom non valide';
    small.classList.remove('text-success');
    small.classList.add('text-danger');
  }
};

//---------------------VALIDATION ADRESSE
//Ecouter la modification de l'adresse
userForm.address.addEventListener('change', function () {
  validAddress(this)
});

const validAddress = function (inputAddress) {
  //-----Création de l'expresion régulière pour la validation du nom
  let addressRegExp = new RegExp(
    // '^[1-10]{2-10}+[/s]{1}+[A-Za-z\é\è\ê\s]$', 'g'
    '^[0-9]{2,10}+[a-zA-Z\é\è\ê\-\s]{2,10}$', 'g'
  );

  //Selection de la balise small pour alerter de la validité du champs
  let small = inputAddress.nextElementSibling;

  //----Test de la reg exp
  if (addressRegExp.test(inputAddress.value)) {
    small.innerHTML = 'Adresse valide';
    small.classList.remove('text-danger')
    small.classList.add('text-success');
  }
  else {
    small.innerHTML = 'Adresse non valide';
    small.classList.remove('text-success');
    small.classList.add('text-danger');
  }
};

//---------------------VALIDATION VILLE 
//Ecouter la modification de la ville
userForm.city.addEventListener('change', function () {
  validCity(this)
});

const validCity = function (inputCity) {
  //-----Création de l'expresion régulière pour la validation de la ville
  let cityRegExp = new RegExp(
    // '^[1-10]{2-10}+[/s]{1}+[A-Za-z\é\è\ê\s]$', 'g'
    '^[a-zA-Z\é\è\ê\-]{2,10}$', 'g'
  );

  //Selection de la balise small pour alerter de la validité du champs
  let small = inputCity.nextElementSibling;

  //----Test de la reg exp
  if (cityRegExp.test(inputCity.value)) {
    small.innerHTML = 'Ville valide';
    small.classList.remove('text-danger')
    small.classList.add('text-success');
  }
  else {
    small.innerHTML = 'Ville non valide';
    small.classList.remove('text-success');
    small.classList.add('text-danger');
  }
};

//-------------VALIDATION EMAIL------

//Ecouter la modification de l'email 
userForm.email.addEventListener('change', function () {
  validEmail(this)
});

const validEmail = function (inputEmail) {
  //-----Création de l'expresion régulière pour la validation de l'email
  let emailRegExp = new RegExp(
    '^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$', 'g'
  );

  //Selection de la balise small pour alerter de la validité du champs
  let small = inputEmail.nextElementSibling;

  //----Test de la reg exp
  if (emailRegExp.test(inputEmail.value)) {
    small.innerHTML = 'Adresse valide';
    small.classList.remove('text-danger')
    small.classList.add('text-success');
  }
  else {
    small.innerHTML = 'Adresse non valide';
    small.classList.remove('text-success');
    small.classList.add('text-danger');
  }
};







