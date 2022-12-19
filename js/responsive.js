let hamburger = document.getElementById("hamburgur_btn");
let ullinks = document.getElementById("ullinks");
let close_btn = document.getElementById("close_btn");

hamburger.addEventListener('click',()=>{
    console.log("kfheifhie");
    ullinks.style.transform = "translateX(0px)";
})
close_btn.addEventListener('click',()=>{
    console.log("kfheifhie");
    ullinks.style.transform = "translateX(-1800px)";
})