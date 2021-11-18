window.addEventListener("load",function(){

    document.getElementById("boton").onclick=function(ev){
        ev.preventDefault();
        escribirTiempo(calculaDMA(obtenFecha1(),calculaFechaJubi(obtenFecha1())));
    }
});

function obtenFecha1()
{
    return document.getElementById('fecha1').value;
}

function escribirTiempo(texto)
{
    document.getElementById('resul').innerHTML = texto;
}

function calculaFechaJubi(fecha)
{
    boo = fecha.esFecha();
    var fe;
    if(boo==true)
    {
        fecha = fecha.split("/");
        fecha[2] = parseInt(fecha[2])+65;
        fe = transFechaAmericana(fecha);
    }
    else
    {
        fe = "ERROR";
    }

    return fe;
}