!(function() {
	 let win = $(window).width();
	 if( win < 1000) {
		$('.website').css({
			'width': '1400px'
		});
	 } 
})()