<?php
    require_once("bd/bd.php");
    DB::Conectar();
    DB::insertarBD("mensajes",$_POST['usuario'],$_POST['mensaje'],$_POST['archivo']);
?>