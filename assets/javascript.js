$(document).ready(function() {
    $(".infoText").hide("slow", function(){});
    $(".infoText").attr("visible-status", "hide");
    $(".collapseIcon").css({"transform": "rotate(0deg)"});

    if ("ontouchstart" in document.documentElement){
        $(".cardInfo").addClass("touchScreen")
    }

    $(".collapseIcon").on("click", function(){
        if ($(".infoText").attr("visible-status") == "show"){
            $(".infoText").hide("slow", function(){});
            $(".infoText").attr("visible-status", "hide");
            $(".collapseIcon").css({"transform": "rotate(0deg)"});
        }else {
            $(".infoText").show("slow", function(){});
            $(".infoText").attr("visible-status", "show");
            $(".collapseIcon").css({"transform": "rotate(-180deg)"});
        }
    })

});