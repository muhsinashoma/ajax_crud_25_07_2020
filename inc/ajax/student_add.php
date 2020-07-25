<?php  

   //print_r($_POST);

	/**
	 * DB Connection
	 */
	require_once "../../app/db.php";                     //back two folder from student.php
	require_once "../../app/function.php";               //back two folder from student.php

	/**
	 * Value Get
	 */
	$name = $_POST['name'];
	$email = $_POST['email'];
	$cell = $_POST['cell'];



	$data = fileUp($_FILES['photo'],'../../media/students/');          //back two folder from student.php
	$photo_name = $data['file_name'];

    $sql = "INSERT INTO students(name,email,cell,photo) VALUES ('$name', '$email','$cell','$photo_name')";
	$connection ->query($sql);
	echo '<p class="alert alert-success">Student Added Successfully ! <button class="close" data-dismiss="alert">&times;</button></p>';















?>