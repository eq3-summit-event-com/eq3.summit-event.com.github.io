


/* FOR  AVANT LAST QUESTION  CHAP 3 !!!! */


    //jQuery time
    var current_fs, next_fs, previous_fs; //fieldsets
var left, opacity, scale; //fieldset properties which we will animate
var animating; //flag to prevent quick multi-click glitches

$(document).on('click','.next2last3',function(){
    console.log("teeeeeeest QST3 AVANT LASt ");
	if(animating) return false;
	animating = true;
	
	current_fs = $(this).parent();
	next_fs = $(this).parent().next();
	
	
	//show the next fieldset
    next_fs.show(); 


    // Show the button NEXT CHAPITRE
    document.getElementById("lastQST3").style.visibility = 'visible';
    

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
else if(document.getElementById("Nbr").innerHTML === '# 03')
{
   console.log("it s number 3 ");
   document.getElementById("Nbr").innerHTML = '# 04';
}
else if(document.getElementById("Nbr").innerHTML === '# 04')
{
   console.log("it s number 4 ");
   document.getElementById("Nbr").innerHTML = '# 05';
} 

else if(document.getElementById("Nbr").innerHTML === '# 05')
{
   console.log("it s number 4 ");
   document.getElementById("Nbr").innerHTML = '# 06';
} 

else if(document.getElementById("Nbr").innerHTML === '# 06')
{
   console.log("it s number 4 ");
   document.getElementById("Nbr").innerHTML = '# 07';
} 

else if(document.getElementById("Nbr").innerHTML === '# 07')
{
   console.log("it s number 4 ");
   document.getElementById("Nbr").innerHTML = '# 08';
} 

else if(document.getElementById("Nbr").innerHTML === '# 08')
{
   console.log("it s number 4 ");
   document.getElementById("Nbr").innerHTML = '# 09';
} 

else if(document.getElementById("Nbr").innerHTML === '# 09')
{
   console.log("it s number 4 ");
   document.getElementById("Nbr").innerHTML = '# 10';
} 

else if(document.getElementById("Nbr").innerHTML === '# 10')
{
   console.log("it s number 4 ");
   document.getElementById("Nbr").innerHTML = '# 11';
} 

else if(document.getElementById("Nbr").innerHTML === '# 11')
{
   console.log("it s number 4 ");
   document.getElementById("Nbr").innerHTML = '# 12';
} 

else if(document.getElementById("Nbr").innerHTML === '# 12')
{
   console.log("it s number 4 ");
   document.getElementById("Nbr").innerHTML = '# 13';
} 
// incresing the pourcentage of the thermometre
        
var el =document.getElementById("NbrPourcentage");
var height = el.offsetHeight-22;

var top = el.offsetTop+34.7;

        
        if(document.getElementById("NbrPourcentage").innerHTML === '0%')
            {
                document.getElementById("NbrPourcentage").innerHTML = '8%';
                document.getElementById("Pourcentage").style.height = height + 3 +'%';
                document.getElementById("Pourcentage").style.top =  top-3 +'%';
                document.getElementById("Pourcentage").style.transition = 'height .6s ease';
                document.getElementById("Pourcentage").style.transition = 'top .6s ease';

            } 
        else if(document.getElementById("NbrPourcentage").innerHTML === '8%')
        {
            document.getElementById("NbrPourcentage").innerHTML = '16%';
            document.getElementById("Pourcentage").style.height = height + 2*3 +'%';
            document.getElementById("Pourcentage").style.top =  top-2*3 +'%';
                document.getElementById("Pourcentage").style.transition = 'height .6s ease';
                document.getElementById("Pourcentage").style.transition = 'top .6s ease';
        }
        else if(document.getElementById("NbrPourcentage").innerHTML === '16%')
        {
            document.getElementById("NbrPourcentage").innerHTML = '24%';
            document.getElementById("Pourcentage").style.height = height + 3*3 +'%';
                document.getElementById("Pourcentage").style.top =  top-3*3 +'%';
                document.getElementById("Pourcentage").style.transition = 'height .6s ease';
                document.getElementById("Pourcentage").style.transition = 'top .6s ease';
        }
        else if(document.getElementById("NbrPourcentage").innerHTML === '24%')
        {
            document.getElementById("NbrPourcentage").innerHTML = '32%';
            document.getElementById("Pourcentage").style.height = height + 4*3 +'%';
            document.getElementById("Pourcentage").style.top =  top-4*3 +'%';
            document.getElementById("Pourcentage").style.transition = 'height .6s ease';
                document.getElementById("Pourcentage").style.transition = 'top .6s ease';
        } 
       
        else if(document.getElementById("NbrPourcentage").innerHTML === '32%')
        {
            document.getElementById("NbrPourcentage").innerHTML = '40%';
            document.getElementById("Pourcentage").style.height = height + 5*3 +'%';
                document.getElementById("Pourcentage").style.top =  top-5*3 +'%';
            document.getElementById("Pourcentage").style.transition = 'height .6s ease';
                document.getElementById("Pourcentage").style.transition = 'top .6s ease';
        } 
        else if(document.getElementById("NbrPourcentage").innerHTML === '40%')
        {
            document.getElementById("NbrPourcentage").innerHTML = '48%';
            document.getElementById("Pourcentage").style.height = height + 6*3 +'%';
                document.getElementById("Pourcentage").style.top =  top-6*3 +'%';
            document.getElementById("Pourcentage").style.transition = 'height .6s ease';
                document.getElementById("Pourcentage").style.transition = 'top .6s ease';
        } 
        else if(document.getElementById("NbrPourcentage").innerHTML === '48%')
        {
            document.getElementById("NbrPourcentage").innerHTML = '56%';
            document.getElementById("Pourcentage").style.height = height + 7*3 +'%';
                document.getElementById("Pourcentage").style.top =  top-7*3 +'%';
            document.getElementById("Pourcentage").style.transition = 'height .6s ease';
                document.getElementById("Pourcentage").style.transition = 'top .6s ease';
        } 
        else if(document.getElementById("NbrPourcentage").innerHTML === '56%')
        {
            document.getElementById("NbrPourcentage").innerHTML = '64%';
            document.getElementById("Pourcentage").style.height = height + 8*3 +'%';
            document.getElementById("Pourcentage").style.top =  top-8*3 +'%';
            document.getElementById("Pourcentage").style.transition = 'height .6s ease';
                document.getElementById("Pourcentage").style.transition = 'top .6s ease';
        } 
        else if(document.getElementById("NbrPourcentage").innerHTML === '64%')
        {
            document.getElementById("NbrPourcentage").innerHTML = '72%';
            document.getElementById("Pourcentage").style.height = height + 9*3 +'%';
                document.getElementById("Pourcentage").style.top =  top-9*3 +'%';
            document.getElementById("Pourcentage").style.transition = 'height .6s ease';
                document.getElementById("Pourcentage").style.transition = 'top .6s ease';
        } 
        else if(document.getElementById("NbrPourcentage").innerHTML === '72%')
        {
            document.getElementById("NbrPourcentage").innerHTML = '80%';
            document.getElementById("Pourcentage").style.height = height + 10*3 +'%';
            document.getElementById("Pourcentage").style.top =  top-10*3 +'%';
            document.getElementById("Pourcentage").style.transition = 'height .6s ease';
                document.getElementById("Pourcentage").style.transition = 'top .6s ease';
        } 
        else if(document.getElementById("NbrPourcentage").innerHTML === '80%')
        {
            document.getElementById("NbrPourcentage").innerHTML = '88%';
            document.getElementById("Pourcentage").style.height = height + 11*3 +'%';
            document.getElementById("Pourcentage").style.top =  top-11*3 +'%';
            document.getElementById("Pourcentage").style.transition = 'height .6s ease';
                document.getElementById("Pourcentage").style.transition = 'top .6s ease';
        } 
        else if(document.getElementById("NbrPourcentage").innerHTML === '88%')
        {
            document.getElementById("NbrPourcentage").innerHTML = '100%';
            document.getElementById("Pourcentage").style.height = height + 12*3 -2.6 +'%';
            document.getElementById("Pourcentage").style.top =  top-12*3 +1.6 +'%';
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

$(document).on('click','.previous23',function(){
    document.getElementById("lastQST3").style.visibility = 'hidden';
	if(animating) return false;
	animating = true;
	
	current_fs = $(this).parent();
	previous_fs = $(this).parent().prev();
	
	//de-activate current step on progressbar
	//$("#progressbar li").eq($("fieldset").index(current_fs)).removeClass("active");
	
	//show the previous fieldset
	previous_fs.show(); 

    // Show the Previous Numbers of Question 
    if(document.getElementById("Nbr").innerHTML === '# 13')
            {
                console.log("it s number 1 ");
                document.getElementById("Nbr").innerHTML = '# 12';
            } 
        else if(document.getElementById("Nbr").innerHTML === '# 12')
        {
            console.log("it s number 2 ");
            document.getElementById("Nbr").innerHTML = '# 11';
        }
        else if(document.getElementById("Nbr").innerHTML === '# 11')
        {
            console.log("it s number 3 ");
            document.getElementById("Nbr").innerHTML = '# 10';
        }
        else if(document.getElementById("Nbr").innerHTML === '# 10')
        {
            console.log("it s number 4 ");
            document.getElementById("Nbr").innerHTML = '# 09';
        } 
        else if(document.getElementById("Nbr").innerHTML === '# 09')
        {
            console.log("it s number 4 ");
            document.getElementById("Nbr").innerHTML = '# 08';
        } 
        else if(document.getElementById("Nbr").innerHTML === '# 08')
        {
            console.log("it s number 4 ");
            document.getElementById("Nbr").innerHTML = '# 07';
        } 
        else if(document.getElementById("Nbr").innerHTML === '# 07')
        {
            console.log("it s number 4 ");
            document.getElementById("Nbr").innerHTML = '# 06';
        } 
        else if(document.getElementById("Nbr").innerHTML === '# 06')
        {
            console.log("it s number 4 ");
            document.getElementById("Nbr").innerHTML = '# 05';
        } 
        else if(document.getElementById("Nbr").innerHTML === '# 05')
        {
            console.log("it s number 4 ");
            document.getElementById("Nbr").innerHTML = '# 04';
        } 
        else if(document.getElementById("Nbr").innerHTML === '# 04')
        {
            console.log("it s number 4 ");
            document.getElementById("Nbr").innerHTML = '# 03';
        } 
        else if(document.getElementById("Nbr").innerHTML === '# 03')
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
    document.getElementById("NbrPourcentage").innerHTML = '88%';
    document.getElementById("Pourcentage").style.height = height + 11*3 +'%';
    document.getElementById("Pourcentage").style.top =  top-11*3 +'%';
    document.getElementById("Pourcentage").style.transition = 'height .6s ease';
    document.getElementById("Pourcentage").style.transition = 'top .6s ease';

} 
else if(document.getElementById("NbrPourcentage").innerHTML === '88%')
{
document.getElementById("NbrPourcentage").innerHTML = '80%';
document.getElementById("Pourcentage").style.height = height + 10*3 +'%';
document.getElementById("Pourcentage").style.top =  top-10*3 +'%';
    document.getElementById("Pourcentage").style.transition = 'height .6s ease';
    document.getElementById("Pourcentage").style.transition = 'top .6s ease';
}
else if(document.getElementById("NbrPourcentage").innerHTML === '80%')
{
document.getElementById("NbrPourcentage").innerHTML = '72%';
document.getElementById("Pourcentage").style.height = height + 9*3 +'%';
    document.getElementById("Pourcentage").style.top =  top-9*3 +'%';
    document.getElementById("Pourcentage").style.transition = 'height .6s ease';
    document.getElementById("Pourcentage").style.transition = 'top .6s ease';
}
else if(document.getElementById("NbrPourcentage").innerHTML === '72%')
{
document.getElementById("NbrPourcentage").innerHTML = '64%';
document.getElementById("Pourcentage").style.height = height + 8*3 +'%';
document.getElementById("Pourcentage").style.top =  top-8*3 +'%';
document.getElementById("Pourcentage").style.transition = 'height .6s ease';
    document.getElementById("Pourcentage").style.transition = 'top .6s ease';
} 

else if(document.getElementById("NbrPourcentage").innerHTML === '64%')
{
document.getElementById("NbrPourcentage").innerHTML = '56%';
document.getElementById("Pourcentage").style.height = height + 7*3 +'%';
    document.getElementById("Pourcentage").style.top =  top-7*3 +'%';
document.getElementById("Pourcentage").style.transition = 'height .6s ease';
    document.getElementById("Pourcentage").style.transition = 'top .6s ease';
} 
else if(document.getElementById("NbrPourcentage").innerHTML === '56%')
{
document.getElementById("NbrPourcentage").innerHTML = '48%';
document.getElementById("Pourcentage").style.height = height + 6*3 +'%';
    document.getElementById("Pourcentage").style.top =  top-6*3 +'%';
document.getElementById("Pourcentage").style.transition = 'height .6s ease';
    document.getElementById("Pourcentage").style.transition = 'top .6s ease';
} 
else if(document.getElementById("NbrPourcentage").innerHTML === '48%')
{
document.getElementById("NbrPourcentage").innerHTML = '40%';
document.getElementById("Pourcentage").style.height = height + 5*3 +'%';
    document.getElementById("Pourcentage").style.top =  top-5*3 +'%';
document.getElementById("Pourcentage").style.transition = 'height .6s ease';
    document.getElementById("Pourcentage").style.transition = 'top .6s ease';
} 
else if(document.getElementById("NbrPourcentage").innerHTML === '40%')
{
document.getElementById("NbrPourcentage").innerHTML = '32%';
document.getElementById("Pourcentage").style.height = height + 4*3 +'%';
document.getElementById("Pourcentage").style.top =  top-4*3 +'%';
document.getElementById("Pourcentage").style.transition = 'height .6s ease';
    document.getElementById("Pourcentage").style.transition = 'top .6s ease';
} 
else if(document.getElementById("NbrPourcentage").innerHTML === '32%')
{
document.getElementById("NbrPourcentage").innerHTML = '24%';
document.getElementById("Pourcentage").style.height = height + 3*3 +'%';
    document.getElementById("Pourcentage").style.top =  top-3*3 +'%';
document.getElementById("Pourcentage").style.transition = 'height .6s ease';
    document.getElementById("Pourcentage").style.transition = 'top .6s ease';
} 
else if(document.getElementById("NbrPourcentage").innerHTML === '24%')
{
document.getElementById("NbrPourcentage").innerHTML = '16%';
document.getElementById("Pourcentage").style.height = height + 2*3 +'%';
document.getElementById("Pourcentage").style.top =  top-2*3 +'%';
document.getElementById("Pourcentage").style.transition = 'height .6s ease';
    document.getElementById("Pourcentage").style.transition = 'top .6s ease';
} 
else if(document.getElementById("NbrPourcentage").innerHTML === '16%')
{
document.getElementById("NbrPourcentage").innerHTML = '8%';
document.getElementById("Pourcentage").style.height = height + 3 +'%';
document.getElementById("Pourcentage").style.top =  top-3 +'%';
document.getElementById("Pourcentage").style.transition = 'height .6s ease';
    document.getElementById("Pourcentage").style.transition = 'top .6s ease';
} 
else if(document.getElementById("NbrPourcentage").innerHTML === '8%')
{
document.getElementById("NbrPourcentage").innerHTML = '0%';
document.getElementById("Pourcentage").style.height = height  +'%';
document.getElementById("Pourcentage").style.top =  top +'%';
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



