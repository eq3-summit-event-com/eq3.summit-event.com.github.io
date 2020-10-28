





// VALIDATION OF RADIO BOX MIX WITH SELECT BOX : QUESTION 9


$(function(){
    var button = $('#nextQST9');
    button.attr('disabled','disabled');
$("input[type='radio'][name='animeau_M']").change(function(){
    if($('#choixAnime1').is(':checked'))
        {
            console.log("oui is checked");
            document.getElementById('animeauAime_Male').style.visibility = "visible";
                  //  $('#animeauAime_M').change(function(e)
                    //{
                        //if(this.selectedIndex)
                        //{
                            $("input[type='radio'][name='animeau_F']").change(function(){
                            if($('#choixAnim3').is(':checked'))
                            {
                                console.log("oui female checked");
                                document.getElementById('animeauAime_Female').style.visibility = "visible";
                                
                                //$('#animeauAime_F').change(function(e)
                               // {
                                     //if(this.selectedIndex)
                                     //{
                                        button.removeAttr('disabled');
                                     //}
                               // })          
                            }
                            else if ($('#choixAnim4').is(':checked') || $('#choixAnim5').is(':checked'))
                            {
                                document.getElementById('animeauAime_Female').style.visibility = "hidden";
                                button.removeAttr('disabled');
                            }
                        })
                        
                    //}})
        }
    else if($('#choixAnim2').is(':checked'))    
        {
            console.log("non is checked");
            document.getElementById('animeauAime_Male').style.visibility = "hidden";
            $("input[type='radio'][name='animeau_F']").change(function(){
            if($('#choixAnim3').is(':checked'))
            {
                document.getElementById('animeauAime_Female').style.visibility = "visible";
                //$('#animeauAime_F').change(function(e)
                //{
                     //if(this.selectedIndex)
                     //{
                        button.removeAttr('disabled');
                     //}
                //})          
            }
            else if ($('#choixAnim4').is(':checked') || $('#choixAnim5').is(':checked'))
            {
                document.getElementById('animeauAime_Female').style.visibility = "hidden";
                button.removeAttr('disabled');
            }
        })
        }

})




$("input[type='radio'][name='animeau_F']").change(function(){
    if($('#choixAnim3').is(':checked'))
        {
            console.log("oui is checked");
            document.getElementById('animeauAime_Female').style.visibility = "visible";
                  //  $('#animeauAime_M').change(function(e)
                    //{
                        //if(this.selectedIndex)
                        //{
                            $("input[type='radio'][name='animeau_M']").change(function(){
                            if($('#choixAnime1').is(':checked'))
                            {
                                console.log("oui male checked");
                                document.getElementById('animeauAime_Male').style.visibility = "visible";
                                
                                //$('#animeauAime_F').change(function(e)
                               // {
                                     //if(this.selectedIndex)
                                     //{
                                        button.removeAttr('disabled');
                                     //}
                               // })          
                            }
                            else if ($('#choixAnim2').is(':checked'))
                            {
                                document.getElementById('animeauAime_Male').style.visibility = "hidden";
                                button.removeAttr('disabled');
                            }
                        })
                        
                    //}})
        }
    else if($('#choixAnim4').is(':checked') || $('#choixAnim5').is(':checked'))    
        {
            console.log("non is checked");
            document.getElementById('animeauAime_Female').style.visibility = "hidden";
            $("input[type='radio'][name='animeau_M']").change(function(){
            if($('#choixAnim1').is(':checked'))
            {
                document.getElementById('animeauAime_Male').style.visibility = "visible";
                //$('#animeauAime_F').change(function(e)
                //{
                     //if(this.selectedIndex)
                     //{
                        button.removeAttr('disabled');
                     //}
                //})          
            }
            else if ($('#choixAnim2').is(':checked') )
            {
                document.getElementById('animeauAime_Male').style.visibility = "hidden";
                button.removeAttr('disabled');
            }
        })
        }

})
});


//============================================================================================================//

                    /* CHAPITRE 2 */





// VALIDATION OF RADIO BOX MIX WITH SELECT BOX : QUESTION 3


