(function($){
	$(document).ready(function(){

		// Show student_add_modal 
		$('a#student_show').click(function(){
			$('#student_add_modal').modal('show');

			return false;
		});



      //Show Single Student Data.                        Document On function is used for accessibility from other page or other location
        $(document).on('click' , 'a#single_show', function () {
            $('#single_student_modal').modal('show');

            let  show_id = $(this).attr('student_id');   //show_id

			$.ajax({

				url : 'inc/ajax/show_single_student.php',
				data : { id : show_id},
				method : "POST",
				success : function (data) {

					//alert(data);

					let single_data = JSON.parse(data);   // By JSON.parse(data) we will convert data into object from string

					//alert(single_data.name);

					$('img#single_student_img').attr('src','media/students/' + single_data.photo);
                	$('h2#single_name').text(single_data.name);
                	$('td#single_name').text(single_data.name);
                	$('td#single_email').text(single_data.email);
                	$('td#single_cell').text(single_data.cell);

				}

			});



             return false;    //for removing # sing from url
        });


        // Add new Student
		$('form#add_student_form').submit(function(e){
			e.preventDefault();

			// Get some input field value 
			let name = $('input[name="name"]').val();
			let email = $('input[name="email"]').val();
			let cell = $('input[name="cell"]').val();


			if ( name == '' || email == '' || cell == '' ) 
			{
				$('.mess').html('<p class="alert alert-danger">All fields are required ! <button class="close" data-dismiss="alert">&times;</button></p>');
			}else {

				$.ajax({
					url : 'inc/ajax/student_add.php',
					data : new FormData(this),
					method : "POST",
					contentType : false,
					processData : false,
					success : function(data){
						//alert(data);
						$('form#add_student_form')[0].reset();
						$('#student_add_modal').modal('hide');
                        $('.mess-all').html(data);               //$('.mess').html(data);  It is used for modal page

                        allStudentData();                        // after inserting information, it will show update only data without page reloading through allStudentData()

					}
				});

			}



		});


// Show All Student Data
		function allStudentData() {
            $.ajax({
            	url : 'inc/ajax/show_all.php',
            	success : function (data) {
            		//alert(data);
            		$('tbody#all_students_data').html(data);
               }

            });

        }

	  allStudentData();   //It is used repeatedly for instand check up of value and report change and getting update data



		//Delete Single Student   Document On function is used for accessibility (delete) from other page or other location

		$(document).on('click','a#delete_student', function () {

			let delete_id = $(this).attr('student_id');   //alert(delete_id);

			let conf = confirm('Are You Sure to Delete it');

			if(conf == true){
                $.ajax({
                    url : 'inc/ajax/delete_student.php',

                    data : {id : delete_id},

                    method : "POST",

                    success : function (data) {

                        // alert(delete_id);

                        $('.mess-all').html('<p class="alert alert-success">Student Data Deleted Successfully ! <button class="close" data-dismiss="alert">&times;</button></p>');

                        allStudentData();
                    }

                });
			}else{
				return false;
			}



			return false;             //removing # sign from href tag
        });





        //Show Single Student Data. access  only for same page
        // $('a#single_show').click(function () {
        //    $('#single_student_modal').modal('show');
        //    return false;
        // });



	});
})(jQuery)