// let dragon = document.getElementById("dragonblanc");
// let roug = document.getElementById("red");
// let exodia = document.getElementById("exodia");
// let allcard = document.getElementsByClassName("carte");
// let divproduit = document.getElementById("afficheproduit");
// let imgprod = document.getElementById("dragonw");
// let celeste = document.getElementById("celeste");
// let cartecel = document.getElementById("cartecel");
// let drag = document.getElementById("drag");
// let cartb = document.getElementById("cartblan");


// roug.addEventListener('click', () => {
// imgprod.getAttribute('src');
// imgprod.setAttribute('src', './static/image/images rouge.jfif');
// document.getElementById("drag").textContent = "dragon celeste";

// });

// exodia.addEventListener('click', () => {
//     imgprod.getAttribute('src');
//     imgprod.setAttribute('src', './static/image/s-l1600.jpg');
//     });

//     dragon.addEventListener('click', () => {
//         imgprod.getAttribute('src');
//         imgprod.setAttribute('src', './static/image/51gCu4PGv4L._AC_SY450_.jpg');
//         });  

let dragon = document.querySelector("#contproduit1 > #dragonblanc");
let rouge = document.querySelector("#contproduit1 > #red");
let exodia = document.querySelector("#contproduit1 > #exodia");
let celeste = document.querySelector(".texte > #celeste");
let dragonw = document.querySelector("#afficheproduit > #dragonw");
let drag = document.querySelector("#afficheproduit > #textaffi > #drag");
let textcard = document.querySelector("#afficheproduit > #textaffi > #cartblan");
let div = document.getElementById("afficheproduit");
let card = document.getElementsByClassName("carte");

for (let index = 0; index < card.length; index++) {
  card[index].addEventListener('click', ()=>{
    let imgchange = document.getElementById("dragonw");
   let  imageB = card[index].getAttribute('src');
   imgchange.setAttribute('src',imageB);     
  }); 
    
}

// for (let index = 0; index < array.length; index++) {
   
    
// }