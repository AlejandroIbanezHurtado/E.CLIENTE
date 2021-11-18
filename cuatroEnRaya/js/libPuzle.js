window.addEventListener("load",function(){
    crea4EnRaya();
    ratonEncima();
    click();
});

function crea4EnRaya()
{
    tabla = document.getElementsByTagName("table")[0];
    tabla.className="tabla4EnRaya";
    tabla.setAttribute("turno","red");
    tbody = document.createElement("tbody");
    body = document.getElementsByTagName("body")[0];

    for(i=0;i<6;i++)
    {
        fila = document.createElement("tr");
        for(j=0;j<7;j++)
        {
            celda = document.createElement("td");
            celda.setAttribute("relleno","blanco");
            fila.appendChild(celda);
        }
        tbody.appendChild(fila);
    }

    tabla.appendChild(tbody);
    body.appendChild(tabla);
}

function ratonEncima()
{
    tabla = document.getElementsByTagName("table")[0];
    celdas = tabla.getElementsByTagName("td");
    for(j=0;j<celdas.length;j++)
    {
        celdas[j].onmouseover=function(){
            n_columna = this.cellIndex;
            columna = new Array();
            for(i=0;i<tabla.children[0].children.length;i++)
            {
                columna[i] = tabla.children[0].children[i].children[n_columna];
                columna[i].className="encima";
            }
        }

        celdas[j].onmouseout=function(){
            n_columna = this.cellIndex;
            columna = new Array();
            for(i=0;i<tabla.children[0].children.length;i++)
            {
                columna[i] = tabla.children[0].children[i].children[n_columna];
                columna[i].removeAttribute("class");
            }
        }
    }
}

function click()
{
    tabla = document.getElementsByTagName("table")[0];
    celdas = tabla.getElementsByTagName("td");

    for(j=0;j<celdas.length;j++)
    {
        celdas[j].onclick=function(){
            n_columna = this.cellIndex;
            columna = new Array();
            n_filas = tabla.children[0].children.length;
            for(i=0;i<tabla.children[0].children.length;i++)
            {
                columna[i] = tabla.children[0].children[i].children[n_columna];
            }
            

            celdasBlanco = new Array();
            for(i=0;i<columna.length;i++)
            {
                if(columna[i].getAttribute("relleno")=="blanco")
                {
                    celdasBlanco[i] = columna[i];
                }
            }
            turno = tabla.getAttribute("turno");
            if(celdasBlanco.length>0)
            {
                celdasBlanco[celdasBlanco.length-1].style.backgroundColor=turno;
                celdasBlanco[celdasBlanco.length-1].setAttribute("relleno",turno);
                if(turno=="red")
                {
                    tabla.setAttribute("turno","blue");
                }
                else{
                    tabla.setAttribute("turno","red");
                }
            }

            colorTabla = new Array();
            
            for(i=0;i<tabla.children[0].children.length;i++)
            {
                filaColor = new Array();

                for(j=0;j<tabla.children[0].children[i].children.length;j++)
                {
                    filaColor[j] = tabla.children[0].children[i].children[j].getAttribute("relleno");
                }

                colorTabla[i] = filaColor;
            }

            
            //recorrer matriz de los colores y ver si hay cutro juntos
            
            
            
        }
    }
    
}