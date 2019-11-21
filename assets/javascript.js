$(document).ready(function() {
    $(".infoText").hide("slow", function(){});
    $(".infoText").attr("visible-status", "hide");
    $(".collapseIcon").css({"transform": "rotate(-180deg)"});

    if ("ontouchstart" in document.documentElement){
        $(".cardInfo").addClass("touchScreen")
    }

    $(".collapseIcon").on("click", function(){
        if ($(".infoText").attr("visible-status") == "show"){
            $(".infoText").hide("slow", function(){});
            $(".infoText").attr("visible-status", "hide");
            $(".collapseIcon").css({"transform": "rotate(-180deg)"});
        }else {
            $(".infoText").show("slow", function(){});
            $(".infoText").attr("visible-status", "show");
            $(".collapseIcon").css({"transform": "rotate(0deg)"});
        }
    });

    var num;

    $(".cardInfo").hover( function() {
        num = Math.floor(Math.random() * 4) + 1;
        $(this).addClass("cardOpt" + num)
    },
    
        function() {
            $(this).removeClass("cardOpt" + num);
        })

});

