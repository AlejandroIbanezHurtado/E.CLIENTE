function sacarEnLista(vector)
{

    texto = "<ul>";

    for(i=0;i<vector.length;i++)
    {
        texto = texto+"<li>"+vector[i]+"</li>";
    }

    texto = texto +"</ul>";

    document.getElementById("lista").innerHTML = texto;

}

function sacarVector(texto)
{
    return texto.split("\n");
}

function sacarDato()
{
    texto = document.getElementById("f_textarea").value;

    return texto;
}

function ordenarVectorCadena(vector)
{
    vector = vector.sort();
    
    return vector;
}

function ordenarVectorNumero(vector)
{
    for(i=0;i<vector.length;i++)
    {
        vector[i] = parseInt(vector[i]);
    }

    vector = vector.sort(function(a, b) {
        return a - b;
      });

    return vector;
}

function ordenarVectorFecha(vector)
{
    
    
    for(i=0;i<vector.length;i++)
    {
        dia = 0;
        mes = 0;
        año = 0;
        texto = "";

        vector[i] = vector[i].split("/");
        
        for(k=0;k<vector.length;k++)
        {
            texto = texto + vector[i];
        }
        
        vector[i] = texto;

        dia = vector[i].substring(0,2);
        mes = vector[i].substring(3,5);
        año = vector[i].substring(6,10);

        vector[i] = (parseInt(año)*10000)+(parseInt(mes)*100)+parseInt(dia);
    }
    
    vector = vector.sort(function(a, b) {
        return a - b;
      });

    for(i=0;i<vector.length;i++)
    {
        n = vector[i];
        cad = n.toString();
        vector[i] = cad.substring(6,8)+"/"+cad.substring(4,6)+"/"+cad.substring(0,4);
    }
    return vector;
}
