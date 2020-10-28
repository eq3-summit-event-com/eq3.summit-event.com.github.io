// VALIDATION OF CheckBOX OPTION BOX !  QUESTION 8 


$(function(){
    var button = $('#nextQST8');
    button.attr('disabled','disabled');});

    function callFunction_manger() {
  var checkboxesMen = document.querySelectorAll('input[type="checkbox"][name="manger_M"]');
  var checkboxesWomen = document.querySelectorAll('input[type="checkbox"][name="manger_F"]');
  var checkedOneMen = Array.prototype.slice.call(checkboxesMen).some(x => x.checked);
  var checkedOneWomen = Array.prototype.slice.call(checkboxesWomen).some(y => y.checked);
  var button = $('#nextQST8');
    button.attr('disabled','disabled');
 
  if (checkedOneMen && checkedOneWomen) {
      console.log("both are checked");
      
        button.removeAttr('disabled');  
  }
  else if(checkedOneMen || checkedOneWomen)
  {
    console.log("only one is checked");
    button.attr('disabled','disabled');
  }
  
}


//=====================================================================




// VALIDATION OF CheckBOX OPTION BOX !  QUESTION 10


$(function(){
  var button = $('#nextQST10');
  button.attr('disabled','disabled');});

  function callFunction_crainte() {
var checkboxesMen = document.querySelectorAll('input[type="checkbox"][name="crainte_M"]');
var checkboxesWomen = document.querySelectorAll('input[type="checkbox"][name="crainte_F"]');
var checkedOneMen = Array.prototype.slice.call(checkboxesMen).some(x => x.checked);
var checkedOneWomen = Array.prototype.slice.call(checkboxesWomen).some(y => y.checked);
var button = $('#nextQST10');
  button.attr('disabled','disabled');

if (checkedOneMen && checkedOneWomen) {
    console.log("both are checked");
    
      button.removeAttr('disabled');  
}
else if(checkedOneMen || checkedOneWomen)
{
  console.log("only one is checked");
  button.attr('disabled','disabled');
}

}


//=====================================================================

              /* CHAPITRE 2 */


// VALIDATION OF CheckBOX OPTION BOX !  QUESTION 2


$(function(){
  var button = $('#nextQST2_2');
  button.attr('disabled','disabled');});

  function callFunction_hobby() {
var checkboxesMen = document.querySelectorAll('input[type="checkbox"][name="hobby_M"]');
var checkboxesWomen = document.querySelectorAll('input[type="checkbox"][name="hobby_F"]');
var checkedOneMen = Array.prototype.slice.call(checkboxesMen).some(x => x.checked);
var checkedOneWomen = Array.prototype.slice.call(checkboxesWomen).some(y => y.checked);
var button = $('#nextQST2_2');
  button.attr('disabled','disabled');

if (checkedOneMen && checkedOneWomen) {
    console.log("both are checked");
    
      button.removeAttr('disabled');  
}
else if(checkedOneMen || checkedOneWomen)
{
  console.log("only one is checked");
  button.attr('disabled','disabled');
}

}


//=====================================================================





// VALIDATION OF CheckBOX OPTION BOX !  QUESTION 7 LAst question


$(function(){
  var button = $('.lastQSTChap2');
  button.attr('disabled','disabled');});

  function callFunction_centre() {
var checkboxesMen = document.querySelectorAll('input[type="checkbox"][name="centre_M"]');
var checkboxesWomen = document.querySelectorAll('input[type="checkbox"][name="centre_F"]');
var checkedOneMen = Array.prototype.slice.call(checkboxesMen).some(x => x.checked);
var checkedOneWomen = Array.prototype.slice.call(checkboxesWomen).some(y => y.checked);
var button = $('.lastQSTChap2');
  button.attr('disabled','disabled');

if (checkedOneMen && checkedOneWomen) {
    console.log("both are checked");
    
      button.removeAttr('disabled');  
}
else if(checkedOneMen || checkedOneWomen)
{
  console.log("only one is checked");
  button.attr('disabled','disabled');
}

}


//=====================================================================


