$(function(){LoadRobotJS();});

function LoadRobotJS(){
	$("#robo1").mouseover(function(){lineOver(this);});
	$("#robo1").mouseleave(function(){lineOver(this);});
	$("#robo2").mouseover(function(){lineOver(this);});
	$("#robo2").mouseleave(function(){lineOver(this);});
	$("#robo3").mouseover(function(){lineOver(this);});
	$("#robo3").mouseleave(function(){lineOver(this);});


	function lineOver(emt){$(emt).toggleClass("HighLightR");}
}