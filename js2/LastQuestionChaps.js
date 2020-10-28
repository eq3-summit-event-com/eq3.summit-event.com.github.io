

/* FOR  LAST QUESTION ( SAME FOR ALL CHAPITRES ) !!!! */


    //jQuery time
    var current_fs, next_fs, previous_fs; //fieldsets
var left, opacity, scale; //fieldset properties which we will animate
var animating; //flag to prevent quick multi-click glitches

$(document).on('click','.nextlast',function(){
    console.log("teeeeeeest QST LASt ");
	if(animating) return false;
	animating = true;
	
	current_fs = $(this).parent();
	next_fs = $(this).parent().next();
	
	//activate next step on progressbar using the index of next_fs
	$("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");
	

     // RESET THERMOMETRE & NUMBER QUESTIONS ! 
     document.getElementById("Nbr").innerHTML = '# 01';
    document.getElementById("NbrPourcentage").innerHTML = '0%';
    document.getElementById("Pourcentage").style.height = '3%';
    document.getElementById("Pourcentage").style.top = '52.7%';
    // CHANGING BACKGROUND IMAGE OF FIELDSET AFTER A NEW CHAPITRE
   
    document.getElementById("fild2").style.background = 'url(img/chap2.jpg)';
    document.getElementById("fild2").style.backgroundRepeat = 'none';
    document.getElementById("fild2").style.backgroundSize = 'cover';

    document.getElementById("fild3").style.background = 'url(img/chap3.jpg)';
    document.getElementById("fild3").style.backgroundRepeat = 'none';
    document.getElementById("fild3").style.backgroundSize = 'cover';

    document.getElementById("fild4").style.background = 'url(img/chapitre4.jpg)';
    document.getElementById("fild4").style.backgroundRepeat = 'none';
    document.getElementById("fild4").style.backgroundSize = 'cover';

    document.getElementById("fild5").style.background = 'url(img/chap5.jpg)';
    document.getElementById("fild5").style.backgroundRepeat = 'none';
    document.getElementById("fild5").style.backgroundSize = 'cover';

	//show the next fieldset
    next_fs.show(); 


	//hide the current fieldset with style
	current_fs.animate({opacity: 0}, {
		step: function(now, mx) {
			//as the opacity of current_fs reduces to 0 - stored in "now"
			//1. scale current_fs down to 80%
			scale = 1 - (1 - now) * 0.2;
			//2. bring next_fs from the right(50%)
			left = (now * 50)+"%";
			//3. increase opacity of next_fs to 1 as it moves in
			opacity = 1 - now;
			current_fs.css({
        'transform': 'scale('+scale+')',
        //'position': 'absolute',
        //'top':'0px'
      });
			next_fs.css({/*'left': '-36%',*/ 'opacity': opacity,'top':'8px',/*'position':'absolute'*/});
		}, 
        
		duration: 800,   // if u wanna evitate the bug of the shown display use 10 instead of 800 but u'll loose the animation !
		complete: function(){
			current_fs.hide();
			animating = false;
		}, 
		//this comes from the custom easing plugin
		easing: 'easeInOutBack'
	});
     
});

$(document).on('click','.previous2last',function(){

    //console.log("previous last");
// hide the button NEXT CHAPITRE
//document.getElementById("lastQST2").style.visibility = 'hidden';
//console.log(document.getElementById("lastQST").style.visibility == 'hidden');
	if(animating) return false;
	animating = true;
	
	current_fs = $(this).parent();
	previous_fs = $(this).parent().prev();
	
	//de-activate current step on progressbar
	//$("#progressbar li").eq($("fieldset").index(current_fs)).removeClass("active");
	
	//show the previous fieldset
	previous_fs.show(); 

    // Show the Previous Numbers of Question 
    if(document.getElementById("Nbr").innerHTML === '# 05')
        {
            document.getElementById("Nbr").innerHTML = '# 04';
        } 
    else if(document.getElementById("Nbr").innerHTML === '# 04')
    {
        document.getElementById("Nbr").innerHTML = '# 03';
    }
    else if(document.getElementById("Nbr").innerHTML === '# 03')
    {
        document.getElementById("Nbr").innerHTML = '# 02';
    }
    else if(document.getElementById("Nbr").innerHTML === '# 02')
    {
        document.getElementById("Nbr").innerHTML = '# 01';
    }


    // Show the previous pourcentage of thermometre 

    if(document.getElementById("NbrPourcentage").innerHTML === '80%')
        {
            document.getElementById("NbrPourcentage").innerHTML = '60%';
            document.getElementById("Pourcentage").style.height = '278px';
            document.getElementById("Pourcentage").style.top = '37.7%';
            document.getElementById("Pourcentage").style.transition = 'height .6s ease';
            document.getElementById("Pourcentage").style.transition = 'top .6s ease';
            
        } 
    else if(document.getElementById("NbrPourcentage").innerHTML === '60%')
    {
        document.getElementById("NbrPourcentage").innerHTML = '40%';
        document.getElementById("Pourcentage").style.height = '203px';
            document.getElementById("Pourcentage").style.top = '42.7%';
            document.getElementById("Pourcentage").style.transition = 'height .6s ease';
            document.getElementById("Pourcentage").style.transition = 'top .6s ease';
    }
    else if(document.getElementById("NbrPourcentage").innerHTML === '40%')
    {
        document.getElementById("NbrPourcentage").innerHTML = '20%';
        document.getElementById("Pourcentage").style.height = '104px';
            document.getElementById("Pourcentage").style.top = '50.7%';
            document.getElementById("Pourcentage").style.transition = 'height .6s ease';
            document.getElementById("Pourcentage").style.transition = 'top .6s ease';
    }
    else if(document.getElementById("NbrPourcentage").innerHTML === '20%')
    {
        document.getElementById("NbrPourcentage").innerHTML = '0%';
        document.getElementById("Pourcentage").style.height = '47px';
        document.getElementById("Pourcentage").style.top = '57.7%';
        document.getElementById("Pourcentage").style.transition = 'height .6s ease';
            document.getElementById("Pourcentage").style.transition = 'top .6s ease';
    } 

	//hide the current fieldset with style
	current_fs.animate({opacity: 0}, {
		step: function(now, mx) {
			//as the opacity of current_fs reduces to 0 - stored in "now"
			//1. scale previous_fs from 80% to 100%
			scale = 0.8 + (1 - now) * 0.2;
			//2. take current_fs to the right(50%) - from 0%
			left = ((1-now) * 50)+"%";
			//3. increase opacity of previous_fs to 1 as it moves in
			opacity = 1 - now;
			current_fs.css({'left': left ,});
			previous_fs.css({'transform': 'scale('+scale+')', 'opacity': opacity,'position':'absolute'});
		}, 
		duration: 800, 
		complete: function(){
			current_fs.hide();
			animating = false;
		}, 
		//this comes from the custom easing plugin
		easing: 'easeInOutBack'
	});
});

$(".submit").click(function(){
	return false;
})



/*==================================================================================================*/








