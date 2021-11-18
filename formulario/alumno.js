function Alumno(nombre, apellido1, apellido2, fechaNacimiento, dni, curso)
{
    this.nombre=nombre;
    this.apellido1=apellido1;
    this.apellido2=apellido2;
    this.fechaNacimiento=fechaNacimiento;
    this.dni=dni;
    this.curso=curso;

    Alumno.prototype.nombreCompleto = function (){
        var nombreComple = this.nombre + " " + this.apellido1 + " " + this.apellido2
        return nombreComple;
    }
    Alumno.prototype.edad = function(){
        return new Date().getFullYear()-this.fechaNacimiento.substr(-4);
    }

    Alumno.prototype.letraDNI = function(){
        return this.dni.substr(-1);
    }

    Alumno.prototype.validarDni = function(){
    var numero=this.dni.substr(0,this.dni.length-1);
        return "TRWAGMYFPDXBNJZSQVHLCKET"[numero%23]==this.letraDNI().toUpperCase();
    }
};