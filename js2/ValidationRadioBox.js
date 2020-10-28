
// VALIDATION OF RADIO OPTION BOX !  QUESTION 2

$(function(){

    var button = $('#nextQST2');
    button.attr('disabled','disabled');


    $("input[type='radio'][name='taille_M']").change(function(){
  if($(this).is(":checked")){
      console.log(this);
      console.log("men checked");
    $("input[type='radio'][name='taille_F']").change(function(){
        if($(this).is(":checked")){
            console.log("female checked");
            button.removeAttr('disabled');
        }
    })}})
    $("input[type='radio'][name='taille_F']").change(function(){
        if($(this).is(":checked")){
            console.log(this);
            console.log("female checked");
          $("input[type='radio'][name='taille_M']").change(function(){
              if($(this).is(":checked")){
                  console.log("men checked");
                  button.removeAttr('disabled');
              }
          })}})

});

// ===================================================================   

// VALIDATION OF RADIO OPTION BOX !  QUESTION 3


$(function(){
    var button = $('#nextQST3');
    button.attr('disabled','disabled');
    $("input[type='radio'][name='couleur_M']").change(function(){
  if($(this).is(":checked")){
      console.log("men checked");
    $("input[type='radio'][name='couleur_F']").change(function(){
        if($(this).is(":checked")){
            console.log("female checked");
            button.removeAttr('disabled');
        }
    })}})

    
    $("input[type='radio'][name='couleur_F']").change(function(){
        if($(this).is(":checked")){
            console.log("female checked");
          $("input[type='radio'][name='couleur_M']").change(function(){
              if($(this).is(":checked")){
                  console.log("men checked");
                  button.removeAttr('disabled');
              }
          })}})

});


// ===================================================================  

// VALIDATION OF RADIO OPTION BOX !  QUESTION 4


$(function(){
    var button = $('#nextQST4');
    button.attr('disabled','disabled');
    $("input[type='radio'][name='coulchev_M']").change(function(){
  if($(this).is(":checked")){
      console.log("men checked");
    $("input[type='radio'][name='coulchev_F']").change(function(){
        if($(this).is(":checked")){
            console.log("female checked");
            button.removeAttr('disabled');
        }
    })}})

    $("input[type='radio'][name='coulchev_F']").change(function(){
        if($(this).is(":checked")){
            console.log("female checked");
          $("input[type='radio'][name='coulchev_M']").change(function(){
              if($(this).is(":checked")){
                  console.log("men checked");
                  button.removeAttr('disabled');
              }
          })}})

});


// =================================================================== 


// VALIDATION OF RADIO OPTION BOX !  QUESTION 5


$(function(){
    var button = $('#nextQST5');
    button.attr('disabled','disabled');
    $("input[type='radio'][name='longchev_M']").change(function(){
  if($(this).is(":checked")){
      console.log("men checked");
    $("input[type='radio'][name='longchev_F']").change(function(){
        if($(this).is(":checked")){
            console.log("female checked");
            button.removeAttr('disabled');
        }
    })}})

    $("input[type='radio'][name='longchev_F']").change(function(){
        if($(this).is(":checked")){
            console.log("men checked");
          $("input[type='radio'][name='longchev_M']").change(function(){
              if($(this).is(":checked")){
                  console.log("female checked");
                  button.removeAttr('disabled');
              }
          })}})

});


// =================================================================== 
               
                            /* CHAPITRE 2 */


// VALIDATION OF RADIO OPTION BOX !  QUESTION 1


$(function(){
    var button = $('#nextQST1_2');
    button.attr('disabled','disabled');
    $("input[type='radio'][name='fumer_M']").change(function(){
  if($(this).is(":checked")){
      console.log("men checked");
    $("input[type='radio'][name='fumer_F']").change(function(){
        if($(this).is(":checked")){
            console.log("female checked");
            button.removeAttr('disabled');
        }
    })}})

    $("input[type='radio'][name='fumer_F']").change(function(){
        if($(this).is(":checked")){
            console.log("men checked");
          $("input[type='radio'][name='fumer_M']").change(function(){
              if($(this).is(":checked")){
                  console.log("female checked");
                  button.removeAttr('disabled');
              }
          })}})

});


// =================================================================== 



// VALIDATION OF RADIO OPTION BOX !  QUESTION 4


$(function(){
    var button = $('#nextQST4_2');
    button.attr('disabled','disabled');
    $("input[type='radio'][name='vertie_M']").change(function(){
  if($(this).is(":checked")){
      console.log("men checked");
    $("input[type='radio'][name='vertie_F']").change(function(){
        if($(this).is(":checked")){
            console.log("female checked");
            button.removeAttr('disabled');
        }
    })}})

    $("input[type='radio'][name='vertie_F']").change(function(){
        if($(this).is(":checked")){
            console.log("men checked");
          $("input[type='radio'][name='vertie_M']").change(function(){
              if($(this).is(":checked")){
                  console.log("female checked");
                  button.removeAttr('disabled');
              }
          })}})

});


// =================================================================== 

                /* CHAPITRE 3 */