$(function(){
    var button = $('#nextQST3_2');
    button.attr('disabled','disabled');
$("input[type='radio'][name='sortir_M']").change(function(){
    if($('#choixSortir1').is(':checked'))
        {
            console.log("oui is checked");
            document.getElementById('sortirAime_Male').style.visibility = "visible";
                   /* $('#sortirAime_M').change(function(e)
                    {
                        if(this.selectedIndex)
                        {*/
                            $("input[type='radio'][name='sortir_F']").change(function(){
                            if($('#choixSortir3').is(':checked'))
                            {
                                document.getElementById('sortirAime_Female').style.visibility = "visible";
                              /* $('#sortirAime_F').change(function(e)
                                {
                                     if(this.selectedIndex)
                                     {*/
                                        button.removeAttr('disabled');
                                     /*}
                                }) */         
                            }
                            else if($('#choixSortir4').is(':checked') || $('#choixSortir5').is(':checked'))
                            {
                                document.getElementById('sortirAime_Female').style.visibility = "hidden";
                                button.removeAttr('disabled');
                            }
                        })
                        
       // }})
        }
    else if($('#choixSortir2').is(':checked'))    
        {
            console.log("non is checked");
            document.getElementById('sortirAime_Male').style.visibility = "hidden";
            $("input[type='radio'][name='sortir_F']").change(function(){
            if($('#choixSortir3').is(':checked'))
            {
                document.getElementById('sortirAime_Female').style.visibility = "visible";
               /* $('#sortirAime_F').change(function(e)
                {
                     if(this.selectedIndex)
                     {*/
                        button.removeAttr('disabled');
                    // }
               // })          
            }
            else if($('#choixSortir4').is(':checked') || $('#choixSortir5').is(':checked'))
            {
                document.getElementById('sortirAime_Female').style.visibility = "hidden";
                button.removeAttr('disabled');
            }
        })
        }

})






$("input[type='radio'][name='sortir_M']").change(function(){
    if($('#choixSortir3').is(':checked'))
        {
            console.log("oui is checked");
            document.getElementById('sortirAime_Female').style.visibility = "visible";
                   /* $('#sortirAime_M').change(function(e)
                    {
                        if(this.selectedIndex)
                        {*/
                            $("input[type='radio'][name='sortir_M']").change(function(){
                            if($('#choixSortir1').is(':checked'))
                            {
                                document.getElementById('sortirAime_Male').style.visibility = "visible";
                              /* $('#sortirAime_F').change(function(e)
                                {
                                     if(this.selectedIndex)
                                     {*/
                                        button.removeAttr('disabled');
                                     /*}
                                }) */         
                            }
                            else if($('#choixSortir2').is(':checked'))
                            {
                                document.getElementById('sortirAime_Male').style.visibility = "hidden";
                                button.removeAttr('disabled');
                            }
                        })
                        
       // }})
        }
    else if($('#choixSortir4').is(':checked') || $('#choixSortir5').is(':checked'))    
        {
            console.log("non is checked");
            document.getElementById('sortirAime_Female').style.visibility = "hidden";
            $("input[type='radio'][name='sortir_M']").change(function(){
            if($('#choixSortir1').is(':checked'))
            {
                document.getElementById('sortirAime_Male').style.visibility = "visible";
               /* $('#sortirAime_F').change(function(e)
                {
                     if(this.selectedIndex)
                     {*/
                        button.removeAttr('disabled');
                    // }
               // })          
            }
            else if($('#choixSortir2').is(':checked') )
            {
                document.getElementById('sortirAime_Male').style.visibility = "hidden";
                button.removeAttr('disabled');
            }
        })
        }

})




});


//============================================================================================================//



            /* CHAPITRE 3 */


// VALIDATION OF RADIO BOX MIX WITH SELECT BOX : QUESTION 6


