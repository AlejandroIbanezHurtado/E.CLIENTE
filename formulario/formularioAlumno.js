function creaAlumno()
{
    var alumno1 = new Alumno
    (
        document.getElementById('f_nombre').value, 
        document.getElementById('f_apellido1').value, 
        document.getElementById('f_apellido2').value,
        document.getElementById('f_fnac').value,
        document.getElementById('f_dni').value,
        document.getElementById('f_curso').value
    );

    return alumno1;
}

function escribir(alumno)
{
    if(alumno.nombre=="" || alumno.apellido1=="" || alumno.apellido2=="" || alumno.fechaNacimiento=="" || alumno.dni=="" || alumno.curso=="")
    {
        alert("Rellena todos los campos");
    }
    else
    {
        if (alumno.validarDni())
            document.getElementById("texto2").style.color="green";
        else
            document.getElementById("texto2").style.color="red";

        document.getElementById("texto").innerHTML="Mi nombre es "+alumno.nombreCompleto()+
        ", nací el dia "+alumno.fechaNacimiento+", mi DNI es "

        document.getElementById("texto2").innerHTML=alumno.dni.toUpperCase();

        document.getElementById("texto3").innerHTML=", estoy matriculado en "+alumno.curso;
    }
}

function limpiar()
{
    document.getElementById("texto").innerHTML="";
    document.getElementById("texto2").innerHTML="";
    document.getElementById("texto3").innerHTML="";
}

