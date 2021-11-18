window.addEventListener("load",function(){
    imagenes = document.getElementsByTagName("img");
    for(i=0;i<imagenes.length;i++)
    {
        filas = parseInt(imagenes[i].getAttribute("filas"));
        columnas = parseInt(imagenes[i].getAttribute("columnas"));
        if(imagenes[i].getAttribute("ordenable")=="true")
        {
            imagenes[i].ondblclick=function(){
                left = this.style.marginLeft;
                top = this.style.marginTop;
                this.style.zIndex="-50";
                this.style.visibility="hidden";
                creaTabla(obtenPosiciones(filas, columnas), this, filas, columnas, left, top);
            }
        }
    }
    
});

function obtenPosiciones(filas=6, columnas=6)
{
    h = document.getElementsByTagName("img")[0].height;
    posiciones1 = new Array();
    for(i=0;i<filas;i++)
    {
        posiciones2 = new Array();
        for(j=0;j<columnas;j++)
        {
            posiciones2[j] = j*(h/columnas)*(-1)+"px "+i*(h/filas)*(-1)+"px";
        }

        posiciones1[i]=posiciones2;
    }

    for(i=0;i<posiciones1.length;i++)
    {
        posiciones1[i] = posiciones1[i].sort(function(){return Math.random() - 0.5});
    }
    posiciones1 = posiciones1.sort(function(){return Math.random() - 0.5});

    return posiciones1;
}

function creaTabla(posiciones, imagen, filas=6, columnas=6, left, top)
{
    body = document.getElementsByTagName("body")[0];
    tabla = document.createElement("table");
    tabla.setAttribute("id","tabla");
    tabla.style.height=imagen.height+"px";
    tabla.style.width=imagen.width+"px";
    tbody = document.createElement("tbody");

    for(i=0;i<filas;i++)
    {
        fila = document.createElement("tr");
        for(j=0;j<columnas;j++)
        {
            celda = document.createElement("td");
            celda.style.backgroundPosition = posiciones[i][j];
            celda.style.backgroundImage='url(imagenes/seta.jpg)';
            celda.style.backgroundRepeat='no-repeat';
            celda.setAttribute("posicion",posiciones[i][j]);
            fila.appendChild(celda);
        }
        tbody.appendChild(fila);
    }
    f=aleatorio(0,3);
    c=aleatorio(0,3);
    tabla.appendChild(tbody);

    tabla.children[0].children[f].children[c].style.backgroundImage='none';
    tabla.children[0].children[f].children[c].setAttribute("blanco","true");

    tabla.style.marginLeft=left;
    tabla.style.marginTop=top;
    
    body.appendChild(tabla);
    for(i=0;i<filas;i++)
    {
        for(j=0;j<columnas;j++)
        {
            celdaBlanco = tabla.children[0].children[f].children[c];
            tabla.children[0].children[i].children[j].onclick=function(){
                celdaBlanco = document.querySelector("td[blanco='true']");
                fo = this.parentElement.rowIndex;// fila de la celda pulsada
                fb = celdaBlanco.parentElement.rowIndex;
                co = this.cellIndex;//columna de la celda pulsada
                cb = celdaBlanco.cellIndex;//columna de la celda en blanco
                if((Math.pow(fo-fb,2) + Math.pow(co-cb,2))==1)//vemos si la distancia entre la celda en blanco y la celda pulsada es igual a 1
                {
                    aux = celdaBlanco.getAttribute("posicion");

                    celdaBlanco.style.backgroundImage = this.style.backgroundImage;
                    celdaBlanco.style.backgroundPosition = this.style.backgroundPosition;
                    celdaBlanco.style.backgroundRepeat = this.style.backgroundRepeat;
                    celdaBlanco.setAttribute("posicion",this.getAttribute("posicion"));

                    this.setAttribute("posicion",aux);
                    celdaBlanco.removeAttribute("blanco");
                    this.style.backgroundImage ='none';
                    this.setAttribute("blanco","true");

                    comprobar("tabla",imagen, filas, columnas);

                }

            }
        }
    }
    
}

function aleatorio(minimo,maximo){
    return Math.floor(Math.random() * ((maximo+1)-minimo)+minimo);
}

function posicionOriginal(imagen, filas, columnas)
{
    h = imagen.height;
    posiciones1 = new Array();
    for(i=0;i<filas;i++)
    {
        posiciones2 = new Array();
        for(j=0;j<columnas;j++)
        {
            posiciones2[j] = j*(h/4)*(-1)+"px "+i*(h/4)*(-1)+"px";
        }

        posiciones1[i]=posiciones2;
    }
    return posiciones1;
}

function comprobar(id_tabla, imagen, filas, columnas){
    tabla = document.getElementById(id_tabla);
    vectorPosOriginal = posicionOriginal(imagen, filas, columnas);
    iguales = false;
    posTabla="";
    posOriginal="";
    for(i=0;i<filas;i++)
    {
        for(j=0;j<columnas;j++)
        {
            posTabla += tabla.children[0].children[i].children[j].getAttribute("posicion");
            posOriginal += vectorPosOriginal[i][j];
        }
    }

    if(posTabla == posOriginal)
    {
        imagen.style.zIndex="0";
        imagen.style.visibility="visible";
        document.getElementById("tabla").style.visibility="hidden";
        body = document.getElementsByTagName("body")[0];
        body.removeChild(document.getElementById("tabla"));

        alert("FELICIDADES, HAS COMPLETADO EL PUZLE");

        return true;
    }
}