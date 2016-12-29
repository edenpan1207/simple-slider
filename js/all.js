$(document).ready(function(){
	// picture auto play
	var autoPlay = true;
	
	// add active
	$('.slider').hide();
	$('.slider').first().addClass('active');
	$('.active').show();
	
	// click arrow to next
	$('.arrow-right').on('click', nextSlide);
	
	// click arrow to prev
	$('.arrow-left').on('click', prevSlide);
	
	// auto play 
	if(autoPlay == true){
		setInterval(nextSlide,5000);
	}
	
  
	function nextSlide(){
		$('.activeProcess').removeClass('activeProcess');
		$('.active').removeClass('active').addClass('activeProcess');
		if($('.activeProcess').is(':last-child')){
			$('.slider').first().addClass('active');
		} else {
			$('.activeProcess').next().addClass('active');
		}
		
		$('.slider').fadeOut(500);
		$('.active').fadeIn(500);
	}
	
	function prevSlide(){
		$('.activeProcess').removeClass('activeProcess');
		$('.active').removeClass('active').addClass('activeProcess');
		if($('.activeProcess').is(':first-child')){
			$('.slider').last().addClass('active');
		} else {
			$('.activeProcess').prev().addClass('active');
		}
		
		$('.slider').fadeOut(500);
		$('.active').fadeIn(500);
	}
});