 $(document).ready(function(){
        $('[data-toggle="tooltip"]').tooltip(
        {container:'body', trigger: 'hover', placement:"bottom"}
        );   

 $(".new-comment-field").focus(function(){
   $(this).parent().addClass("focused");

  }).blur(function(){
       $(this).parent().removeClass("focused");
  })


	$('.show-notes-toggle').on('click', function(e) {
		$('.notes-list-container').toggleClass("notes-bar-open"); 
	});

	$('.show-comment-toggle').on('click', function(e) {
		$('.comments-container').toggleClass("comments-bar-open"); 
	});


  // Gets the video src from the data-src on each button

var $videoSrc;  
$('.video-btn').click(function() {
    $videoSrc = $(this).data( "src" );
});
console.log($videoSrc);

  
  
// when the modal is opened autoplay it  
$('#myModal').on('shown.bs.modal', function (e) {
    
// set the video src to autoplay and not to show related video. Youtube related video is like a box of chocolates... you never know what you're gonna get
$("#video").attr('src',$videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0" ); 
})
  


// stop playing the youtube video when I close the modal
$('#myModal').on('hide.bs.modal', function (e) {
    // a poor man's stop video
    $("#video").attr('src',$videoSrc); 
}) 
    
//toggle mobile menu
  $('.menu-toggle').on('click', function(e) {
    $('#main-nav').toggleClass("menu-open"); 
  });


  });
