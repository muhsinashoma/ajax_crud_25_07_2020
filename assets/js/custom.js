(function($){
	$(document).ready(function(){

		// Show student_add_modal 
		$('a#student_show').click(function(){
			$('#student_add_modal').modal('show');

			return false;
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
                        $('.mess-all').html(data);                       //$('.mess').html(data);  It is used for modal page


						// $('form#add_student_form')[0].reset();
						// $('#student_add_modal').modal('hide');
						// $('.mess-all').html(data);
						// allStudentData();

					}
				});

			}



		});











	});
})(jQuery)