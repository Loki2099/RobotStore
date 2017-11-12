$(function(){LoadContactJS();});


function LoadContactJS(){
	$("#fullname").focusin(function(){ActiveField(this);});
	$("#fullname").focusout(function(){ActiveField(this);});
	$("#email").focusin(function(){ActiveField(this);});
	$("#email").focusout(function(){ActiveField(this);});
	$("#yloc").focusin(function(){ActiveField(this);});
	$("#yloc").focusout(function(){ActiveField(this);});
	$("textarea[name='quest']").focusin(function(){ActiveField(this);});
	$("textarea[name='quest']").focusout(function(){ActiveField(this);});

	function ActiveField(aip){$(aip).toggleClass("highLight");}
}

