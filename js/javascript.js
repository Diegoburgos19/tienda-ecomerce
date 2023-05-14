function seleccionar(link){
    var opciones = document.querySelectorAll('#links a')
    opciones[0].className = "";
    opciones[1].className = "";
    opciones[2].className = "";
    opciones[3].className = "";

    link.className = "seleccionado";

    var x = document.getElementById("nav");
    x.className ="";
}

function responsiveMenu() {
    var x = document.getElementById("nav");
    if(x.className ==="") {
        x.className = "responsive";
    }else{
        x.className = "";
    }
}
const fulImgBox = document.getElementById('fulImgBox'),
fulImg = document.getElementById('fulImg');

function openFulImg(reference){
    fulImgBox.style.display ='flex'
    fulImg.src =reference
}

function closeImg(){
    fulImgBox.style.display = 'none';
}
