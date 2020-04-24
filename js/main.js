jQuery(document).ready(function () {
    //global variables
    fare = {
        ahmahm: 20,
        barbar: 20,
        sursur: 20,
        rajraj: 20,
        ahmbar: 100,
        ahmsur: 200,
        ahmraj: 300,
        barsur: 100,
        barraj: 200,
        surraj: 100
    }

    /*Homepage modal*/
    //     setTimeout(function () {
    //         $("#myModal").modal('show')
    //         
    //     
    //     }, 1000);


    setTimeout(function () {
        $(".hmModal").css("display", "block")
    }, 1000);

    $(".hm-close").on("click", function () {
        $(".hmModal").css("display", "none");
    });

    var hmi1 = $("#hmi1").val();
    var hmi2 = $("#hmi2").val();
    $("#hmModal-submit").on("click", function () {
       
        $(".hmform").append('<h3 id="apresult">We will contact you soon.</h3>');
        setTimeout(function(){
           $(".hmModal").css("display","none") 
        },2000);
    });


    /*check fare*/

    $("#home2-submit").on("click", function () {

        // $("#fareresult").reset();

        var fromCity = $("#home2-ddown1").val();
        var toCity = $("#home2-ddown2").val();
        var truck = $("#home2-ddown3").val();

        var cities = fromCity + toCity;
        console.log(cities);

        if (cities in fare) {
            $("#fareresult").text("Your Estimated fare is: " + fare[cities] * truck);
            console.log(fare[cities] * truck);
        } else if (toCity + fromCity in fare) {
            $("#fareresult").text("Your Estimated fare is: " + fare[toCity + fromCity] * truck);
            console.log(fare[toCity + fromCity] * truck);
        }

    });
    
    $("#bif-form").submit(function(e){
       e.preventDefault(e);
    });
    
    $(".cf-1").submit(function(e){
       e.preventDefault(e); 
        $(".cfreq").val("");
        $("#sendM").text("Sent");
    });

    /*bulk inquiry sessionstorage*/

    $("#bif-btnbody").on("click", function () {
        
       

        var name = $("#bif-name").val();
        var contact = $("#bif-contact").val();
        var email = $("#bif-email").val();
        var cname = $("#bif-cname").val();
        var gtype = $("#bif-gtype").val();
        var location = $("#bif-location").val();
        var comments = $("#bif-comments").val();



        if (name != 0 && contact != 0 && email != 0 && cname != 0 && gtype != 0) {

            sessionStorage.setItem('Name', name);
            sessionStorage.setItem('Contact', contact);
            sessionStorage.setItem('Email', email);
            sessionStorage.setItem('Cname', cname);
            sessionStorage.setItem('Gtype', gtype);
            sessionStorage.setItem('Location', location);
            sessionStorage.setItem('Comments', comments);

            /* console.log(sessionStorage.getItem('Name'));
             console.log(sessionStorage.getItem('Contact'));
             console.log(sessionStorage.getItem('Email'));
             console.log(sessionStorage.getItem('Cname'));
             console.log(sessionStorage.getItem('Gtype'));
             console.log(sessionStorage.getItem('Location'));
             console.log(sessionStorage.getItem('Comments'));*/

            /*            set data to table of modal*/
            $("#modalName").text(sessionStorage.getItem('Name'));
            $("#modalCname").text(sessionStorage.getItem('Cname'));
            $("#modalContact").text(sessionStorage.getItem('Contact'));
            $("#modalEmail").text(sessionStorage.getItem('Email'));
            $("#modalGtype").text(sessionStorage.getItem('Gtype'));
            $("#modalLocation").text(sessionStorage.getItem('Location'));
            $("#modalMessage").text(sessionStorage.getItem('Comments'));

            /* setTimeout(function () {
                 $(".bif-modal").css("display", "block")

             }, 2000);*/
            $("#loading").css("display","block");
            setTimeout(function () {
                $(".bif-modal").css("display", "block");
            }, 1000);

            $("#required").css("display", "none");

            // settimeout here   $(".bif-modal").css("display","block");

        } else {
            $("#required").css("display", "block");
        }





    });
    $(".close").on("click", function () {
        $(".bif-modal").css("display", "none");
        $("#bif-name").val("");
        $("#bif-contact").val("");
        $("#bif-email").val("");
        $("#bif-cname").val("");
        $("#bif-gtype").val("");
        $("#bif-location").val("");
        $("#bif-comments").val("");
         $("#loading").css("display","none");
    });





});
