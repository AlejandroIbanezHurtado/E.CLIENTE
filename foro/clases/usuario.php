<?php
class usuario {
    public $id;
    public $usuario;
    public $mensaje;
    public $fecha;
    public $archivo;
    
    public function __construct($id, $usuario, $mensaje, $fecha, $archivo) 
    {
        $this->id = $id;
        $this->usuario = $usuario;
        $this->mensaje = $mensaje;
        $this->fecha = $fecha;
        $this->archivo = $archivo;
    }

    public function getId() {return $this->id; }
    public function getUsuario() {return $this->usuario; }
    public function getMensaje() {return $this->mensaje; }
    public function getFecha() {return $this->fecha; }
    public function getArchivo() {return $this->archivo; }
}