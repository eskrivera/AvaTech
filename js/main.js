

let ubicacionPrincipal = window.pageYOffset;

AOS.init();

window.addEventListener("scroll", function(){
    let desplazamientoActual = window.pageYOffset;
    if(ubicacionPrincipal>=desplazamientoActual){
        document.getElementsByTagName('nav')[0].style.top = "0px"
    }
    else{
        document.getElementsByTagName('nav')[0].style.top = "-100px"
    }
    ubicacionPrincipal=desplazamientoActual;
    
})



//menu

let enlacesHeader = document.querySelectorAll(".enlaces-header") [0];

document.querySelectorAll(".menu")[0].addEventListener("click",function() {

    enlacesHeader.classList.toggle("menudos")
    
})

//menu hamburguesa blanco

let menuBlanco = document.querySelectorAll(".menu") [0];

document.querySelectorAll(".menu") [0].addEventListener("click", function(){

    menuBlanco.classList.toggle("menublanco1")
})