$(function(){
    var button = $('#nextQST6_3');
    button.attr('disabled','disabled');
$("input[type='radio'][name='faireEnfant_M']").change(function(){
    if($('#choixEnfant1').is(':checked'))
        {
            console.log("oui is checked");
            document.getElementById('Enfant_Male').style.visibility = "visible";
                   /* $('#Enfant1_M').change(function(e)
                    {
                        if(this.selectedIndex)
                        {
                            $('#Enfant2_M').change(function(e)
                            {
                                if(this.selectedIndex)
                                {*/
                                    $("input[type='radio'][name='faireEnfant_F']").change(function(){
                                    if($('#choixEnfant3').is(':checked'))
                                    {
                                        document.getElementById('Enfant_Female').style.visibility = "visible";
                                       /* $('#Enfant1_F').change(function(e)
                                        {
                                            if(this.selectedIndex)
                                            {
                                                $('#Enfant2_F').change(function(e)
                                                {
                                                    if(this.selectedIndex)
                                                    {*/
                                                button.removeAttr('disabled');
                                                    //}
                                               // })    
                                           // }
                                       // })          
                                    }
                                    else if($('#choixEnfant4').is(':checked') || $('#choixEnfant5').is(':checked'))
                                    {
                                        document.getElementById('Enfant_Female').style.visibility = "hidden";
                                        button.removeAttr('disabled');
                                    }
                                 /* })
                                }
                            })
                        }
                    })*/
        })
    }   
    else if($('#choixEnfant2').is(':checked'))    
        {
            console.log("non is checked");
            document.getElementById('Enfant_Male').style.visibility = "hidden";
            $("input[type='radio'][name='faireEnfant_F']").change(function(){
            if($('#choixEnfant3').is(':checked'))
            {
                document.getElementById('Enfant_Female').style.visibility = "visible";
              /*  $('#Enfant1_F').change(function(e)
                {
                    if(this.selectedIndex)
                    {
                        $('#Enfant2_F').change(function(e)
                        {
                            if(this.selectedIndex)
                            {*/
                        button.removeAttr('disabled');
                            /*}
                        })    
                    }
                })         */  
            }
            else if ($('#choixEnfant4').is(':checked') || $('#choixEnfant5').is(':checked'))
             {
                document.getElementById('Enfant_Female').style.visibility = "hidden";
                 button.removeAttr('disabled');
              }
        })
        }

})





$("input[type='radio'][name='faireEnfant_F']").change(function(){
    if($('#choixEnfant3').is(':checked'))
        {
            console.log("oui is checked");
            document.getElementById('Enfant_Female').style.visibility = "visible";
                   /* $('#Enfant1_M').change(function(e)
                    {
                        if(this.selectedIndex)
                        {
                            $('#Enfant2_M').change(function(e)
                            {
                                if(this.selectedIndex)
                                {*/
                                    $("input[type='radio'][name='faireEnfant_M']").change(function(){
                                    if($('#choixEnfant1').is(':checked'))
                                    {
                                        document.getElementById('Enfant_Male').style.visibility = "visible";
                                       /* $('#Enfant1_F').change(function(e)
                                        {
                                            if(this.selectedIndex)
                                            {
                                                $('#Enfant2_F').change(function(e)
                                                {
                                                    if(this.selectedIndex)
                                                    {*/
                                                button.removeAttr('disabled');
                                                    //}
                                               // })    
                                           // }
                                       // })          
                                    }
                                    else if($('#choixEnfant2').is(':checked') )
                                    {
                                        document.getElementById('Enfant_Male').style.visibility = "hidden";
                                        button.removeAttr('disabled');
                                    }
                                 /* })
                                }
                            })
                        }
                    })*/
        })
    }   
    else if($('#choixEnfant4').is(':checked') || $('#choixEnfant5').is(':checked'))    
        {
            console.log("non is checked");
            document.getElementById('Enfant_Female').style.visibility = "hidden";
            $("input[type='radio'][name='faireEnfant_M']").change(function(){
            if($('#choixEnfant1').is(':checked'))
            {
                document.getElementById('Enfant_Male').style.visibility = "visible";
              /*  $('#Enfant1_F').change(function(e)
                {
                    if(this.selectedIndex)
                    {
                        $('#Enfant2_F').change(function(e)
                        {
                            if(this.selectedIndex)
                            {*/
                        button.removeAttr('disabled');
                            /*}
                        })    
                    }
                })         */  
            }
            else if ($('#choixEnfant2').is(':checked') )
             {
                document.getElementById('Enfant_Male').style.visibility = "hidden";
                 button.removeAttr('disabled');
              }
        })
        }

})
});


//============================================================================================================//




// VALIDATION OF RADIO BOX MIX WITH SELECT BOX : QUESTION 8


