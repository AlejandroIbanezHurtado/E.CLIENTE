window.addEventListener("load",function(){

    document.getElementById("boton").onclick=function(ev){
        ev.preventDefault();
        escribir(obtenFecha().esFecha());
    }
});

function obtenFecha()
{
    return document.getElementById('fecha').value;
}

function escribir(texto)
{
    mostrar="";
    if(texto==true)
    {
        mostrar = "OK";
    }
    else
    {
        mostrar = "ERROR";
    }
    document.getElementById('resul').value = mostrar;
}