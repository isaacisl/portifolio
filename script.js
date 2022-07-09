var ul = document.querySelector('nav ul')
var menuBtn = document.querySelector('.menu-btn i');

function menuShow(){
    if(ul.classList.contains('open')){
        ul.classList.remove('open');
    }else{
        ul.classList.add('open');
    }
}


let logo = document.querySelector(".logo");


logo.addEventListener("click",  () =>{
    window.location.href = "index.html"
})

///     SCROLL NA PÁGINA
