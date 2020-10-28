

// validation of SELECT OPTIONS BOX FOR BIRTHDATE QUESTION 1

 
$(function(){            
    var button = $('#nextQST1');
    button.attr('disabled','disabled');
    
    $('#qst1 select').change(function(e)
     {
        if($('#year_M').val() && $('#month_M').val() && $('#day_M').val() && $('#year_F').val() && $('#month_F').val() && $('#day_F').val())
        {
            button.removeAttr('disabled');
        }
    })
});

/*
$(function(){            
    var button = $('#nextQST1');
    button.attr('disabled','disabled');
    
    
    $('#year_M').change(function(e)
     {
        if(this.selectedIndex)
        {
           $('#month_M').change(function(e)
           {
               if(this.selectedIndex)
              {
                    $('#day_M').change(function(e)
                    {
                        if(this.selectedIndex)
                        {
                            $('#year_F').change(function(e)
                            {
                                if(this.selectedIndex)
                                 {
                                        $('#month_F').change(function(e)
                                        {
                                             if(this.selectedIndex)
                                            {
                                                  $('#day_F').change(function(e)
                                                  {
                                                    if(this.selectedIndex)
                                                    {
                                                    button.removeAttr('disabled');
                                                    }
                                                  })
                                            }
        
                                        })
                                  }
                            })
                        }
                    })
               }
           })
        }
     });               
});
*/
//====================================================================================================================//


    
// ============================== QUESTION BIRTHDATE SELECT BOXES  ===================================================//

var Days = [31,28,31,30,31,30,31,31,30,31,30,31];// index => month [0-11]
$(document).ready(function(){
    var option = '<option  disabled="disabled" value="day">day</option>';
    var selectedDay="day";
    for (var i=1;i <= Days[0];i++){ //add option days
        option += '<option value="'+ i + '">' + i + '</option>';
    }
    option += '<option value="Jenesaispas">Je ne sais pas</option>';
    $('#day_M').append(option);
    $('#day_M').val(selectedDay);
    $('#day_F').append(option);
    $('#day_F').val(selectedDay);

    var option = '<option disabled="disabled" value="month">month</option>';
    var selectedMon ="month";
    for (var i=1;i <= 12;i++){
        option += '<option value="'+ i + '">' + i + '</option>';
    }
    option += '<option value="Jenesaispas">Je ne sais pas</option>';
    $('#month_M').append(option);
    $('#month_M').val(selectedMon);
    $('#month_F').append(option);
    $('#month_F').val(selectedMon);

  
    var d = new Date();
    var option = '<option disabled="disabled" value="year">year</option>';
    selectedYear ="year";
    for (var i=1930;i <= d.getFullYear();i++){// years start i
        option += '<option value="'+ i + '">' + i + '</option>';
    }
    option += '<option value="Jenesaispas">Je ne sais pas</option>';
    $('#year_M').append(option);
    $('#year_M').val(selectedYear);
    $('#year_F').append(option);
    $('#year_F').val(selectedYear);
});

/*============================================================*/
function isLeapYear(year) {
    year = parseInt(year);
    if (year % 4 != 0) {
	      return false;
	  } else if (year % 400 == 0) {
	      return true;
	  } else if (year % 100 == 0) {
	      return false;
	  } else {
	      return true;
	  }
}

/*===========================================================*/

function change_year(select)
{
    if( isLeapYear( $(select).val() ) )
	  {
		    Days[1] = 29;
		    
    }
    else {
        Days[1] = 28;
    }

// FOR MEN //

    if( $("#month_M").val() == 2 )
    {
            var day = $('#day_M');
            var val = $(day).val();
            $(day).empty();
            var option = '<option value="day">day</option>';
            for (var i=1;i <= Days[1];i++){ //add option days
                    option += '<option value="'+ i + '">' + i + '</option>';
        }
            $(day).append(option);
            if( val > Days[ month ] )
            {
                    val = 1;
            }
            $(day).val(val);
        }

// FOR WOMEN //
    if( $("#month_F").val() == 2)
    {
        var day = $('#day_F');
        var val = $(day).val();
        $(day).empty();
        var option = '<option value="day">day</option>';
        for (var i=1;i <= Days[1];i++){ //add option days
                option += '<option value="'+ i + '">' + i + '</option>';
    }
        $(day).append(option);
        if( val > Days[ month ] )
        {
                val = 1;
        }
        $(day).val(val);
    }
  }

/*=======================================================*/

