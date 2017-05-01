
$( document ).ready(function() {


	// WORKS
	// var elems = $( "div.media-card, div.media-card-2, div.media-card" );
	// var i = 0;
	// $( "div.media-card, div.media-card-2, div.media-card" ).css('display','none');
	// function animateNav () {
	// 	$(elems[i++]).css('display','block').addClass("animated rollIn")
	// 	.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', animateNav);
	// }
	// animateNav();

	// WORKS:
	$( "div.media-card" ).css('opacity','0');
	$( "div.media-card" ).each(function (i) {
			// store the item around for use in the 'timeout' function
			var $item = $(this); 
			// execute this function sometime later:
			setTimeout(function() { 
				$item.css('display','block').addClass('magictime spaceInUp');
			}, 200*i);
		});

	$( "div.media-card figure.image" ).hover(
		function() {
			$( $(this).find("img.superimposed") ).fadeIn( 150 );
		}, function() {
			$( $(this).find("img.superimposed") ).fadeOut( 150 );
		}
	);

});
