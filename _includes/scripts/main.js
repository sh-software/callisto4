(function($, window, document, undefined){

	function CallistoMain(){
		console.log('callisto main', $);
		var $toggleBasketPreview = $('#toggleBasketPreview, #closeBasketPreview');

		$toggleBasketPreview.on('click', function( evt ){
			evt.preventDefault();
			$('body').toggleClass('open-right');
		});


		var $toggleListView = $('.toggle-list-view');

		$toggleListView.on('click', function( evt ){
			console.log('toggle-list-view click');
			evt.preventDefault();

			//toggle it's own state
			$toggleListView.toggleClass('grid');

			//toggle internal style of thumbs 
			$('.product-list, .cmp-product-thumb').toggleClass('grid');
			
			// //toggle thumbs size
			// if( $('.product-list').hasClass('grid') ){

			// 	$('.product-list').removeClass('grid').addClass('rows');
			
			// }else if( $('.product-list').hasClass('rows') ){
			
			// 	$('.product-list').removeClass('rows').addClass('grid');
			
			// }
		});

	}

	window.CallistoMain = CallistoMain;

	new CallistoMain();

})(jQuery, window, document);