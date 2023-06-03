function morado(){
    if(document.getElementById('Morado').checked){
        fondo.style.background ="#482851";
       titulo.style.color=" white";
    }
}

function aqua(){
    if(document.getElementById('Aqua').checked){
        fondo.style.background ="#01FFFF";
        titulo.style.color="black";
}
}
function rosa(){
if(document.getElementById('Rosa').checked){
    fondo.style.background ="#F288C6";
    titulo.style.color="purple";
}
}

function primary(){
    setTimeout(function () {  //para colocar animaciones
    fondo.style.background ="#C80577"; 
    titulo.style.color="beige";
    
   }, 1000)
}

function danger(){
    fondo.style.background ="#1FC38C"; 
    titulo.style.color="navy";

}

function blanco(){
    fondo.style.background ="#000854"; 
    titulo.style.color="gold";
}