function change_month(select) {

//FOR MEN //
    var dayM = $('#day_M');
    var val = $(dayM).val();
    $(dayM).empty();
    var option = '<option value="day">day</option>';
    var month = parseInt( $(select).val() ) - 1;
    for (var i=1;i <= Days[ month ];i++){ //add option days
        option += '<option value="'+ i + '">' + i + '</option>';
    }
    $(dayM).append(option);
    if( val > Days[ month ] )
    {
        val = 1;
    }
    $(dayM).val(val);

// FOR WOMEN //

    var dayF = $('#day_F');
    var val = $(dayF).val();
    $(dayF).empty();
    var option = '<option value="day">day</option>';
    var month = parseInt( $(select).val() ) - 1;
    for (var i=1;i <= Days[ month ];i++){ //add option days
        option += '<option value="'+ i + '">' + i + '</option>';
    }
    $(dayF).append(option);
    if( val > Days[ month ] )
    {
        val = 1;
    }
    $(dayF).val(val);
}

//===============================================//

/*====================================================================================================================*/




// validation of SELECT OPTIONS BOX FOR  QUESTION 6



$(function(){            
    var button = $('#nextQST6');
    button.attr('disabled','disabled');
    
    
    $('#genreMusic_M').change(function(e)
     {
        if(this.selectedIndex)
        {
           $('#genreMusic_F').change(function(e)
           {
            if(this.selectedIndex)
            {
                button.removeAttr('disabled');
            }   
             })
         }
        
      })


      $('#genreMusic_F').change(function(e)
      {
         if(this.selectedIndex)
         {
            $('#genreMusic_M').change(function(e)
            {
             if(this.selectedIndex)
             {
                 button.removeAttr('disabled');
             }   
              })
          }
         
       })
});
   

//=============================================================================================================//

// validation of SELECT OPTIONS BOX FOR  QUESTION 7



$(function(){            
    var button = $('#nextQST7');
    button.attr('disabled','disabled');
    
    
    $('#signeAstro_M').change(function(e)
     {
        if(this.selectedIndex)
        {
           $('#signeAstro_F').change(function(e)
           {
            if(this.selectedIndex)
            {
                button.removeAttr('disabled');
            }   
             })
         }
        
      })

      $('#signeAstro_F').change(function(e)
     {
        if(this.selectedIndex)
        {
           $('#signeAstro_M').change(function(e)
           {
            if(this.selectedIndex)
            {
                button.removeAttr('disabled');
            }   
             })
         }
        
      })
});

//=============================================================================================================//

// validation of SELECT OPTIONS BOX FOR  QUESTION 11 Avant Last



$(function(){            
    var button = $('#nextQST11');
    button.attr('disabled','disabled');
    
    
    $('#place_M').change(function(e)
     {
        if(this.selectedIndex)
        {
           $('#place_F').change(function(e)
           {
            if(this.selectedIndex)
            {
                button.removeAttr('disabled');
            }   
             })
         }
        
      })

      $('#place_F').change(function(e)
      {
         if(this.selectedIndex)
         {
            $('#place_M').change(function(e)
            {
             if(this.selectedIndex)
             {
                 button.removeAttr('disabled');
             }   
              })
          }
         
       })
});

//=============================================================================================================//


// validation of SELECT OPTIONS BOX FOR  QUESTION 12 Last



$(function(){            
    var button = $('.lastQSTChap1');
    button.attr('disabled','disabled');
    
    
    $('#coulpref_M').change(function(e)
     {
        if(this.selectedIndex)
        {
           $('#coulpref_F').change(function(e)
           {
            if(this.selectedIndex)
            {
                button.removeAttr('disabled');
            }    
             })
         }
        
      })

      $('#coulpref_F').change(function(e)
     {
        if(this.selectedIndex)
        {
           $('#coulpref_M').change(function(e)
           {
            if(this.selectedIndex)
            {
                button.removeAttr('disabled');
            }    
             })
         }
        
      })
});

//=============================================================================================================//   


            /* CHAPITRE 2 */





// validation of SELECT OPTIONS BOX FOR QUESTION 5


$(function(){            
    var button = $('#nextQST5_2');
    button.attr('disabled','disabled');
    

    $('#qstQualite select').change(function(e)
    {
       if($('#qualite1_M').val() && $('#qualite2_M').val() && $('#qualite3_M').val() && $('#qualite1_F').val() && $('#qualite2_F').val() && $('#qualite3_F').val())
       {
           button.removeAttr('disabled');
       }
   });
});
/*
$(function(){            
    var button = $('#nextQST5_2');
    button.attr('disabled','disabled');
    
    
    $('#qualite1_M').change(function(e)
     {
        if(this.selectedIndex)
        {
           $('#qualite2_M').change(function(e)
           {
               if(this.selectedIndex)
              {
                    $('#qualite3_M').change(function(e)
                    {
                        if(this.selectedIndex)
                        {
                            $('#qualite1_F').change(function(e)
                            {
                                if(this.selectedIndex)
                                 {
                                        $('#qualite2_F').change(function(e)
                                        {
                                             if(this.selectedIndex)
                                            {
                                                  $('#qualite3_F').change(function(e)
                                                  {
                                                    if(this.selectedIndex)
                                                    {
                                                      button.removeAttr('disabled');
                                                    }  
                                                  })
                                            }
        
                                        })
                                  }
                            })
                        }
                    })
               }
           })
        }
     });               
});
*/
//====================================================================================================================//




