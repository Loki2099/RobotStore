$(function(){LoadRobotJS();});

function LoadRobotJS(){
	$(".thumbnail").each(function(){
		$(this).hover(function(){
			$(this).toggleClass("highLight");
		});
	});

	$(".searchbox").keyup(function(){
		var bots = $(".bot");
		var sbVal = $(".searchbox").val().toLowerCase();
		if(sbVal !== ""){
			$(bots).each(function(){
				var txt = $(this).attr("id");
				if(txt.search(sbVal) === -1){$(this).addClass("hidden")}
				else if($(this).hasClass("hidden")){$(this).removeClass("hidden")}
			});
		}
		else{
			bots.each(function(){
				if($(this).hasClass("hidden")){
					$(this).removeClass("hidden");
				}
			});
		}
	});

	$(".searchbox").focusout(function(){
		if($(".searchbox").val() === ""){
			$("#bots div").each(function(){
				if($(this).hasClass("hidden")){$(this).removeClass("hidden")}
			});
		}
	});
}