$("ul").on("click","li",function() {
	$(this).toggleClass("completed");
});


$("ul").on("click","i",function(event) {
	$(this).parent().fadeOut(500,function() {
		$(this).remove();
	});
	event.stopPropagation();
});

$("input").keypress(function(event) {

	if (event.which === 13) {
		$("ul").append("<li><i class=\"fa fa-window-close\" aria-hidden=\"true\"></i>  "+$("input").val()+"</li>");
		$("input").val("");
	}
});

$("#redo").click(function() {
	$("input[type='text']").fadeToggle();
});