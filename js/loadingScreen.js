$(document).ready(function(){
    $("#openModal").click(function(){
		$("#loadingBar").show();
		$("#loadingBar").delay(3000).fadeOut("slow");
        
        
        $("#pdfContainer").delay(3000).fadeIn("slow");
    });
});

$(document).ready(function (){
	
	$('body').addClass('loaded');
});
