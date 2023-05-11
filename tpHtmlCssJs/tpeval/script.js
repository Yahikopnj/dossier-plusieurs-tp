//Code javascript ici
let testimg = document.getElementById("testimg");
let testp = document.getElementById("testp");
let testimga = document.getElementById("testimga");

let trueee = true;
let index = 0;
let art = document.getElementById("prix");
let btn = document.getElementsByClassName("btnimg")[0];
let btnn = document.getElementsByClassName("btnimg")[1];
let btnnn = document.getElementsByClassName("btnimg")[2];

let retir = document.getElementsByClassName("retir")[0];
let retirr = document.getElementsByClassName("retir")[1];
let retirrr = document.getElementsByClassName("retir")[2];

let supp = document.getElementById("btnsupp");
let suppr = document.getElementById("supp");

testimg.addEventListener('mouseenter', ()=>{
    testimg.style.height = "300px";
    
    testp.style.opacity = "1";
    setTimeout(()=>{
        testp.style.opacity = "0";
    }, "3000");
});

                                                                                        
testimg.addEventListener('mouseleave', ()=>{
testimg.style.height = "";
});

testimga.addEventListener('click', ()=>{
if(trueee == true){
    testimga.style.height = "300px";
    testimga.style.transition = "1000ms";
    trueee = false;
}else{
    testimga.style.height = "";
    testimga.style.transition = "1000ms";
    trueee = true;
}
});
btn.addEventListener('click', ()=>{
index = index + 1;
art.innerHTML = index;
});
btnn.addEventListener('click', ()=>{
    index = index + 1;
    art.innerHTML = index;
    });
    btnnn.addEventListener('click', ()=>{
        index = index + 1;
        art.innerHTML = index;
        });
suppr.addEventListener('click', ()=>{
    if(index > 0){
        index = 0;
        art.innerHTML = index;
    }
});
retirrr.addEventListener('click', ()=>{
if(index > 0){
    index = index - 1;
    art.innerHTML = index;
}
});
retirr.addEventListener('click', ()=>{
    if(index > 0){
        index = index - 1;
        art.innerHTML = index;
    }
    });
    retir.addEventListener('click', ()=>{
        if(index > 0){
            index = index - 1;
            art.innerHTML = index;
        }
        });