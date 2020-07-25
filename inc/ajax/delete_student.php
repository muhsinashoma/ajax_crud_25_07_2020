<?php


    /**
     * DB Connection
     */
    require_once "../../app/db.php";                     //back two folder from student.php
    require_once "../../app/function.php";               //back two folder from student.php


    echo $id = $_POST['id'];

    $sql = "DELETE FROM students WHERE id = '$id' ";

    $data = $connection -> query($sql);


?>