$(function(){
    var button = $('#nextQST8_3');
    button.attr('disabled','disabled');
$("input[type='radio'][name='tromperr_M']").change(function(){
    if($('#choixTromper1').is(':checked'))
        {
            console.log("oui is checked");
            document.getElementById('Tromper_Male').style.visibility = "visible";
                   /* $('#Tromper_M').change(function(e)
                    {
                        if(this.selectedIndex)
                        {*/
                            $("input[type='radio'][name='tromperr_F']").change(function(){
                            if($('#choixTromper3').is(':checked'))
                            {
                                document.getElementById('Tromper_Female').style.visibility = "visible";
                                /*$('#Tromper_F').change(function(e)
                                {
                                     if(this.selectedIndex || !this.selectedIndex)
                                     {
                                        button.removeAttr('disabled');
                                     
                                    } 
                                    if($('#choixTromper4').is(':checked')){
                                        document.getElementById('Tromper_Female').style.visibility = "hidden";*/
                                button.removeAttr('disabled');
                                    //}        
                            }
                            else if($('#choixTromper4').is(':checked'))
                            {
                                document.getElementById('Tromper_Female').style.visibility = "hidden";
                                button.removeAttr('disabled');
                            }
                        })
                        
                    }
                //})
        //}
    else if($('#choixTromper2').is(':checked'))    
        {
            console.log("non is checked");
            document.getElementById('Tromper_Male').style.visibility = "hidden";
            $("input[type='radio'][name='tromperr_F']").change(function(){
            if($('#choixTromper3').is(':checked'))
            {
                document.getElementById('Tromper_Female').style.visibility = "visible";
              /*  $('#Tromper_F').change(function(e)
                {
                     if(this.selectedIndex)
                     {*/
                        button.removeAttr('disabled');
                    /* }
                })   */       
            }
            else if ($('#choixTromper4').is(':checked'))
            {
                document.getElementById('Tromper_Female').style.visibility = "hidden";
                button.removeAttr('disabled');
            }
        })
        }

})






$("input[type='radio'][name='tromperr_F']").change(function(){
    if($('#choixTromper3').is(':checked'))
        {
            console.log("oui is checked");
            document.getElementById('Tromper_Female').style.visibility = "visible";
                   /* $('#Tromper_M').change(function(e)
                    {
                        if(this.selectedIndex)
                        {*/
                            $("input[type='radio'][name='tromperr_M']").change(function(){
                            if($('#choixTromper1').is(':checked'))
                            {
                                document.getElementById('Tromper_Male').style.visibility = "visible";
                                /*$('#Tromper_F').change(function(e)
                                {
                                     if(this.selectedIndex)
                                     {*/
                                        button.removeAttr('disabled');
                                     /*}
                                })*/          
                            }
                            else if($('#choixTromper2').is(':checked'))
                            {
                                document.getElementById('Tromper_Male').style.visibility = "hidden";
                                button.removeAttr('disabled');
                            }
                        })
                        
                    }
                //})
        //}
    else if($('#choixTromper4').is(':checked'))    
        {
            console.log("non is checked");
            document.getElementById('Tromper_Female').style.visibility = "hidden";
            $("input[type='radio'][name='tromperr_M']").change(function(){
            if($('#choixSortir1').is(':checked'))
            {
                document.getElementById('Tromper_Male').style.visibility = "visible";
              /*  $('#Tromper_F').change(function(e)
                {
                     if(this.selectedIndex)
                     {*/
                        button.removeAttr('disabled');
                    /* }
                })   */       
            }
            else if ($('choixTromper2').is(':checked'))
            {
                document.getElementById('Tromper_Male').style.visibility = "hidden";
                button.removeAttr('disabled');
            }
        })
        }

})
});
//============================================================================================================//




// VALIDATION OF RADIO BOX MIX WITH SELECT BOX : QUESTION 9


