<?php


/**
 * DB Connection
 */
require_once "../../app/db.php";                     //back two folder from student.php
require_once "../../app/function.php";               //back two folder from student.php

//echo "TEST File";
 $id = $_POST['id'];

$sql = "SELECT * FROM students WHERE id = '$id' ";

$data = $connection -> query($sql);

$single_student = $data ->fetch_assoc();

//print_r($single_student);

echo json_encode($single_student);    //showing json data as string . after doing json_encode($single_student) getting data as string





?>