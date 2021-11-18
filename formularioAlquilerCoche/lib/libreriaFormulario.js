window.addEventListener("load",function(){

    mostrarPersona();
    
    document.getElementById("boton").onclick=function(ev){
        ev.preventDefault();
        
        if(document.getElementById("persona").checked==true)
        {
            if(validarPersona()!="" && validarVehiculo()!="")
            {
                alert(validarPersona()+validarVehiculo());
            }
            else
            {
                //crear JSON
            }
        }
        
        if(document.getElementById("empresa").checked==true)
        {
            if(validarEmpresa()!="" && validarVehiculo()!="")
            {
                alert(validarEmpresa()+validarVehiculo());
            }
            else
            {
                //crear JSON
            }
        }
    }

    document.getElementById("persona").onclick = function()
    {
        mostrarPersona();
    }

    document.getElementById("empresa").onclick = function()
    {
        mostrarEmpresa();
    }
});


function mostrarEmpresa()
{
    document.getElementById("cif").disabled=false;
    document.getElementById("dni").disabled=true;
    document.getElementById("razon_social").disabled=false;
    document.getElementById("nombre").disabled=true;
    document.getElementById("apellidos").disabled=true;
    document.getElementById("direccion").disabled=false;
    document.getElementById("cp").disabled=false;
    document.getElementById("provincia").disabled=false;
    document.getElementById("municipio").disabled=false;
    document.getElementById("f_nac").disabled=true;
    document.getElementById("fcar").disabled=true;
    document.getElementById("telefono").disabled=false;
}

function mostrarPersona()
{
    document.getElementById("cif").disabled=true;
    document.getElementById("dni").disabled=false;
    document.getElementById("razon_social").disabled=true;
    document.getElementById("nombre").disabled=false;
    document.getElementById("apellidos").disabled=false;
    document.getElementById("direccion").disabled=false;
    document.getElementById("cp").disabled=false;
    document.getElementById("provincia").disabled=false;
    document.getElementById("municipio").disabled=false;
    document.getElementById("f_nac").disabled=false;
    document.getElementById("fcar").disabled=false;
    document.getElementById("telefono").disabled=false;
}

function validarPersona()
{
    resul = "";

    let dni = document.getElementById("dni").value;
    let cp = document.getElementById("cp").value;
    let f_nac = document.getElementById("f_nac").value;
    let f_car = document.getElementById("fcar").value;
    let telefono = document.getElementById("telefono").value;
    let opcion = document.getElementById("persona").checked;

    f_nac = new Date(f_nac);
    f_car = new Date(f_car);

    if(opcion==true)
    {
        if(validarDNI(dni)==false)
        {
            resul += "El DNI es incorrecto\n";
        }
    
        if(/^(?:0[1-9]|[1-4]\d|5[0-2])\d{3}$/.test(cp)==false)
        {
            resul += "El código postal es incorrecto\n";;
        }
    
        if((f_car.getTime()-f_nac.getTime())<567648000000)
        {
            resul+= "No puede tener el carnet con menos de 18 años";
        }
    
        if(/(\+34|0034|34)?[ -]*(6|7)[ -]*([0-9][ -]*){8}/.test(telefono)==false)
        {
            resul+= "El teléfono es incorrecto\n";
        }
    }

    return resul;

}

function validarEmpresa()
{
    resul ="";

    let cif = document.getElementById("cif").value;
    let cp = document.getElementById("cp").value;
    let telefono = document.getElementById("telefono").value;
    let opcion = document.getElementById("empresa").checked;

    if(opcion==true)
    {
        if(validarDNI(cif)==false)
        {
            resul += "El NIF es incorrecto\n";
        }
    
        if(/^(?:0[1-9]|[1-4]\d|5[0-2])\d{3}$/.test(cp)==false)
        {
            resul += "El código postal es incorrecto\n";
        }
    
        if(/(\+34|0034|34)?[ -]*(6|7)[ -]*([0-9][ -]*){8}/.test(telefono)==false)
        {
            resul+= "El teléfono es incorrecto\n";
        }
    }

    return resul;
    
}

function validarDNI(dni)
{
    var numero=dni.substr(0,dni.length-1);
    return "TRWAGMYFPDXBNJZSQVHLCKET"[numero%23]==dni.substr(-1).toUpperCase();
}

function validarVehiculo()
{
    resul = "";

    let matricula = document.getElementById("matricula").value;
    let f_mat = document.getElementById("f_mat").value;
    let cilindrada = document.getElementById("cilindrada").value;
    let puertas = document.getElementById("puertas").value;
    

    if(/^(\d{4}[^AEIOUÑQ]{3})|([A-Z]{1,2}\d{4}[A-Z]{1,2})$/ig.test(matricula)==false)
    {
        resul += "La matrícula es incorrecta\n";
    }

    if(f_mat=="")
    {
        resul += "La fecha de matriculación es incorrecta\n";
    }

    if(/^(\d{3}|(\d{4}))$/.test(cilindrada)==false)
    {
        resul += "La cilindrada es incorrecta\n";
    }

    if(/^[2-5]$/.test(puertas)==false)
    {
        resul += "Las plazas deben estar entre 2 y 5\n";
    }

    return resul;
}


