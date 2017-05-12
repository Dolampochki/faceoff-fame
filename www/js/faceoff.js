$(document).ready(function() {
	
	var timerRewatch;
	
	// opening
	$( ".opening-screen" ).addClass(" animated slideInUp");
	$( ".heart-bg" ).addClass(" animated zoomIn");
	
	$(".opening-screen-sound").volume = 0.2;
	$(".opening-screen-sound").trigger('play');
	$( ".opening-screen" ).delay(2000).queue(function(next){
	    $(this).removeClass(" animated slideInUp").addClass(" animated slideOutUp");
	    next();
	});
	
	$( ".heart-bg" ).delay(2000).queue(function(next){
	    $(this).removeClass(" animated zoomIn").addClass(" animated zoomOut");
	    next();
	});	
	
	$(".choose-screen").delay(2000).queue(function(next){
	    $(this).removeClass("hide").addClass(" show animated rotateInUpLeft");
	    $(".sound-video").trigger('play');	    
	    next();
	});
	
	
	// choose
	
	$(".block-radio").click(function(){
		$(".choose-screen").delay(500).queue(function(next){
		    $(this).removeClass(" animated rotateInUpLeft").addClass(" animated slideOutUp");
		    $(".sound-video").trigger('pause');
		    next();
		});
		
		
		if($("#block-radio-2").is(":checked")) {
			$(".result-screen .choose-block").css("background-color","#45a033"); 
			$(".result-screen .choose-block .user-profile-pic").css("background-image","url('http://media.chosen.fm/chosen-fm-images/3c/21/3091d86c09a002e144f4ec506eada3d7/Cover_Upload_51200d29d1fc15f5_a71c1dab4bb54f7c_thumbnail.png')");
			$(".result-screen .choose-block .user-profile-pic-border").css("background-image","url('img/game-userpic-radius-ss-2@3x.png')"); 
			$(".result-screen .block-title span").html("Amii Christine");
			$(".result-screen .screen-title").html("Wrong Choice");
			$(".result-screen .game-large-icon img").attr("src", "img/game_icon_wrong_choice.png");
			$(".result-screen .result-screen-correct").removeClass(" sound-play");
			$(".result-screen .result-screen-wrong").addClass(" sound-play");
		}
		
		if($("#block-radio-3").is(":checked")) {
			$(".result-screen .choose-block").css("background-color","#2382ba"); 
			$(".result-screen .choose-block .user-profile-pic").css("background-image","url('http://media.chosen.fm/chosen-fm-images/0d/2d/c21f4ce780c5c9d774f79841b81fdc6d/Cover_Freestyle_8a3a60ca2371a13f_d1e84043f75f2f31_thumbnail.png')");
			$(".result-screen .choose-block .user-profile-pic-border").css("background-image","url('img/game-userpic-radius-ss-3@3x.png')"); 
			$(".result-screen .block-title span").html("Minnie-Mouse Bonita");
			$(".result-screen .screen-title").html("Wrong Choice");
			$(".result-screen .game-large-icon img").attr("src", "img/game_icon_wrong_choice.png");
			$(".result-screen .result-screen-correct").removeClass(" sound-play");
			$(".result-screen .result-screen-wrong").addClass(" sound-play");
		}
		
		
		
		setTimeout(function(){
			$(".result-screen").removeClass("hide").addClass(" show animated slideInDown");
			$(".sound-play").volume = 0.5;
		    $(".sound-play").trigger('play');
		    $( ".heart-bg" ).removeClass(" animated zoomOut").addClass(" animated zoomIn");
		}, 1000);
		
		setTimeout(function(){
			$(".result-screen").removeClass(" animated rotateInUpLeft").addClass(" animated slideOutUp");
			$( ".heart-bg" ).removeClass(" animated zoomIn").addClass(" animated zoomOut");
		}, 4000);
		
		if($("#block-radio-1").is(":checked")) {
		
			setTimeout(function(){
				$(".xp-screen").removeClass("hide").addClass(" show animated fadeInUp");
				$(".xp-video").trigger('play');
			}, 4200);
			
			setTimeout(function(){
				$(".xp-screen").removeClass(" animated fadeInUp").addClass(" animated fadeOutUp");
			}, 7000);
			
			setTimeout(function(){
				$(".share-screen").removeClass("hide").addClass(" show animated slideInUp");
			}, 7500);		
		} else {
			setTimeout(function(){
				$(".share-screen").removeClass("hide").addClass(" show animated slideInUp");
			}, 4200);
		}
				
		
	});
	
	// rewatch
	
	$(".share-screen .block-1 .review-clip").click(function(){
		$(".card-screen .screen-label").html("Performance <strong>1</strong> from <strong>3</strong>"); 
		$(".card-screen .card-performance-details .screen-title").html("Michaela Carter"); 		
		$(".card-screen .rewatch-video-1").removeClass(" hide").addClass(" rewatch-video");
		$(".card-screen .rewatch-video-2").removeClass(" rewatch-video").addClass(" hide");
		$(".card-screen .rewatch-video-3").removeClass(" rewatch-video").addClass(" hide");
	});
	
	$(".share-screen .block-2 .review-clip").click(function(){
		$(".card-screen .screen-label").html("Performance <strong>2</strong> from <strong>3</strong>"); 
		$(".card-screen .card-performance-details .screen-title").html("Amii Christine"); 
		$(".card-screen .rewatch-video-1").removeClass(" rewatch-video").addClass(" hide");
		$(".card-screen .rewatch-video-2").removeClass(" hide").addClass(" rewatch-video");
		$(".card-screen .rewatch-video-3").removeClass(" rewatch-video").addClass(" hide");
	});
	
	$(".share-screen .block-3 .review-clip").click(function(){
		$(".card-screen .screen-label").html("Performance <strong>3</strong> from <strong>3</strong>"); 
		$(".card-screen .card-performance-details .screen-title").html("Minnie-Mouse Bonita"); 
		$(".card-screen .rewatch-video-1").removeClass(" rewatch-video").addClass(" hide");
		$(".card-screen .rewatch-video-2").removeClass(" rewatch-video").addClass(" hide");
		$(".card-screen .rewatch-video-3").removeClass(" hide").addClass(" rewatch-video");
	});
	
	$(".share-screen .review-clip").click(function(){
		clearTimeout(timerRewatch);
		$(".share-screen").removeClass(" animated slideInRight").addClass(" animated rotateOutDownLeft");
		$(".card-screen").delay(400).queue(function(next){
		    $(this).removeClass("hide animated rotateOutDownRight").addClass(" show animated rotateInUpRight");
		    $('.rewatch-video')[0].currentTime=20;
		    $(".rewatch-video").trigger('play');
		    $(".game-card .card-performance-timer").html("<img src='img/timer.gif?timestamp=" + new Date().getTime() + "' />");
		    next();
		});
		
		timerRewatch = setTimeout(function(){
			$(".card-screen").removeClass(" animated rotateInUpRight").addClass(" animated rotateOutDownRight");
			$(".rewatch-video").trigger('pause');
			$(".share-screen").delay(300).queue(function(next){
			    $(this).removeClass(" animated rotateOutDownLeft").addClass(" animated rotateInUpLeft");
			    next();
			});
			timerRewatch = null;
		}, 15000);
		
	});
	
	// back to share
	
	
	
	$(".card-screen .top-right-icon").click(function(){
		$(".card-screen").removeClass(" animated rotateInUpRight").addClass(" animated rotateOutDownRight");
		$(".rewatch-video").trigger('pause');
		$(".share-screen").delay(300).queue(function(next){
		    $(this).removeClass(" animated rotateOutDownLeft").addClass(" animated rotateInUpLeft");
		    next();
		});
	});		
	
	// next round
	
	$(".share-screen .game-result-button").click(function(){
		location.reload();
	});
	
	

});