$(function(){
    var button = $('#nextQST9_3');
    button.attr('disabled','disabled');
$("input[type='radio'][name='amis_M']").change(function(){
    if($('#choixAmis1').is(':checked'))
        {
            console.log("oui is checked");
            document.getElementById('connait_Male').style.visibility = "visible";
                    /*$('#connait_M').change(function(e)
                    {
                        if(this.selectedIndex)
                        {*/
                            $("input[type='radio'][name='amis_F']").change(function(){
                            if($('#choixAmis3').is(':checked'))
                            {
                                document.getElementById('connait_Female').style.visibility = "visible";
                               /* $('#connait_F').change(function(e)
                                {
                                     if(this.selectedIndex)
                                     {*/
                                        button.removeAttr('disabled');
                                     /*}
                                }) */         
                            }
                            else if ($('choixAmis4').is(':checked'))
                            {
                                document.getElementById('connait_Female').style.visibility = "hidden";
                                button.removeAttr('disabled');
                            }
                        })
                        
                    }
                //})
        //}
    else if($('#choixAmis2').is(':checked'))    
        {
            console.log("non is checked");
            document.getElementById('connait_Male').style.visibility = "hidden";
            $("input[type='radio'][name='amis_F']").change(function(){
                if($('#choixAmis3').is(':checked'))
                {
                    document.getElementById('connait_Female').style.visibility = "visible";
                   /* $('#connait_F').change(function(e)
                    {
                         if(this.selectedIndex)
                         {*/
                            button.removeAttr('disabled');
                        /* }
                    })  */        
                }
                else if ($('choixAmis4').is(':checked'))
                {
                    document.getElementById('connait_Female').style.visibility = "hidden";
                    button.removeAttr('disabled');
                }
        })
        }

})






$("input[type='radio'][name='amis_F']").change(function(){
    if($('#choixAmis3').is(':checked'))
        {
            console.log("oui is checked");
            document.getElementById('connait_Female').style.visibility = "visible";
                    /*$('#connait_M').change(function(e)
                    {
                        if(this.selectedIndex)
                        {*/
                            $("input[type='radio'][name='amis_M']").change(function(){
                            if($('#choixAmis1').is(':checked'))
                            {
                                document.getElementById('connait_Male').style.visibility = "visible";
                               /* $('#connait_F').change(function(e)
                                {
                                     if(this.selectedIndex)
                                     {*/
                                        button.removeAttr('disabled');
                                     /*}
                                }) */         
                            }
                            else if ($('choixAmis2').is(':checked'))
                            {
                                document.getElementById('connait_Male').style.visibility = "hidden";
                                button.removeAttr('disabled');
                            }
                        })
                        
                    }
                //})
        //}
    else if($('#choixAmis4').is(':checked'))    
        {
            console.log("non is checked");
            document.getElementById('connait_Female').style.visibility = "hidden";
            $("input[type='radio'][name='amis_M']").change(function(){
                if($('#choixAmis1').is(':checked'))
                {
                    document.getElementById('connait_Male').style.visibility = "visible";
                   /* $('#connait_F').change(function(e)
                    {
                         if(this.selectedIndex)
                         {*/
                            button.removeAttr('disabled');
                        /* }
                    })  */        
                }
                else if ($('choixAmis2').is(':checked'))
                {
                    document.getElementById('connait_Male').style.visibility = "hidden";
                    button.removeAttr('disabled');
                }
        })
        }

})


});
//============================================================================================================//




                    /* CHAPITRE 4 */


// VALIDATION OF RADIO BOX MIX WITH SELECT BOX : QUESTION 1


