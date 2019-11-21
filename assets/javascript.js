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
    var scheme = {
        1: {
            background: "#B1504E",
            font: "#333333"
        },
        2: {
            background: "#80CAD9",
            font: "#EAE8E4"
        },
        3: {
            background: "#D980A4",
            font: "#EAE8E4"
        },
        4: {
            background: "#123840",
            font: "#EAE8E4"
        }
    }

    $(".cardInfo").hover( function() {
        num = Math.floor(Math.random() * 4) + 1;
        $(this).css("background-color", scheme[num].background);
        $(this).css("color", scheme[num].font);
        $(this).children(".btn").css("color", scheme[num].font);
        $(this).children(".btn").css("border-color", scheme[num].font);
    });

});

