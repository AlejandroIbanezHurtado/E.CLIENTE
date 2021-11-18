function Dato(palabra, textarea)
{
    this.palabra=palabra;
    this.textarea=textarea;
};

String.prototype.buscarTodas = function(subcadena="")
    {
        var cadena=this.valueOf();
        var coincidencias=[];
        var j=-1;
        if (cadena != "")
        {
            while (cadena.indexOf(subcadena,j)>=0)
            {
                j=cadena.indexOf(subcadena,j);
                coincidencias[coincidencias.length]=j++;
            }
        }
        
        return coincidencias;
    }

function creaDato()
{
    var dato1 = new Dato
    (
        document.getElementById('f_palabra').value, 
        document.getElementById('f_textarea').value
    );

    return dato1;
}

function buscarTextArea(dato)
{
    const vector = [];
    resul = "<br>";
    Object.assign(vector, dato.textarea.buscarTodas(dato.palabra));

    for(i=0;i<vector.length;i++)
    {
        k = vector[i];
        //resul += "<br>"+dato.textarea[k-3]+dato.textarea[k-2]+dato.textarea[k-1]+dato.textarea[k]+dato.textarea[k+1]+dato.textarea[k+2]+dato.textarea[k+3]+" ,";
        
        let j = k+1;
        while(dato.textarea[j]!=' ' || j!=dato.textarea.length)
        {
            resul = resul + dato.textarea[j];
            j++;
        }

        resul = resul + dato.textarea[k];

        j=k-1;
        while(dato.textarea[j]!=' ' || j!=0)
        {
            resul = resul +dato.textarea[j];
            j--;
        }
        resul = resul +" ,";
    }
    
    document.getElementById("texto").innerHTML = resul.substr(0, resul.length - 1);

    function ordenarString(cars)
    {
        cars.sort(function(a,b){
            if(a.type.toLowerCase()<b.type.toLowerCase())
            {
                return -1;
            }
            if(a.type.toLowerCase()>b.type.toLowerCase())
            {
                return 1;
            }
        })
    }
}