window.addEventListener("load",function(){

    document.getElementById("boton").onclick=function(ev){
        ev.preventDefault();
        escribirDias(calculaDias(obtenFecha()));
    }
});


function obtenFecha()
{
    return document.getElementById('fecha').value;
}

function escribirDias(texto)
{
    document.getElementById('resul').innerHTML = texto;
}