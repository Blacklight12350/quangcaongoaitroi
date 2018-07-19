jQuery(document).ready(function(){
	var slCity = jQuery('#itemCity');
	var slDistrict = jQuery('#itemDistrict');

	slCity.change(function(){
		var cityName = jQuery(this).val();

		//console.log(cityName);

		slDistrict.find('option').show();

		slDistrict.find('option').each(function(e){
			var _cityName = jQuery(this).attr('data-parent');
			//console.log(_cityName);
			if (_cityName != cityName) jQuery(this).hide();
		});

	});

	// per page , order
});