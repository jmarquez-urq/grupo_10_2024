<?php


abstract class Productos {
    protected string $nombre;
    protected string $apellido;
    protected int $telefono;
    protected int $dni;
    protected string $domicilio;
    protected int $numeroDomicilio;
    protected string $localidad;
}

public __construct($nombre, $apellido, $telefono, $dni, $domicilio, $numeroDomicilio, $localidad)
{
    $this->nombre = $nombre;
    $this->apellido = $apellido;
    $this->telefono = $telefono;
    $this->dni = $dni;
    $this->domicilio = $domicilio;
    $this->numeroDomicilio = $numeroDomicilio;
    $this->$localidad;
}

public function getNombreApellido() 
{
    return $this->nombre . " " . $this->apellido;
}

public function getDNI()
{
    return $this->dni;
}

public function getDomicilio()
{
    return $this->domicilio;
}

public function getNumeroDomicilio()
{
    return $this->numeroDomicilio;
}

public function getDomicilio()
{
    return $this->localidad;
}

public abstract function calcularCantidadProductos();

