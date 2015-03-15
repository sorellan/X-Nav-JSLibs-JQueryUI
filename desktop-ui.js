jQuery(document).ready(function() {
	var element;
	$(function() {
        $(".draggable").draggable({
	  		drag: function(event, ui){
	  		element = $(this);
	  		}
		});        
    });

	$("#paperbin").droppable({
	  drop: function(event, ui){
		$(this).attr("src","/images/paper-full.png");
		element.toggle("explode");
	  }
	});

	$(function() {
    	$( "#datepicker" ).datepicker({
      		showButtonPanel: true
    	});
  	});

	$("#menu").click(function() {
		$("#conjunto1").toggle( "slide", 500 );
		$("#conjunto2").toggle( "slide", 600 )
	});

	$("#power").click(function(){
		$("#message").removeClass("hidden").dialog();
	});
});


       