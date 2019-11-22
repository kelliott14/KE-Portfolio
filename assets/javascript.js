$(document).ready(function() {
    console.log("Hello. Welcome to my portfolio.")

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
            background: "#048A81",
            font: "#EAE8E4"
        },
        2: {
            background: "#BF211E",
            font: "#EAE8E4"
        },
        3: {
            background: "#3423A6",
            font: "#EAE8E4"
        },
        4: {
            background: "#1EFFBC",
            font: "#333333"
        },
        5: {
            background: "#7D53DE",
            font: "#EAE8E4"
        },
        6: {
            background: "#FAFF81",
            font: "#333333"
        },
        7: {
            background: "#0D1B1E",
            font: "#EAE8E4" 
        },
        8: {
            background: "#EAE8E4",
            font: "#333333" 
        }
    }

    $(".cardInfo").hover( function() {
        num = Math.floor(Math.random() * 8) + 1;
        $(this).css("background-color", scheme[num].background);
        $(this).css("color", scheme[num].font);
        $(this).children(".btn").css("color", scheme[num].font);
        $(this).children(".btn").css("border-color", scheme[num].font);
    });

});

// #72A692

