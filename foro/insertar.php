<?php
    require_once("bd/bd.php");
    DB::Conectar();
    $imagen = $_FILES['imagen']['tmp_name'];
    $imgContenido = file_get_contents($imagen);
    $imgContenido=base64_encode($imgContenido);
    DB::insertarBD("mensajes",$_POST['usuario'],$_POST['mensaje'],$imgContenido);
    
?>