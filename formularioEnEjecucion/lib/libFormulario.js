var personas = new Array();
window.addEventListener("load",function(){

    document.getElementById("boton").onclick=function(ev){
        ev.preventDefault();

        if(validaCampos())
        {
            let tabla = document.getElementById("tabla");
            tabla.removeAttribute("hidden");
            let cuerpoTabla = document.getElementById("cuerpoTabla");

            let dni = document.getElementById("dni").value;
            let nombre = document.getElementById("nombre").value;
            let edad = document.getElementById("edad").value;

            if(personas[dni]==undefined)
            {
                personas[dni] = dni;
                pintaTabla(dni, nombre, edad, cuerpoTabla, tabla);
            }
            else
            {
                alert("Esa persona ya existe");
            }
        }
    }

    tabla = document.getElementById("tabla");
    filaCabecera = tabla.children[0].children[0].cells;

    for(let i=0;i<filaCabecera.length-1;i++)
    {
        filaCabecera[i].onclick=function(){
            let tBody = this.parentElement.parentElement.parentElement.children[1];
            vector = new Array();
            for(let j=0;j<tBody.children.length;j++)
            {
                celdas = new Array();
                for(let w=0;w<tBody.children[j].cells.length-1;w++)
                {
                    valorCelda = tBody.children[j].children[w].innerText;
                    celdas[w] = valorCelda;
                }

                vector[j] = celdas;
            }

            vectorOrdenar = vector;

            
            if(!isNaN(vectorOrdenar[0][i]))
            {
                vectorOrdenar = vectorOrdenar.sort(function(a, b) 
                {
                    return a[i] - b[i];
                });
            }
            else
            {
                vectorOrdenar = vectorOrdenar.sort(function(a, b) 
                {
                    if (a[i].toUpperCase() === b[i].toUpperCase()) {
                        return 0;
                    }
                    else {
                        return (a[i].toUpperCase() < b[i].toUpperCase()) ? -1 : 1;
                    }
                });
            }
            
            
            
            for(let j=0;j<vectorOrdenar.length;j++)
            {
                tabla.children[1].removeChild(tabla.children[1].children[0]);
                pintaTabla(vectorOrdenar[j][0], vectorOrdenar[j][1], vectorOrdenar[j][2], tBody, tabla);
            }

        }

        filaCabecera[i].ondblclick=function()
        {
            let tBody = this.parentElement.parentElement.parentElement.children[1];
            vector = new Array();
            for(let j=0;j<tBody.children.length;j++)
            {
                celdas = new Array();
                for(let w=0;w<tBody.children[j].cells.length-1;w++)
                {
                    valorCelda = tBody.children[j].children[w].innerText;
                    celdas[w] = valorCelda;
                }

                vector[j] = celdas;
            }

            vectorOrdenar = vector;

            
            if(!isNaN(vectorOrdenar[0][i]))
            {
                vectorOrdenar = vectorOrdenar.sort(function(a, b) 
                {
                    return b[i] - a[i];
                });
            }
            else
            {
                vectorOrdenar = vectorOrdenar.sort(function(a, b) 
                {
                    if (a[i].toUpperCase() === b[i].toUpperCase()) {
                        return 0;
                    }
                    else {
                        return (a[i].toUpperCase() > b[i].toUpperCase()) ? -1 : 1;
                    }
                });
            }
            
            
            
            for(let j=0;j<vectorOrdenar.length;j++)
            {
                tabla.children[1].removeChild(tabla.children[1].children[0]);
                pintaTabla(vectorOrdenar[j][0], vectorOrdenar[j][1], vectorOrdenar[j][2], tBody, tabla);
            }
        }
    }
});

function validarDNI(dni)
{
    var numero=dni.substr(0,dni.length-1);
    return "TRWAGMYFPDXBNJZSQVHLCKET"[numero%23]==dni.substr(-1).toUpperCase();
}

function validaCampos()
{
    dato = false;
    let nombre = document.getElementById("nombre");
    let edad = document.getElementById("edad");
    let dni = document.getElementById("dni");

    if(validarDNI(dni.value) && !isNaN(edad.value) && edad.value!="" && nombre.value!="")
    {
        dato = true;
    }

    return dato;
}

