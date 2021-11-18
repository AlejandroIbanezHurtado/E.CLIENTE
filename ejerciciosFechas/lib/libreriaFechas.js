String.prototype.esFecha = function()
{
    var respuesta = false;
    var partes = this.split("/");
    var fecha = new Date(partes[2], partes[1]-1, partes[0]);
    if(fecha.getFullYear()==partes[2] &&
        fecha.getMonth()==partes[1]-1 &&
        fecha.getDate()==partes[0])
        {
            respuesta = true;
        }
    return respuesta;
}


function calculaEdad(fecha,actual = new Date())
{
    t = obtenFecha();
    boo = t.esFecha();
    dif = 0;
    if(boo==true)
    {
        fe = transFechaAmericana(fecha);
        dif = actual.getTime()-fe.getTime();
    }

    resul = Math.trunc(dif/(31557600000));
    return resul;
}

function calculaDias(fecha)
{
    t = obtenFecha();
    boo = t.esFecha();
    actual = new Date();
    dif = 0;
    resul = 0;
    if(boo==true)
    {
        fe = transFechaAmericana(fecha);
        dif = actual.getTime()-fe.getTime();
        dif = Math.floor(dif/(86400000));
        resul = "Llevas "+dif+" días desde que naciste, lo cual son "+calculaHoras(dif)+" horas";
    }
    else
    {
        resul = "ERROR";
    }

    
    return resul;
}

function calculaDMA(fecha1, fecha2 = new Date())
{
    //t = obtenFecha1();
    fecha1s = fecha1.toString();
    fecha2s = fecha2.toString();
    boo = fecha1s.esFecha();
    boo2 = fecha2s.esFecha();
    dif = 0;
    resul = "";
    if(boo==true)
    {
        fe1 = transFechaAmericana(fecha1);
        fe2 = transFechaAmericana(fecha2);
        dif = Math.floor(fe1.getTime()-fe2.getTime());
        dif = Math.floor(dif/(86400000));

        var años = Math.floor(dif/365);
        var restoaños = Math.floor(dif%365);
        var meses = Math.floor(restoaños/12);
        var restomeses = Math.floor(restoaños%12);
        var dias = restomeses;

        resul = "La diferencia es de "+años+" años, "+meses+" meses, "+dias+" dias";
    }
    else
    {
        resul = "ERROR";
    }

    return resul;
}

function calculaHoras(dias)
{
    resul = dias*24;
    
    return resul;
}


function transFechaAmericana(texto)
{
    texto = texto.toString();
    var partes = texto.split("/");
    var fecha = new Date(partes[2], partes[1]-1, partes[0]);
    return fecha;
}


