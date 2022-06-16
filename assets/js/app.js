const prixArticle = document.querySelector("#nbrArticle");
const btnPrixArticle = document.querySelector("#btnNbrArticle");
const numArticle = document.querySelector("#numArticle");
const btnMonnaieClient = document.querySelector('#btnMonnaieClient');
const champSomme = document.querySelector("#somme");
const totalMonnaieRendu = document.querySelector('#totalMonnaieRendu');
const listAchat = [];
// toujours initialiser une variable en JS
let rendu = 0;
let somme = 0;

// ajout d'un ecouteur d'evenement sur un bouton afin d'ajouter un prix d'un article
btnPrixArticle.addEventListener("click", valeurArticle);

// fonction afin d'ajouter ke prix de plusieurs article dans un tableau et fini pas calculer la somme de ce tableau
function valeurArticle() {
  listAchat.push(Math.abs(prixArticle.value));
  document.querySelector("#compteRendu").textContent = listAchat;

    somme = 0;

  for (let i = 0; i < listAchat.length; i++) {
    somme += parseInt(listAchat[i]);
  }
champSomme.textContent = somme;  
}
// empeche l'ecriture de valeurs negative dans le champ de saisie


// ajout d'un ecouteur d'evenement sur un bouton afin d'ajouter la monnaie du client 
btnMonnaieClient.addEventListener("click", choixClient)

// 
function choixClient() {
  
    monnaieClient = Math.abs(document.querySelector("#monnaieClient").value);
    
    totalMonnaieRendu.textContent = monnaieClient - somme;
    rendu= monnaieClient - somme;
    espece()
}

function espece(){
  // initialisation des variable
  let nbrBillet10 = 0;
  let nbrBillet5 = 0;
  let nbrPiece1 = 0;

  while (rendu>=10) {
    nbrBillet10 += 1;
    rendu = rendu - 10;
    document.getElementById("10euro").textContent = `${nbrBillet10} billet de 10 `;
  }
  while (rendu>=5) {
    nbrBillet5 += 1;
    rendu = rendu - 5;
    document.getElementById('5euro').textContent = `${nbrBillet5} billet de 5 `;
  }
  while (rendu>0 && rendu<5) {
    nbrPiece1 += 1;
    rendu = rendu - 1;
    document.getElementById('1euro').textContent = `${nbrPiece1} piece de 1 `;
  }
  
}

