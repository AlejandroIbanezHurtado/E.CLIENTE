window.addEventListener("load",function(){

    document.getElementById("boton").onclick=function(ev){
        ev.preventDefault();
        escribirEdad(calculaEdad(obtenFecha()));
    }
});

function obtenFecha()
{
    return document.getElementById('fecha').value;
}

function escribirEdad(texto)
{
    document.getElementById('resul').value = texto;
}