$(document).ready(function() {
    // all custom jQuery will go here
    $("input[type=radio]").css( "border", "3px solid red" );
    $("#mysex_f").click(function(){
        $("#ursex_h").prop( "checked", true );
        $("#ursex_f").removeAttr("checked");
    });

    $("#mysex_h").click(function(){
        $("#ursex_f").prop( "checked", true );
        $("#ursex_h").removeAttr("checked");
    });

    $("#ursex_f").click(function(){
        $("#mysex_h").prop( "checked", true );
        $("#mysex_f").removeAttr("checked");
    });

    $("#ursex_h").click(function(){
        $("#mysex_f").prop( "checked", true );
        $("#mysex_h").removeAttr("checked");
    });

    
    
    $('#start-test').on('click',function () {
        if ($("#mysex_f").prop('checked') == true) {
            //window.location.href="/questionnaire?sex=femme"
            window.location.href="LeTest.html"
        }
        if ($("#mysex_h").prop('checked') == true) {
           // window.location.href="/questionnaire?sex=homme"
             window.location.href="LeTestMale.html"
        }
        if ($("#mysex_h").prop('checked') == false && $("#mysex_f").prop('checked') == false) {
            $("#home-error-civilite_fb").text("Veuillez spécifier votre civilité");
        }
    });
});