function pintaTabla(dni, nombre, edad, cuerpoTabla, tabla)
{
    let fila = document.createElement("tr");
    let celdaDni = document.createElement("td");
    let celdaNombre = document.createElement("td");
    let celdaEdad = document.createElement("td");
    let celdaOpciones = document.createElement("td");
    let botonEliminar = document.createElement("button");
    let botonEditar = document.createElement("button");

    celdaDni.innerHTML=dni;
    fila.appendChild(celdaDni);

    celdaNombre.innerHTML=nombre;
    fila.appendChild(celdaNombre);

    celdaEdad.innerHTML=edad;
    fila.appendChild(celdaEdad);

    botonEliminar.setAttribute("class","eliminar");

    botonEliminar.onclick=function()
    {
        var fila = this.parentNode.parentNode;
        fila.parentNode.removeChild(fila);
        var dni = fila.cells[0].innerHTML;//cojemos el dni de esa fila
        personas = personas.splice(dni,1);
        if(tabla.rows.length==1)
        {
            tabla.setAttribute("hidden","true");
        }

        let cajaEditar = document.getElementById("formEditar");
        cajaEditar.setAttribute("hidden","true");
    }

    botonEditar.setAttribute("class","editar");

    botonGuardarCambios=document.getElementById("guardarCambios");
    botonCancelarCambios=document.getElementById("cancelarCambios");

    botonEditar.onclick=function()
    {
        var fila = this.parentNode.parentNode;
        var dni = fila.cells[0].innerHTML;//cojemos el dni de esa fila
        var nombre_ = fila.cells[1].innerHTML;
        var edad_ = fila.cells[2].innerHTML;

        pintarFormularioEditar(dni,nombre_,edad_);

        botonGuardarCambios.onclick=function()
        {
            let dni = document.getElementById("dni2").value;
            let nombre = document.getElementById("nombre2").value;
            let edad = document.getElementById("edad2").value;

            if(nombre!="" && !isNaN(edad) && edad!="" && validarDNI(dni) && (personas[dni]==undefined || personas[dni]==dni))
            {
                fila.cells[1].innerHTML=document.getElementById("nombre2").value;
                fila.cells[2].innerHTML=document.getElementById("edad2").value;

                let cajaEditar = document.getElementById("formEditar");
                cajaEditar.setAttribute("hidden","true");

            }
            
        }

        botonCancelarCambios.onclick=function()
        {
            let cajaEditar = document.getElementById("formEditar");
            cajaEditar.setAttribute("hidden","true");
        }
    }

    

    celdaOpciones.appendChild(botonEliminar);
    celdaOpciones.appendChild(botonEditar);
    celdaOpciones.setAttribute("width",70);
    fila.appendChild(celdaOpciones);
    cuerpoTabla.appendChild(fila);

    tabla.appendChild(cuerpoTabla);
}

function validarCampoDni()
{
    let dni = document.getElementById("dni");

    if(dni.value!="")
    {
        if(validarDNI(dni.value)==false)
        {
            dni.className = "error";
        }
        
        if(validarDNI(dni.value))
        {
            dni.className="bien";
        }
    }
    else
    {
        dni.className="";
    }
    
}

function validarCampoEdad()
{
    let edad = document.getElementById("edad");

    if(edad.value!="")
    {
        if(!isNaN(edad.value))
        {
            edad.className="bien";
        }
        else
        {
            edad.className="error";
        }
    }
    else
    {
        edad.className="";
    }
}

function pintarFormularioEditar(dni, nombre, edad)
{
    let cajaEditar = document.getElementById("formEditar");
    cajaEditar.removeAttribute("hidden");
    let dniCampo = document.getElementById("dni2");
    dniCampo.setAttribute("value",dni);
    let nombreCampo = document.getElementById("nombre2");
    nombreCampo.setAttribute("value",nombre);
    let edadCampo = document.getElementById("edad2");
    edadCampo.setAttribute("value",edad);
    
    if(dniCampo.getAttribute("no_editable")!==null)
    {
        dniCampo.setAttribute("disabled",true);
    }
    if(nombreCampo.getAttribute("no_editable")!==null)
    {
        nombreCampo.setAttribute("disabled",true);
    }
    if(edadCampo.getAttribute("no_editable")!==null)
    {
        edadCampo.setAttribute("disabled",true);
    }
}

function ordenarColumna(i)
{
    var tBody = this.parentElement.nextElementSibling;
    return function()
    {
        var filas=tBody.children;
        var vector=[];
        for(let j=0;j<filas.length;j++)
        {
            vector.push(filas[j]);
        }
        vector.sort(function(a,b){return a.children[i].innerText.localeCompare(b.Children[i].innerText)});
    }
}