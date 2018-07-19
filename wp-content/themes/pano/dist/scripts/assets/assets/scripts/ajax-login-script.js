(function($) {
	$( document ).ready(function() {
    	// Perform AJAX login on form submit
    	$('form#login').on('submit', function(e){
      		//$('form#login p.status').show().text(ajax_login_object.loadingmessage);
      		var remember = false;
      		if ($('form#login #remember').is(":checked")){
      			remember = true;
      		}
      		$.ajax({
      			type: 'POST',
      			dataType: 'json',
      			url: ajax_login_object.ajaxurl,
      			data: { 
      				'action': 'ajaxlogin', 
      				'username': $('form#login #username').val(), 
      				'password': $('form#login #password').val(), 
      				'remember': remember, 
      				'security': $('form#login #security').val() },
      				success: function(data){
      					$('form#login p.status').text(data.message);
                $('form#login p.status').addClass(data.class)
      					if (data.loggedin === true){
      						document.location.href = ajax_login_object.redirecturl;
      					}
      				}
      			});
      		e.preventDefault();
      	});
    });
})(jQuery); 