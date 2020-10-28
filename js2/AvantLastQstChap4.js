

/* FOR  AVANT LAST QUESTION  CHAP 4 !!!! */


    //jQuery time
    var current_fs, next_fs, previous_fs; //fieldsets
var left, opacity, scale; //fieldset properties which we will animate
var animating; //flag to prevent quick multi-click glitches

$(document).on('click','.next2last4',function(){
    console.log("teeeeeeest QST4 AVANT LASt ");
	if(animating) return false;
	animating = true;
	
	current_fs = $(this).parent();
	next_fs = $(this).parent().next();
	
	//activate next step on progressbar using the index of next_fs
	//$("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");
	
	//show the next fieldset
    next_fs.show(); 


    // Show the button NEXT CHAPITRE
    document.getElementById("lastQST4").style.visibility = 'visible';
    

    // showing numbers of next questions
   // document.getElementById("NbrQst").style.visibility = "visible";
   if(document.getElementById("Nbr").innerHTML === '# 01')
   {
       console.log("it s number 1 ");
       document.getElementById("Nbr").innerHTML = '# 02';
   } 
else if(document.getElementById("Nbr").innerHTML === '# 02')
{
   console.log("it s number 2 ");
   document.getElementById("Nbr").innerHTML = '# 03';
}

      // incresing the pourcentage of the thermometre
        
var el =document.getElementById("NbrPourcentage");
var height = el.offsetHeight-22;

var top = el.offsetTop+34.7;

        
        if(document.getElementById("NbrPourcentage").innerHTML === '0%')
            {
                document.getElementById("NbrPourcentage").innerHTML = '50%';
                document.getElementById("Pourcentage").style.height = height + 18.5 +'%';
            document.getElementById("Pourcentage").style.top =  top-18.5 +'%';
                document.getElementById("Pourcentage").style.transition = 'height .6s ease';
                document.getElementById("Pourcentage").style.transition = 'top .6s ease';

            } 
        else if(document.getElementById("NbrPourcentage").innerHTML === '50%')
        {
            document.getElementById("NbrPourcentage").innerHTML = '100%';
            document.getElementById("Pourcentage").style.height = height + 2*18.5 -2.6 +'%';
            document.getElementById("Pourcentage").style.top =  top-2*18.5 +2.6 +'%';
                document.getElementById("Pourcentage").style.transition = 'height .6s ease';
                document.getElementById("Pourcentage").style.transition = 'top .6s ease';
        }
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
			next_fs.css({'left': left, 'opacity': opacity,'top':'0px','position':'absolute'});
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

$(document).on('click','.previous24',function(){
    document.getElementById("lastQST4").style.visibility = 'hidden';
	if(animating) return false;
	animating = true;
	
	current_fs = $(this).parent();
	previous_fs = $(this).parent().prev();
	
	//de-activate current step on progressbar
	//$("#progressbar li").eq($("fieldset").index(current_fs)).removeClass("active");
	
	//show the previous fieldset
	previous_fs.show(); 

    // Show the Previous Numbers of Question 
    if(document.getElementById("Nbr").innerHTML === '# 03')
    {
        console.log("it s number 4 ");
        document.getElementById("Nbr").innerHTML = '# 02';
    } 
    else if(document.getElementById("Nbr").innerHTML === '# 02')
    {
        console.log("it s number 4 ");
        document.getElementById("Nbr").innerHTML = '# 01';
    } 


    
// Show the previous pourcentage of thermometre 
var el =document.getElementById("NbrPourcentage");
var height = el.offsetHeight-22;

var top = el.offsetTop+34.7;

if(document.getElementById("NbrPourcentage").innerHTML === '100%')
{
    document.getElementById("NbrPourcentage").innerHTML = '50%';
    document.getElementById("Pourcentage").style.height = height + 18.5 +'%';
document.getElementById("Pourcentage").style.top =  top-18.5 +'%';
    document.getElementById("Pourcentage").style.transition = 'height .6s ease';
    document.getElementById("Pourcentage").style.transition = 'top .6s ease';

} 
else if(document.getElementById("NbrPourcentage").innerHTML === '50%')
{
document.getElementById("NbrPourcentage").innerHTML = '0%';
document.getElementById("Pourcentage").style.height = height  +'%';
document.getElementById("Pourcentage").style.top =  top+'%';
    document.getElementById("Pourcentage").style.transition = 'height .6s ease';
    document.getElementById("Pourcentage").style.transition = 'top .6s ease';
}
//===============================//
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


