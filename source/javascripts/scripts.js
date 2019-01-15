 $(document).ready(function(){
        $('[data-toggle="tooltip"]').tooltip(
        {container:'body', trigger: 'hover', placement:"bottom"}
        );   

 $(".new-comment-field").focus(function(){
   $(this).parent().addClass("focused");

  }).blur(function(){
       $(this).parent().removeClass("focused");
  })


	$('.show-comment-toggle').on('click', function(e) {
		$('.notes-list-container').toggleClass("notes-bar-open"); 
	});



  });
