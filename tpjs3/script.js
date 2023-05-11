let obito = document.getElementById("cont1");
let textobi = document.getElementById("contp");
let tobi = document.getElementById("tobi")
var trueee = true;
tobi.addEventListener('click', () => {
    if(trueee == true){
        textobi.style.display = "block";
        trueee = false;
    }else{
        textobi.style.display = "none";
        trueee = true;
    }
});

let indra = document.getElementById("indra");
let textindra = document.getElementById("conttex");
indra.addEventListener('click', () => {
    if(trueee == true){
        textindra.style.display = "block";
        trueee = false;
    }else{
        textindra.style.display = "none";
        trueee = true;
    }
});
let madara = document.getElementById("madaraa");
let textmadara = document.getElementById("contpp");
madara.addEventListener('click', () => {
    if(trueee == true){
        textmadara.style.display = "block";
        trueee = false;
    }else{
        textmadara.style.display = "none";
        trueee = true;
    }
});

textobi.addEventListener('click', () => {
    if(trueee == true){
        tobi.style.display = "none";
        
        trueee = false;
    }else{
        tobi.style.display = "block";
        trueee = true;
    }
});
textindra.addEventListener('click', () => {
    if(trueee == true){
        indra.style.display = "none";
        
        trueee = false;
    }else{
        indra.style.display = "block";
        trueee = true;
    }
});
textmadara.addEventListener('click', () => {
    if(trueee == true){
        madara.style.display = "none";
        
        trueee = false;
    }else{
        madara.style.display = "block";
        trueee = true;
    }
});
let madaara = document.getElementById("cont3")
let bton = document.getElementById("btn");
let indraa = document.getElementById("cont2");
let giga = document.getElementById("gigachad");
bton.addEventListener('click', () => {
if(trueee == true){
giga.style.display = "flex";

trueee = false;
}else{
giga.style.display = "block";
trueee = true;
}
});



let oueee = document.getElementById("yoyo2");
let wifi = document.getElementById("ouais");
wifi.addEventListener('click', () => {
    if(trueee == true){
        oueee.style.display = "flex";
    
        trueee = false;
    }else{
        oueee.style.display = "none";
        trueee = true;
    }
});

let youu = document.getElementById("yoyo3");
oueee.addEventListener('click', () => {
    if(trueee == true){
        youu.style.display = "block";
        trueee = false;
    }else{
        youu.style.display = "none";
        trueee = true;
    }
});