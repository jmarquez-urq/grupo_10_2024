<?php
//Creamos un nuevo producto según el tipo
if($_POST['tipo'] == 'p') {
    $prod = new ProductoPan($_POST['nombre'], $_POST['apellido'], $_POST['telefono'], $_POST['dni'], $_POST['domicilio'],  $_POST['numeroDomicilio'], $_POST['localidad']);
}
elseif ($_POST['tipo'] == 'c') {
    $prod = new ProductoCarne($_POST['nombre'], $_POST['apellido'], $_POST['telefono'], $_POST['dni'], $_POST['domicilio'],  $_POST['numeroDomicilio'], $_POST['localidad']);
}
