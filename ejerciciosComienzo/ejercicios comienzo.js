//funcion pow que pasados dos numeros eleva el primero al segundo
function elevar(base, exp)
{
    return Math.pow(base,exp);
}

//funcion que dado un numero entero y un numero de caracteres devuelve una cadena con ese numero completado con 0
function rellenar(num, car)
{
    var longi = (num+"").length;
    var i;
    var resul=num;
    for(i=longi+1;i<car;i++)
    {
        resul="0"+resul;
    }
    return resul;
}

//funcion que pasado el año de nacimiento me devuelva si soy mayor de edad
function nacimiento(año)
{
    var resp;
    if(año<=2003) 
    {
        resp="mayor"
    }
    else
    {
        resp="menor"
    }
    return "Eres "+resp+" de edad";
}


//funcion que admita uno o dos parametros el primero es el año de nacimiento, el segundo es el año actual(por defecto 2021) y me diga si soy mayor de edad
function nacimiento2(año, actual=2021)
{
    var resp;
    if(año<=(actual-18)) 
    {
        resp="mayor"
    }
    else
    {
        resp="menor"
    }
    return "Eres "+resp+" de edad";
}

//funcion que me devuelve la media de los valores pasados
function media()
{
    var n=arguments.length;
    var suma=0;
    var total=0;
    for(let i=0;i<n;i++)
    {
        suma+=arguments[i];
    }

    if(n!=0)
    {
        total=suma/n;
    }
    return total;
}

//funcion que devuelva el minimo de los valores pasados
function minimo()
{
    var n=arguments.length;
    var total=0;
    var min=Math.min.apply(null, arguments)

    if(n!=0)
    {
        total=min;
    }
    return total;
}

//funcion sort que devuelve un array con los valores pasados ordenados
function ordenar()
{
    var n=arguments.length;
    var array = [n];

    for(let i=0;i<n;i++)
    {
        array[i] = arguments[i];
    }

    array.sort(function(a, b) {return a - b});
    return array;
}

//funcion sort que devuelve un array con los valores pasados ordenados si hay una d como ultimo parámetro lo haremos de manera descendente
function ordenarD()
{
    var n=arguments.length;
    var array = [n];

    for(let i=0;i<n;i++)
    {
        array[i] = arguments[i];
    }

    if(array[n-1]=="D" || array[n-1]=="d")
    {
        array.pop();
        array.sort(function(a, b) {return b - a});
    }
    else
    {
        array.sort(function(a, b) {return a - b});
    }
    
    
    return array;
}


/*Objeto javascript para alumno
propiedades
    nombre
    apellido1
    apellido2
    fechaNacimiento
    dni
    curso
metodos
    nombreCompleto
    edad
    letraDNI
    validarDNI
*/



function Alumno(nombre, apellido1, apellido2, fechaNacimiento, dni, curso)
{
    this.nombre=nombre;
    this.apellido1=apellido1;
    this.apellido2=apellido2;
    this.fechaNacimiento=fechaNacimiento;
    this.dni=dni;
    this.curso=curso;

    this.nombreCompleto = function (){
        var nombreComple = this.nombre + " " + this.apellido1 + " " + this.apellido2
        return nombreComple;
    }
    this.edad = function(){
        return new Date().getFullYear()-this.fechaNacimiento.substr(-4);
    }

    this.letraDNI = function(){
        return this.dni.substr(-1);
    }

    this.validarDni = function(){
       var numero=this.dni.substr(0,this.dni.length-1);
        return "TRWAGMYFPDXBNJZSQVHLCKET"[numero%23]==this.letraDNI();
    }
};