$(function(){
    var button = $('#nextQST1_4');
    button.attr('disabled','disabled');
$("input[type='radio'][name='religion_M']").change(function(){
    if($('#choixReligion1').is(':checked'))
        {
            console.log("oui is checked");
            document.getElementById('si_oui_M').style.visibility = "visible";
            document.getElementById('si_non_M').style.visibility = "hidden";
                  /*  $('#oui_M').change(function(e)
                    {
                        if(this.selectedIndex)
                        {*/
                            $("input[type='radio'][name='religion_F']").change(function(){
                            if($('#choixReligion3').is(':checked'))
                            {
                                document.getElementById('si_oui_F').style.visibility = "visible";
                                document.getElementById('si_non_F').style.visibility = "hidden";
                               /* $('#oui_F').change(function(e)
                                {
                                     if(this.selectedIndex)
                                     {*/
                                        button.removeAttr('disabled');
                                     /*}
                                }) */         
                            }
                            else if($('#choixReligion4').is(':checked'))
                            {
                                document.getElementById('si_oui_F').style.visibility = "hidden";
                                document.getElementById('si_non_F').style.visibility = "visible";
                                /*$('#non_F').change(function(e)
                                {
                                     if(this.selectedIndex)
                                     {*/
                                        button.removeAttr('disabled');
                                     /*}
                                }) */   
                            }
                        })
                        
                    }
                //})
        //}
    else if($('#choixReligion2').is(':checked'))    
        {
            console.log("non is checked");
            document.getElementById('si_oui_M').style.visibility = "hidden";
            document.getElementById('si_non_M').style.visibility = "visible";
           /* $('#non_M').change(function(e)
            {
                if(this.selectedIndex)
                {*/

                    $("input[type='radio'][name='religion_F']").change(function(){
                        if($('#choixReligion3').is(':checked'))
                        {
                            document.getElementById('si_oui_F').style.visibility = "visible";
                            document.getElementById('si_non_F').style.visibility = "hidden";
                            /*$('#oui_F').change(function(e)
                            {
                                 if(this.selectedIndex)
                                 {*/
                                    button.removeAttr('disabled');
                                /* }
                            })  */        
                        }
                        else if($('#choixReligion4').is(':checked'))
                        {
                            document.getElementById('si_oui_F').style.visibility = "hidden";
                            document.getElementById('si_non_F').style.visibility = "visible";
                            /*$('#non_F').change(function(e)
                            {
                                 if(this.selectedIndex)
                                 {*/
                                    button.removeAttr('disabled');
                                 /*}
                            })   */ 
                        }
                    })
                }
            })      
       
$("input[type='radio'][name='religion_F']").change(function(){
    if($('#choixReligion3').is(':checked'))
        {
            console.log("oui is checked");
            document.getElementById('si_oui_F').style.visibility = "visible";
            document.getElementById('si_non_F').style.visibility = "hidden";
                    /*  $('#oui_M').change(function(e)
                    {
                        if(this.selectedIndex)
                        {*/
                            $("input[type='radio'][name='religion_M']").change(function(){
                            if($('#choixReligion1').is(':checked'))
                            {
                                document.getElementById('si_oui_M').style.visibility = "visible";
                                document.getElementById('si_non_M').style.visibility = "hidden";
                                /* $('#oui_F').change(function(e)
                                {
                                        if(this.selectedIndex)
                                        {*/
                                        button.removeAttr('disabled');
                                        /*}
                                }) */         
                            }
                            else if($('#choixReligion2').is(':checked'))
                            {
                                document.getElementById('si_oui_M').style.visibility = "hidden";
                                document.getElementById('si_non_M').style.visibility = "visible";
                                /*$('#non_F').change(function(e)
                                {
                                        if(this.selectedIndex)
                                        {*/
                                        button.removeAttr('disabled');
                                        /*}
                                }) */   
                            }
                        })
                        
                    }
                //})
        //}
    else if($('#choixReligion4').is(':checked'))    
        {
            console.log("non is checked");
            document.getElementById('si_oui_F').style.visibility = "hidden";
            document.getElementById('si_non_F').style.visibility = "visible";
            /* $('#non_M').change(function(e)
            {
                if(this.selectedIndex)
                {*/

                    $("input[type='radio'][name='religion_M']").change(function(){
                        if($('#choixReligion1').is(':checked'))
                        {
                            document.getElementById('si_oui_M').style.visibility = "visible";
                            document.getElementById('si_non_M').style.visibility = "hidden";
                            /*$('#oui_F').change(function(e)
                            {
                                    if(this.selectedIndex)
                                    {*/
                                    button.removeAttr('disabled');
                                /* }
                            })  */        
                        }
                        else if($('#choixReligion2').is(':checked'))
                        {
                            document.getElementById('si_oui_M').style.visibility = "hidden";
                            document.getElementById('si_non_M').style.visibility = "visible";
                            /*$('#non_F').change(function(e)
                            {
                                    if(this.selectedIndex)
                                    {*/
                                    button.removeAttr('disabled');
                                    /*}
                            })   */ 
                        }
                    })
                }
            })    


});
//============================================================================================================//


            /* CHAPITRE 5 */



// VALIDATION OF RADIO BOX MIX WITH SELECT BOX : QUESTION 1


$(function(){
    var button = $('#nextQST1_5');
    button.attr('disabled','disabled');
$("input[type='radio'][name='Courant']").change(function(){
    if($('#choixCourant1').is(':checked'))
        {
            console.log("oui is checked");
            document.getElementById('non_courant').style.visibility = "hidden";
            button.removeAttr('disabled');
                                    
        }
    else if($('#choixCourant2').is(':checked'))    
        {
            console.log("non is checked");
            document.getElementById('non_courant').style.visibility = "visible";
                 /*   $('#produise').change(function(e)
                    {
                         if(this.selectedIndex)
                         {*/
                            button.removeAttr('disabled');
                        /* }
                    })  */        
        }
        
   })
});
//============================================================================================================//



// VALIDATION OF RADIO BOX MIX WITH SELECT BOX : QUESTION 2


$(function(){
    var button = $('#nextQST2_5');
    button.attr('disabled','disabled');
$("input[type='radio'][name='Commun']").change(function(){
    if($('#choixCommun1').is(':checked'))
        {
            document.getElementById('oui_commun').style.visibility = "visible";
           /* $('#prob').change(function(e)
            {
                 if(this.selectedIndex)
                 {*/
                    button.removeAttr('disabled');
                 /*}
            })  */                        
        }
    else if($('#choixCommun2').is(':checked'))    
        {
            document.getElementById('oui_commun').style.visibility = "hidden";
            console.log("non is checked");
            button.removeAttr('disabled');
        }
                             
        
        
   })
});
//============================================================================================================//
