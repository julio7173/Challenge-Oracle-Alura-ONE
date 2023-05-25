function mostrarRedes(){
    var nave = document.getElementById("nave");
    var instagram = document.getElementById("instagram");
    var linkedin = document.getElementById("linkedin");
    var github = document.getElementById("github");

    nave.classList.toggle("clicked");
    instagram.classList.toggle("clicked");
    linkedin.classList.toggle("clicked");
    github.classList.toggle("clicked");
}

var astronauta = document.getElementById("astronauta");
var alien = document.getElementById("alien");
var encriptar = document.getElementById("encriptar");
var desencriptar = document.getElementById("desencriptar");
var reglasEncriptar = {"e":"enter", "i":"imes", "a":"ai", "o":"ober", "u":"ufat"};
var reglasDesencriptar = {"enter":"e", "imes":"i", "ai":"a", "ober":"o", "ufat":"u"};

function encriptarTexto(){
    var texto = astronauta.value;
    for(var vocal in reglasEncriptar){
        var palabra = reglasEncriptar[vocal];
        var regex = new RegExp(vocal, "i");
        texto = texto.replace(regex, palabra);
    }
    alien.value = texto;
}

function desencriptarTexto(){
    var texto = astronauta.value;
    for(var vocal in reglasDesencriptar){
        var palabra = reglasDesencriptar[vocal];
        var regex = new RegExp(vocal, "gi");
        texto = texto.replace(regex, palabra);
    }
    alien.value = texto;
}

encriptar.addEventListener("click", encriptarTexto);
desencriptar.addEventListener("click", desencriptarTexto);

async function copiarTexto(){
    var texto = document.getElementById("alien").value;
    try{
        await navigator.clipboard.writeText(texto);
        alert("Copiado!");
    }
    catch(err){
        alert("Error al copiar" + err);
    }
}

var copiar = document.getElementById("copiar");
copiar.addEventListener("click", copiarTexto);

function borrarTexto(){
    astronauta.value = "";
    alien.value = "";
}

var borrar = document.getElementById("borrar");
borrar.addEventListener("click", borrarTexto);