// VALIDATION OF RADIO OPTION BOX !  QUESTION 1


$(function(){
    var button = $('#nextQST1_3');
    button.attr('disabled','disabled');
    $("input[type='radio'][name='proche_M']").change(function(){
  if($(this).is(":checked")){
      console.log("men checked");
    $("input[type='radio'][name='proche_F']").change(function(){
        if($(this).is(":checked")){
            console.log("female checked");
            button.removeAttr('disabled');
        }
    })}})

    $("input[type='radio'][name='proche_F']").change(function(){
        if($(this).is(":checked")){
            console.log("men checked");
          $("input[type='radio'][name='proche_M']").change(function(){
              if($(this).is(":checked")){
                  console.log("female checked");
                  button.removeAttr('disabled');
              }
          })}})
      
});


// =================================================================== 

// VALIDATION OF RADIO OPTION BOX !  QUESTION 2


$(function(){
    var button = $('#nextQST2_3');
    button.attr('disabled','disabled');
    $("input[type='radio'][name='sterile_M']").change(function(){
  if($(this).is(":checked")){
      console.log("men checked");
    $("input[type='radio'][name='sterile_F']").change(function(){
        if($(this).is(":checked")){
            console.log("female checked");
            button.removeAttr('disabled');
        }
    })}})

    $("input[type='radio'][name='sterile_F']").change(function(){
        if($(this).is(":checked")){
            console.log("men checked");
          $("input[type='radio'][name='sterile_M']").change(function(){
              if($(this).is(":checked")){
                  console.log("female checked");
                  button.removeAttr('disabled');
              }
          })}})

});


// =================================================================== 


// VALIDATION OF RADIO OPTION BOX !  QUESTION 3


$(function(){
    var button = $('#nextQST3_3');
    button.attr('disabled','disabled');
    $("input[type='radio'][name='accepte_M']").change(function(){
  if($(this).is(":checked")){
      console.log("men checked");
    $("input[type='radio'][name='accepte_F']").change(function(){
        if($(this).is(":checked")){
            console.log("female checked");
            button.removeAttr('disabled');
        }
    })}})

    $("input[type='radio'][name='accepte_F']").change(function(){
        if($(this).is(":checked")){
            console.log("men checked");
          $("input[type='radio'][name='accepte_M']").change(function(){
              if($(this).is(":checked")){
                  console.log("female checked");
                  button.removeAttr('disabled');
              }
          })}})

});


// =================================================================== 




// VALIDATION OF RADIO OPTION BOX !  QUESTION 5


$(function(){
    var button = $('#nextQST5_3');
    button.attr('disabled','disabled');
    $("input[type='radio'][name='aimeEnfant_M']").change(function(){
  if($(this).is(":checked")){
      console.log("men checked");
    $("input[type='radio'][name='aimeEnfant_F']").change(function(){
        if($(this).is(":checked")){
            console.log("female checked");
            button.removeAttr('disabled');
        }
    })}})

    $("input[type='radio'][name='aimeEnfant_F']").change(function(){
        if($(this).is(":checked")){
            console.log("men checked");
          $("input[type='radio'][name='aimeEnfant_M']").change(function(){
              if($(this).is(":checked")){
                  console.log("female checked");
                  button.removeAttr('disabled');
              }
          })}})

});


// =================================================================== 




// VALIDATION OF RADIO OPTION BOX !  QUESTION 7


$(function(){
    var button = $('#nextQST7_3');
    button.attr('disabled','disabled');
    $("input[type='radio'][name='confiance_M']").change(function(){
  if($(this).is(":checked")){
      console.log("men checked");
    $("input[type='radio'][name='confiance_F']").change(function(){
        if($(this).is(":checked")){
            console.log("female checked");
            button.removeAttr('disabled');
        }
    })}})

    $("input[type='radio'][name='confiance_F']").change(function(){
        if($(this).is(":checked")){
            console.log("men checked");
          $("input[type='radio'][name='confiance_M']").change(function(){
              if($(this).is(":checked")){
                  console.log("female checked");
                  button.removeAttr('disabled');
              }
          })}})

});


// =================================================================== 



// VALIDATION OF RADIO OPTION BOX !  QUESTION 10


$(function(){
    var button = $('#nextQST10_3');
    button.attr('disabled','disabled');
    $("input[type='radio'][name='comporter_M']").change(function(){
  if($(this).is(":checked")){
      console.log("men checked");
    $("input[type='radio'][name='comporter_F']").change(function(){
        if($(this).is(":checked")){
            console.log("female checked");
            button.removeAttr('disabled');
        }
    })}})

    $("input[type='radio'][name='comporter_F']").change(function(){
        if($(this).is(":checked")){
            console.log("men checked");
          $("input[type='radio'][name='comporter_M']").change(function(){
              if($(this).is(":checked")){
                  console.log("female checked");
                  button.removeAttr('disabled');
              }
          })}})

});


// =================================================================== 


// VALIDATION OF RADIO OPTION BOX !  QUESTION 11