// validation of SELECT OPTIONS BOX FOR QUESTION 6 Avant dernier

$(function(){            
    var button = $('#nextQST6_2');
    button.attr('disabled','disabled');
    

    $('#qstDefaut select').change(function(e)
    {
       if($('#defaut1_M').val() && $('#defaut2_M').val() && $('#defaut3_M').val() && $('#defaut1_F').val() && $('#defaut2_F').val() && $('#defaut3_F').val())
       {
           button.removeAttr('disabled');
       }
   });
});

/*
$(function(){            
    var button = $('#nextQST6_2');
    button.attr('disabled','disabled');
    
    $('#defaut1_M').change(function(e)
     {
        if(this.selectedIndex)
        {
           $('#defaut2_M').change(function(e)
           {
               if(this.selectedIndex)
              {
                    $('#defaut3_M').change(function(e)
                    {
                        if(this.selectedIndex)
                        {
                            $('#defaut1_F').change(function(e)
                            {
                                if(this.selectedIndex)
                                 {
                                        $('#defaut2_F').change(function(e)
                                        {
                                             if(this.selectedIndex)
                                            {
                                                  $('#defaut3_F').change(function(e)
                                                  {
                                                    if(this.selectedIndex)
                                                    {
                                                       button.removeAttr('disabled');
                                                    }
                                                  })
                                            }
        
                                        })
                                  }
                            })
                        }
                    })
               }
           })
        }
     });               
});*/

//====================================================================================================================//


            /* CHAPITRE 3 */




// validation of SELECT OPTIONS BOX FOR  QUESTION 4



$(function(){            
    var button = $('#nextQST4_3');
    button.attr('disabled','disabled');
    
    
    $('#temps_M').change(function(e)
     {
        if(this.selectedIndex)
        {
           $('#temps_F').change(function(e)
           {
            if(this.selectedIndex)
            {
                button.removeAttr('disabled');
            }   
             })
         }
        
      })

      $('#temps_F').change(function(e)
     {
        if(this.selectedIndex)
        {
           $('#temps_M').change(function(e)
           {
            if(this.selectedIndex)
            {
                button.removeAttr('disabled');
            }   
             })
         }
        
      })
});

//=============================================================================================================//   



                    /* CHAPITRE 5*/



// validation of SELECT OPTIONS BOX FOR  QUESTION 6



$(function(){            
    var button = $('#nextQST6_5');
    button.attr('disabled','disabled');
    
    
    $('#PremierRencontre').change(function(e)
     {
        if(this.selectedIndex)
        {
          button.removeAttr('disabled');
        }       
             })
         
        
      });

//=============================================================================================================//   


// validation of SELECT OPTIONS BOX FOR  QUESTION 7



$(function(){            
    var button = $('#nextQST7_5');
    button.attr('disabled','disabled');
    
    
    $('#detester').change(function(e)
     {
        if(this.selectedIndex)
        {
          button.removeAttr('disabled');
        }       
             })
         
        
      });

//=============================================================================================================//   



// validation of SELECT OPTIONS BOX FOR  QUESTION 8 Avant last



$(function(){            
    var button = $('#nextQST8_5');
    button.attr('disabled','disabled');
    
    
    $('#partieAime').change(function(e)
     {
        if(this.selectedIndex)
        {
          button.removeAttr('disabled');
        }       
             })
         
        
      });

//=============================================================================================================//   




// validation of SELECT OPTIONS BOX FOR  QUESTION 9  last QST



$(function(){            
    var button = $('.lastQSTChap5');
    button.attr('disabled','disabled');
    
    
    $('#annee_renconctre').change(function(e)
     {
        if(this.selectedIndex)
        {
          button.removeAttr('disabled');
        }       
             })
         
        
      });

//=============================================================================================================//   


$(document).ready(function(){
var d = new Date();
    var option = '<option disabled="disabled" value="year">year</option>';
    selectedYear ="year";
    for (var i=1930;i <= d.getFullYear();i++){// years start i
        option += '<option value="'+ i + '">' + i + '</option>';
    }
    option += '<option value="Jenesaispas">Je ne sais pas</option>';
    $('#annee_renconctre').append(option);
    $('#annee_renconctre').val(selectedYear);
});