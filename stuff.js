$(document).ready(function(){
	var a = new Showdown.converter();
	$.get("home.md",function(resp){$("main").html(a.makeHtml(resp));});
	$("#home-link").click(function(){ loadPage("home"); });
	$("#kernels-link").click(function(){ loadPage("kernels"); });
	$("#roms-link").click(function(){ loadPage("roms"); });
	$("#guides-link").click(function(){ loadPage("guides"); });
	function loadPage(page) {
		$.get(page+".md",function(resp){
				$("main").fadeOut(500).html(a.makeHtml(resp)).fadeIn(500);
		});
	}
});