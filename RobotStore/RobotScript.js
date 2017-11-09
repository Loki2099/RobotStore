$(function(){LoadRobotJS();});

function LoadRobotJS(){
	$("fieldset ul li article").each(function(){
		$(this).hover(function(){
			$(this).toggleClass("highLight");
		});
	});

	$(".searchbox").keyup(function(){
		var bots = $("article h4");
		var sbVal = $(".searchbox").val().toLowerCase();
		if(sbVal !== ""){
			$(bots).each(function(){
				var txt = this.innerText.toLowerCase().split(":")[1];
				if(txt.search(sbVal) === -1){$(this).parent().parent().addClass("hidden")}
				else if($(this).parent().parent().hasClass("hidden")){$(this).parent().parent().removeClass("hidden")}
			});
		}
		else{
			bots.each(function(){$(this).parent().parent().removeClass("hidden");});
		}
	});

	$(".searchbox").focusout(function(){
		if($(".searchbox").val() === ""){
			$("fieldset ul li").each(function(){
				if($(this).hasClass("hidden")){$(this).removeClass("hidden")}
			});
		}
	});
}