


/* For QUESTIONs !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!*/


// FOR QUESTIONS INSIDE EACH STEP : 
//jQuery time
var current_fs, next_fs, previous_fs; //fieldsets
var left, opacity, scale; //fieldset properties which we will animate
var animating; //flag to prevent quick multi-click glitches

$(document).on('click','.next2_2',function(){
    console.log("teeeeeeest QST ");
	if(animating) return false;
	animating = true;
	
	current_fs = $(this).parent();
	next_fs = $(this).parent().next();
	
                
    next_fs.show(); 

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



        // incresing the pourcentage of the thermometre
        
        var el =document.getElementById("NbrPourcentage");
        var height = el.offsetHeight-22;
        
        var top = el.offsetTop+34.7;
        
             

        if(document.getElementById("NbrPourcentage").innerHTML === '0%')
            {
                document.getElementById("NbrPourcentage").innerHTML = '16%';
                document.getElementById("Pourcentage").style.height = height + 6.1 +'%';
                document.getElementById("Pourcentage").style.top = top-6.1 +'%';
                document.getElementById("Pourcentage").style.transition = 'height .6s ease';
                document.getElementById("Pourcentage").style.transition = 'top .6s ease';

            } 
        else if(document.getElementById("NbrPourcentage").innerHTML === '16%')
        {
            document.getElementById("NbrPourcentage").innerHTML = '32%';
            document.getElementById("Pourcentage").style.height = height + 2*6.1 +'%';
                document.getElementById("Pourcentage").style.top = top-2*6.1 +'%';
                document.getElementById("Pourcentage").style.transition = 'height .6s ease';
                document.getElementById("Pourcentage").style.transition = 'top .6s ease';
        }
        else if(document.getElementById("NbrPourcentage").innerHTML === '32%')
        {
            document.getElementById("NbrPourcentage").innerHTML = '48%';
            document.getElementById("Pourcentage").style.height = height + 3*6.1 +'%';
                document.getElementById("Pourcentage").style.top = top-3*6.1 +'%';
                document.getElementById("Pourcentage").style.transition = 'height .6s ease';
                document.getElementById("Pourcentage").style.transition = 'top .6s ease';
        }
        else if(document.getElementById("NbrPourcentage").innerHTML === '48%')
        {
            document.getElementById("NbrPourcentage").innerHTML = '64%';
            document.getElementById("Pourcentage").style.height = height + 4*6.1 +'%';
            document.getElementById("Pourcentage").style.top = top-4*6.1 +'%';
            document.getElementById("Pourcentage").style.transition = 'height .6s ease';
                document.getElementById("Pourcentage").style.transition = 'top .6s ease';
        } 
        else if(document.getElementById("NbrPourcentage").innerHTML === '64%')
        {
            document.getElementById("NbrPourcentage").innerHTML = '80%';
            document.getElementById("Pourcentage").style.height = height + 5*6.1 +'%';
            document.getElementById("Pourcentage").style.top = top-5*6.1 +'%';
            document.getElementById("Pourcentage").style.transition = 'height .6s ease';
                document.getElementById("Pourcentage").style.transition = 'top .6s ease';
        } 
        else if(document.getElementById("NbrPourcentage").innerHTML === '80%')
        {
            document.getElementById("NbrPourcentage").innerHTML = '100%';
            document.getElementById("Pourcentage").style.height = height + 6*6.1 +'%';
            document.getElementById("Pourcentage").style.top = top-6*6.1 +'%';
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
//}
	
     
});

// FOR BUTTON PREVIOUS ! 


//==========================================================================

$(document).on('click','.previous2_2',function(){
    console.log("PRECEEEDENTTTTT");
// Show the Previous Numbers of Question 

    
         if(document.getElementById("Nbr").innerHTML === '# 07')
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
    console.log(document.getElementById("Nbr").innerHTML);

// Show the previous pourcentage of thermometre 
var el =document.getElementById("NbrPourcentage");
var height = el.offsetHeight-22;

var top = el.offsetTop+34.7;

if(document.getElementById("NbrPourcentage").innerHTML === '100%')
{
    document.getElementById("NbrPourcentage").innerHTML = '80%';
    document.getElementById("Pourcentage").style.height = height + 5*6.1 +'%';
    document.getElementById("Pourcentage").style.top = top-5*6.1 +'%';
    document.getElementById("Pourcentage").style.transition = 'height .6s ease';
    document.getElementById("Pourcentage").style.transition = 'top .6s ease';

} 
else if(document.getElementById("NbrPourcentage").innerHTML === '80%')
{
document.getElementById("NbrPourcentage").innerHTML = '64%';
document.getElementById("Pourcentage").style.height = height + 4*6.1 +'%';
    document.getElementById("Pourcentage").style.top = top-4*6.1 +'%';
    document.getElementById("Pourcentage").style.transition = 'height .6s ease';
    document.getElementById("Pourcentage").style.transition = 'top .6s ease';
}
else if(document.getElementById("NbrPourcentage").innerHTML === '64%')
{
document.getElementById("NbrPourcentage").innerHTML = '48%';
document.getElementById("Pourcentage").style.height = height + 3*6.1 +'%';
    document.getElementById("Pourcentage").style.top = top-3*6.1 +'%';
    document.getElementById("Pourcentage").style.transition = 'height .6s ease';
    document.getElementById("Pourcentage").style.transition = 'top .6s ease';
}
else if(document.getElementById("NbrPourcentage").innerHTML === '48%')
{
document.getElementById("NbrPourcentage").innerHTML = '32%';
document.getElementById("Pourcentage").style.height = height + 2*6.1 +'%';
document.getElementById("Pourcentage").style.top = top-2*6.1 +'%';
document.getElementById("Pourcentage").style.transition = 'height .6s ease';
    document.getElementById("Pourcentage").style.transition = 'top .6s ease';
} 
else if(document.getElementById("NbrPourcentage").innerHTML === '32%')
{
document.getElementById("NbrPourcentage").innerHTML = '16%';
document.getElementById("Pourcentage").style.height = height + 6.1 +'%';
document.getElementById("Pourcentage").style.top = top-6.1 +'%';
document.getElementById("Pourcentage").style.transition = 'height .6s ease';
    document.getElementById("Pourcentage").style.transition = 'top .6s ease';
} 
else if(document.getElementById("NbrPourcentage").innerHTML === '16%')
{
document.getElementById("NbrPourcentage").innerHTML = '0%';
document.getElementById("Pourcentage").style.height = height  +'%';
document.getElementById("Pourcentage").style.top = top +'%';
document.getElementById("Pourcentage").style.transition = 'height .6s ease';
    document.getElementById("Pourcentage").style.transition = 'top .6s ease';
} 

//===============================//

	if(animating) return false;
	animating = true;
	
	current_fs = $(this).parent();
	previous_fs = $(this).parent().prev();
	
	
	//show the previous fieldset
	previous_fs.show(); 
    console.log(document.getElementById("Nbr").innerHTML);
   
    // showing numbers of next questions
        // document.getElementById("NbrQst").style.visibility = "visible";
        


    

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



/*===============================================================================================================*/