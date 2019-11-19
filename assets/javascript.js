$(document).ready(function() {
    $(".infoText").show("slow", function(){});
    $(".infoText").attr("visible-status", "show");

    if ("ontouchstart" in document.documentElement){
        $(".cardInfo").addClass("touchScreen")
    }

    $(".info").on("click", function(){
        if ($(".infoText").attr("visible-status") == "show"){
            $(".infoText").hide("slow", function(){});
            $(".infoText").attr("visible-status", "hide");
        }else {
            $(".infoText").show("slow", function(){});
            $(".infoText").attr("visible-status", "show");
        }
    })

});