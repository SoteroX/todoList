//check off specific todos by clicking
$("ul").on("click", "li", function() {
	$(this).toggleClass("completed");
});

//clicking on x deletes todo
$("ul").on("click", "span", function(evt) {
	$(this).parent().fadeOut(500,function() {
		$(this).remove();
	});
	evt.stopPropagation();
});

$("input[type='text']").keypress(function(evt){
	//if keypress is equal to "ENTER"
	if(evt.which === 13){
		//grab text from input
		var todoText = $(this).val();
		$(this).val("");
		//create new li
		$("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>")
	}
});

$('.fa-plus').click(function(){
	$("input[type='text']").fadeToggle();
});