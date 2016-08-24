(function($, window, document, undefined){

	function CallistoMain(){
		console.log('callisto main', $);
		var $toggleBasketPreview = $('#toggleBasketPreview, #closeBasketPreview');

		$toggleBasketPreview.on('click', function( evt ){
			evt.preventDefault();
			$('body').toggleClass('open-right');
		});
	}

	window.CallistoMain = CallistoMain;

	new CallistoMain();

})(jQuery, window, document);