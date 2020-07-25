<?php

    /**
     * DB Connection
     */
    require_once "../../app/db.php";                     //back two folder from student.php
    require_once "../../app/function.php";               //back two folder from student.php

   $sql = "SELECT * FROM students ORDER BY  id DESC ";
   $data = $connection -> query($sql);

   $i = 1;
   while($all_student_data = $data -> fetch_assoc()) :
  ?>

<tr>
    <td><?php  echo $i++; ?></td>
    <td><?php echo $all_student_data['name'];  ?></td>
    <td><?php echo $all_student_data['email'];  ?></td>
    <td><?php echo $all_student_data['cell'];  ?></td>
    <td><img src="media/students/<?php echo $all_student_data['photo']; ?>" alt=""></td>
    <td>
        <a id="single_show" class="btn btn-sm btn-info" href="#">View</a>
        <a class="btn btn-sm btn-warning" href="#">Edit</a>
        <a class="btn btn-sm btn-danger" href="#">Delete</a>
    </td>
</tr>

<?php endwhile; ?>