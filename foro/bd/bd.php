<?php
require_once("clases/usuario.php");
class DB
{
    private static $con;

    public static function Conectar()
    {
        self::$con = new PDO('mysql:host=localhost;dbname=foro', 'root','');
    }

    public static function selecBD($tabla, $ultimo):array
    {
        $vector = array();
        $resultado = self::$con->query("SELECT * FROM ".$tabla." WHERE id >='".$ultimo."'");
        while ($registro = $resultado->fetch(PDO::FETCH_OBJ)) {
            $usuario = new usuario($registro->id, $registro->usuario, $registro->mensaje, $registro->fecha, $registro->imagen);
            $vector [] = $usuario;
        }
        
        return $vector;
    }

    /*
    public static function selecLoginBD($tabla, $usuario, $password):array
    {
        $vector = array();
        $resultado = self::$con->query("SELECT * FROM usuarios WHERE NOMBRE= \"".$usuario."\" AND PASSWORD = \"".$password."\";");
        while ($registro = $resultado->fetch(PDO::FETCH_OBJ)) {
            $usuario = new usuario($registro->nombre, $registro->correo, $registro->password, $registro->roles);
            $vector [] = $usuario;
        }

        return $vector;
    }

    public static function borrarBD($tabla, $atributo, $valor)
    {
        $string = "DELETE FROM ".$tabla." WHERE ".$atributo." = "."'".$valor."';";
        $registros = self::$con->exec($string);
    }*/

    public static function insertarBD($tabla, $nombre, $mensaje, $imagen)
    {
        if($imagen!=null)
        {
            $string = "INSERT INTO ".$tabla." (usuario, mensaje, fecha, imagen) VALUES "."('".$nombre."','".$mensaje."', NOW(), '".$imagen."');";
        }
        else{
            $string = "INSERT INTO ".$tabla." (usuario, mensaje, fecha, imagen) VALUES "."('".$nombre."','".$mensaje."', NOW(), NULL);";
        }
        $registros = self::$con->exec($string);
    }
}