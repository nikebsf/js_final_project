$(document).ready(function(){
		
      ///Modal function ------------------------  
   // setTimeout(function(){$("#myModal").modal('show')}, 1000);
    //====================================================================================
    
     $("#btnopen").click(function () {
        $("#myForm").show();
    });
    $("#vaform").submit(function(e){
        /*$("#vaname").text(' ');
        $("#vacname").text(' ');
        $("#vaemail").text(' ');*/
        $(".vafield").val("");
        e.preventDefault(e);
        
    });
    $("#btnclose").click(function () {
        $("#myForm").hide();
    });
    
//   $("#vasubmit").on("click",function(){
//       $(".va-header").hide();
//       
//   });
    
    
    
    
var dt = new Date();
var time = dt.getHours() + ":" + dt.getMinutes() + ":" + dt.getSeconds();

    $("#ctime").text(time);
    
});