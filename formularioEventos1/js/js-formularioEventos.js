window.addEventListener("load", function(){
    var txtDni = document.getElementById("txtDni");
    var txtNombre = document.getElementById("txtNombre");
    var txtFecha = document.getElementById("txtFecha");
    var tabla = document.getElementById("tabla");
    const btnGuardar = document.getElementById("btnGuardar");
    document.getElementById("spanNombre").className="span-oculto";
    document.getElementById("spanFecha").className="span-oculto";

    txtDni.onkeydown=function(e)
    {
        var codTecla = (e.key).charCodeAt(0) //sacamos el valor ascii de la tecla pulsada
        if((codTecla<48 || codTecla>57) && codTecla!=66) //vemos si está comprendida en el inervalo del 0-9
        return false;
    }

    txtDni.onpaste=function(ev){
        ev.preventDefault();
    }

    txtFecha.onpaste=function(ev){
        ev.preventDefault();
    }

    txtFecha.onkeydown=function(e)
    {
        var codTecla = (e.key).charCodeAt(0) //sacamos el valor ascii de la tecla pulsada
        if((codTecla<48 || codTecla>57) && codTecla!=66) //vemos si está comprendida en el inervalo del 0-9
        return false;
    }

    txtDni.onkeyup=function(){
        
        if(this.value.length==8)
        {
            this.value+=obtenLetraDni(this.value);
            this.readOnly=true;
            txtNombre.focus();
            if(saberDniInsertado(tabla, this.value))
            {
                btnGuardar.removeEventListener("click", guardar);
                btnGuardar.addEventListener("click", editar);
            }
            else{
                btnGuardar.removeEventListener("click", editar);
                btnGuardar.addEventListener("click", guardar);
            }
        }
    }

    txtNombre.onkeydown=function(e)
    {
        var codTecla = (e.key).charCodeAt(0) //sacamos el valor ascii de la tecla pulsada
        //alert(codTecla);
        if((codTecla<65 || codTecla>90)&&(codTecla<97 || codTecla>122) && codTecla!=66) //vemos si está comprendida en el inervalo del 0-9
        return false;
    }

    txtFecha.onkeyup=function()
    {
        if(this.value.length==2 || this.value.length==5)
        {
            this.value+="/";
        }
    }

    guardar = function(){
        tbody = tabla.children[1];
        fila = document.createElement("tr");
        formulario = document.getElementsByTagName("form")[0];
        for(i=0;i<formulario.length-1;i++)
        {
            celda = document.createElement("td");
            celda.innerText=formulario[i].value;
            fila.appendChild(celda);
        }
        fila.draggable=true; //permitimos que se pueda arrastrar

        fila.addEventListener("dragstart", function(e){ //cuando se empieza a arrastrar
            this.setAttribute("arrastrado","true");
        });

        fila.addEventListener("dragend", function(){ //cuando se terminda de arrastrar
            this.setAttribute("arrastrado","false");
        });

        tbody.appendChild(fila);

        if(txtNombre.value=="")
        {
            txtNombre.className="error";
            document.getElementById("spanNombre").className="span-visible";
        }
        else{
            txtNombre.className="";
            document.getElementById("spanNombre").className="span-oculto";
        }

        vaciarCampos(formulario);
        txtDni.readOnly=false;
    }

    editar = function(){
        formulario = document.getElementsByTagName("form")[0];
        for(i=0;i<tabla.children[1].children.length;i++)
        {
            if(tabla.children[1].children[i].children[0].innerText==txtDni.value)
            {
                for(j=1;j<tabla.children[1].children[0].children.length;j++)
                {
                    tabla.children[1].children[i].children[j].innerText = formulario[j].value;
                }
            }
        }

        if(txtNombre.value=="")
        {
            txtNombre.className="error";
            document.getElementById("spanNombre").className="span-visible";
        }
        else{
            txtNombre.className="";
            document.getElementById("spanNombre").className="span-oculto";
        }

        vaciarCampos(formulario);
        txtDni.readOnly=false;
    }

    txtDni.addEventListener("dragover",function(e){
        e.preventDefault();
    });

    txtDni.addEventListener("drop",function(e){
        console.log("drop");
        for(i=0;i<tabla.children[1].children.length;i++)
        {
            if(tabla.children[1].children[i].getAttribute("arrastrado")=="true")
            {
                //txtDni.value=tabla.children[1].children[i].children[0].innerText;
                for(j=0;j<tabla.children[1].children[0].children.length;j++)
                {
                    formulario[j].value = tabla.children[1].children[i].children[j].innerText;
                    formulario[0].readOnly=true;
                }
            }
        }
    });

    txtDni.addEventListener("dragenter",function(){
        txtDni.className="txt-dentro";
    });

    txtDni.addEventListener("dragleave",function(){
        txtDni.className="txt-fuera";
    });
})

function obtenLetraDni(dni)
{
    return "TRWAGMYFPDXBNJZSQVHLCKET"[dni%23];
}

function vaciarCampos(formulario)
{
    for(i=0;i<formulario.length-1;i++)
    {
        formulario[i].value="";
    }
}

function saberDniInsertado(tabla, dni)
{
    existe = false;
    for(i=0;i<tabla.children[1].children.length;i++)
    {
        if(tabla.children[1].children[i].children[0].innerText == dni)
        {
            existe = true;
        }
    }

    return existe;
}