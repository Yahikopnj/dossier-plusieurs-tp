let nav = document.getElementById("menuleft");
let ul = document.getElementById("okk");
let btn = document.getElementById("btn");
let trueee = true;
btn.addEventListener('click', () => {
    if(trueee == true){
        ul.style.fontSize = "32px";
        nav.style.height = "750px";
        nav.style.animation = "entre 1s"
        ul.style.animation = "entre 1s"
        trueee = false;
    }else{
      setTimeout(() => {
        ul.style.fontSize = "0px";
        nav.style.height = "0px";
      }, 1000);
        nav.style.animation = "ranger 1s"
        ul.style.animation = "ranger 1s"
        trueee = true;
    }
});

let textee = document.getElementsByClassName("text");
let lili = document.getElementsByClassName("lili");

// lili.addEventListener('click', () => {
//     for (let index = 0; index < textee.length; index++){
//         if(trueee == true){
//             textee[index].style.fontSize = "32px";
//             textee[index].style.height = "50px";
//             trueee = false;  
//         }else{
//         textee[index].style.fontSize = "0px";
//         textee[index].style.height = "0px";
//         trueee = true;
//         }
//     }
// });

for (let index = 0; index < textee.length; index++){
    lili[index].addEventListener('click', ()=>{
if(trueee == true){
    textee[index].style.fontSize = "32px";
            textee[index].style.height = "50px";
            trueee = false; 
}else{
    textee[index].style.fontSize = "0px";
        textee[index].style.height = "0px";
        trueee = true;
}
    });
}
