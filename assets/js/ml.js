jQuery(document).ready(function($){
	if (!Modernizr.csstransforms3d) {
    $('label').click(function() {
        $('.animate .front').removeClass('front');
        $(this).addClass('front');
    });
	}
});
        
