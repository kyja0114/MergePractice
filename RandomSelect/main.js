$(document).ready(function() {
	$("input").click(function()
	{
		var numberoflistitem = $("#choices li").length;
		var randomchildnumber = Math.floor(Math.random()*numberoflistitem);
		
		$("H1").text($("#choices li").eq(randomchildnumber).text());
	});
});