$(function(){
    var button = $('#nextQST11_3');
    button.attr('disabled','disabled');
    $("input[type='radio'][name='belle_M']").change(function(){
  if($(this).is(":checked")){
      console.log("men checked");
    $("input[type='radio'][name='belle_F']").change(function(){
        if($(this).is(":checked")){
            console.log("female checked");
            button.removeAttr('disabled');
        }
    })}})


    $("input[type='radio'][name='belle_F']").change(function(){
        if($(this).is(":checked")){
            console.log("men checked");
          $("input[type='radio'][name='belle_M']").change(function(){
              if($(this).is(":checked")){
                  console.log("female checked");
                  button.removeAttr('disabled');
              }
          })}})

});


// =================================================================== 

// VALIDATION OF RADIO OPTION BOX !  QUESTION 12 Avant last


$(function(){
    var button = $('#nextQST12_3');
    button.attr('disabled','disabled');
    $("input[type='radio'][name='recRelation_M']").change(function(){
  if($(this).is(":checked")){
      console.log("men checked");
    $("input[type='radio'][name='recRelation_F']").change(function(){
        if($(this).is(":checked")){
            console.log("female checked");
            button.removeAttr('disabled');
        }
    })}})


    $("input[type='radio'][name='recRelation_F']").change(function(){
        if($(this).is(":checked")){
            console.log("men checked");
          $("input[type='radio'][name='recRelation_M']").change(function(){
              if($(this).is(":checked")){
                  console.log("female checked");
                  button.removeAttr('disabled');
              }
          })}})

});


// =================================================================== 



// VALIDATION OF RADIO OPTION BOX !  QUESTION 13 last


$(function(){
    var button = $('.lastQSTChap3');
    button.attr('disabled','disabled');
    $("input[type='radio'][name='rencRelation_M']").change(function(){
  if($(this).is(":checked")){
      console.log("men checked");
    $("input[type='radio'][name='rencRelation_F']").change(function(){
        if($(this).is(":checked")){
            console.log("female checked");
            button.removeAttr('disabled');
        }
    })}})

    $("input[type='radio'][name='rencRelation_F']").change(function(){
        if($(this).is(":checked")){
            console.log("men checked");
          $("input[type='radio'][name='rencRelation_M']").change(function(){
              if($(this).is(":checked")){
                  console.log("female checked");
                  button.removeAttr('disabled');
              }
          })}})

});


// =================================================================== 


                    /* CHAPITRE 4 */


                    
// VALIDATION OF RADIO OPTION BOX !  QUESTION 2 Avant last


$(function(){
    var button = $('#nextQST2_4');
    button.attr('disabled','disabled');
    $("input[type='radio'][name='tradition_M']").change(function(){
  if($(this).is(":checked")){
      console.log("men checked");
    $("input[type='radio'][name='tradition_F']").change(function(){
        if($(this).is(":checked")){
            console.log("female checked");
            button.removeAttr('disabled');
        }
    })}})


    $("input[type='radio'][name='tradition_F']").change(function(){
        if($(this).is(":checked")){
            console.log("men checked");
          $("input[type='radio'][name='tradition_M']").change(function(){
              if($(this).is(":checked")){
                  console.log("female checked");
                  button.removeAttr('disabled');
              }
          })}})

});


// =================================================================== 


                    
// VALIDATION OF RADIO OPTION BOX !  QUESTION 3  last QST


$(function(){
    var button = $('.lastQSTChap4');
    button.attr('disabled','disabled');
    $("input[type='radio'][name='suivreReligion_M']").change(function(){
  if($(this).is(":checked")){
      console.log("men checked");
    $("input[type='radio'][name='suivreReligion_F']").change(function(){
        if($(this).is(":checked")){
            console.log("female checked");
            button.removeAttr('disabled');
        }
    })}})



    $("input[type='radio'][name='suivreReligion_F']").change(function(){
        if($(this).is(":checked")){
            console.log("men checked");
          $("input[type='radio'][name='suivreReligion_M']").change(function(){
              if($(this).is(":checked")){
                  console.log("female checked");
                  button.removeAttr('disabled');
              }
          })}})

});


// =================================================================== 


                /* CHAPITRE 5 */

// VALIDATION OF RADIO OPTION BOX !  QUESTION 3  


$(function(){
    var button = $('#nextQST3_5');
    button.attr('disabled','disabled');
    $("input[type='radio'][name='parleRelation']").change(function(){
  if($(this).is(":checked")){
     
            button.removeAttr('disabled');
        }
    })

});


// =================================================================== 


// VALIDATION OF RADIO OPTION BOX !  QUESTION 4 


$(function(){
    var button = $('#nextQST4_5');
    button.attr('disabled','disabled');
    $("input[type='radio'][name='appel']").change(function(){
  if($(this).is(":checked")){
     
            button.removeAttr('disabled');
        }
    })

});


// =================================================================== 



// VALIDATION OF RADIO OPTION BOX !  QUESTION 5


$(function(){
    var button = $('#nextQST5_5');
    button.attr('disabled','disabled');
    $("input[type='radio'][name='msg']").change(function(){
  if($(this).is(":checked")){
     
            button.removeAttr('disabled');
        }
    })

});


// =================================================================== 