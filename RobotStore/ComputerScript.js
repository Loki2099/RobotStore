$(function(){LoadCompJS()});

function LoadCompJS(){
	$("form fieldset p").each(function(){
		$(this).hover(function(){
			$(this).toggleClass("highLightC");
		});
	});



	$("button").click(function(){
		event.preventDefault();
		var results = "";
		$("input[type = checkbox]").each(function(){
			results += this.id + " = " + $(this).prop("checked") + "\n";
		});
		$("input:radio").each(function(){
			results += this.name + " " + this.id + " = " + $(this).prop("checked") + "\n";
		});
		console.log(results);
	});
}