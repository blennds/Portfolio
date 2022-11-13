$(document).ready(function(){
	$(window).scroll(function(){
		var progress = $(window).scrollTop();
		if (progress > 850) {
$(".animated-progress span").each(function () {
	$(this).animate(
	  {
		width: $(this).attr("data-progress") + "%",
	  },
	  3000
	);
  });
}
})
})

