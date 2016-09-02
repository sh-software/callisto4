(function($, window, document, undefined){

	function CallistoMain(){
		console.log('callisto main', $);


		// Sticky sidebar single item
		if(window.matchMedia('(min-width: 768px)').matches) {
            $(".single-rightside").stick_in_parent({
			
			});
        }
        
		$('.single-rightside')
		.on('sticky_kit:bottom', function(e) {
		    $(this).parent().css('position', 'static');
		})
		.on('sticky_kit:unbottom', function(e) {
		    $(this).parent().css('position', 'relative');
		});




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