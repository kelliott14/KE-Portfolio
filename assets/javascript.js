$(document).ready(function() {
    $(".infoText").hide();
    $(".infoText").attr("visible-status", "hide");

    if ("ontouchstart" in document.documentElement){
        $(".cardInfo").addClass("touchScreen")
    }

    $(".info").on("click", function(){
        if ($(".infoText").attr("visible-status") == "show"){
            $(".infoText").hide();
            $(".infoText").attr("visible-status", "hide");
        }else {
            $(".infoText").show();
            $(".infoText").attr("visible-status", "show");
        }
    })

});