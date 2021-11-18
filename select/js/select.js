HTMLSelectElement.prototype.annadirTodos=function(select, todos=false){

    if(todos==false)
    {
        while(select.children.length>0)
        {
            this.appendChild(select.children[0]);
        }
    }
    else{
        
        for(i=select.children.length-1;i>=0;i--)
        {
            if(select.children[i].selected==true)
            {
                select.children[i].selected=false;
                this.appendChild(select.children[i]);
            }
        }
    }
}

HTMLSelectElement.prototype.ordenar=function(ascen = true){
    opciones = [];
    for(i=0;i<this.children.length;i++)
    {
        opciones.push(this.children[i]);
    }

    opciones.sort(function(a, b){
        return a.innerText.localeCompare(b.innerText);
    });

    if(ascen==false)
    {
        opciones.reverse();
    }

    for(i=0;i<opciones.length;i++)
    {
        this.appendChild(opciones[i]);
    }

}

HTMLSelectElement.prototype.creaJSON=function(){
    vector = [];
    for(i=0;i<this.children.length;i++)
    {
        vector.push({"value":this.children[i].value, "texto":this.children[i].innerText});
    }
    vectorJSON = JSON.stringify(vector);
    return vectorJSON;
}

HTMLSelectElement.prototype.anadeOption=function(valor){
    option = document.createElement("option");
    option.value = valor.substr(0,2);
    option.innerText = valor;

    if(option.innerText!="")
    this.appendChild(option);
}
HTMLSelectElement.prototype.borraOption=function(valor="null"){
    opciones = [];
    indice=null;
    for(i=0;i<this.children.length;i++)
    {
        opciones.push(this.children[i]);
    }

    for(i=0;i<this.children.length;i++)
    {
        if(opciones[i].innerText==valor)
        {
            indice = i;
        }
    }

    if(indice!=null)
    opciones.splice(indice,1);

    for(i=0;i<opciones.length;i++)
    {
        this.removeChild(this.children[0]);
        this.appendChild(opciones[i]);
    }
}

HTMLSelectElement.prototype.rellenaSelec=function(vector)
{
    vector = JSON.parse(vector);
    for(i=0;i<vector.length;i++)
    {
        option = document.createElement("option");
        option.value = vector[i].value;
        option.innerText = vector[i].texto;
        this.appendChild(option);
    }
}


//vector.push("value":"valor1", "texto":"texto1")
//despues JSON.stringFy(vector) convierte a JSON
//JSON.parse(cadena) de JSON a objeto