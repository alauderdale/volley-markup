 $(document).ready(function(){
        $('[data-toggle="tooltip"]').tooltip(
        {container:'body', trigger: 'hover', placement:"bottom"}
        );   

 $(".new-comment-field").focus(function(){
   $(this).parent().addClass("focused");
   $('.note-container').addClass("comment-bar-open");

  }).blur(function(){
       $(this).parent().removeClass("focused");
       $('.note-container').removeClass("comment-bar-open");
  })


	$('.show-notes-toggle').on('click', function(e) {
		$('.review-container').toggleClass("notes-bar-open"); 
	});

	$('.show-comment-toggle').on('click', function(e) {
		$('.comments-container').toggleClass("comments-bar-open"); 
	});




  });
