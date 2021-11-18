<?php
require_once("bd/bd.php");
require_once("clases/usuario.php");
DB::Conectar();

$ultimo = $_GET['ultimo']+1;
$json = DB::selecBD("mensajes",$ultimo);

$json = json_encode($json);

echo $json;
?>