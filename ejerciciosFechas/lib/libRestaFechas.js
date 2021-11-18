window.addEventListener("load",function(){

    document.getElementById("boton").onclick=function(ev){
        ev.preventDefault();
        escribirTiempo(calculaDMA(obtenFecha1(),obtenFecha2()));
    }
});

function obtenFecha1()
{
    return document.getElementById('fecha1').value;
}

function obtenFecha2()
{
    return document.getElementById('fecha2').value;
}

function escribirTiempo(texto)
{
    document.getElementById('resul').innerHTML = texto;
}