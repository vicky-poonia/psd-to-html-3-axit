"use strict"

$(document).ready(function () {

    $(".mobNav .btn").click(function () {
        $(".menuBar").slideToggle("slow");
    });
    $(".mobNav .btn").blur(function () {
        $(".menubar").fadeOut("slow");
    })


    $(window).scroll(function () {
        if ($(this).scrollTop() > 560) {
            $("#gotop").fadeIn("slow");
        }
        else {
            $("#gotop").fadeOut("slow");
        }
    })

    $("button").click(function () {
        $("body,html").animate({
            "scrollTop": "0"
        });
    })

    $(".nav a").click(function (e) {
        e.preventDefault();
        var x = $(this).attr("href");
        $("body ,html").animate({
            "scrollTop": $(x).offset().top - 58
        }, "slow");
    })


    $(".axit a").click(function (e) {
        e.preventDefault();
        var x = $(this).attr("href");
        console.log(x);
        $("body,html").animate({
            "scrollTop": $(x).offset().top - 58,
        })
    })

    $(window).scroll(function () {
        var top = $(this).scrollTop();
        if (top >= $("#contact").offset().top - 390) {
            $(".wrap-1 nav ul li a").removeClass("active");
            $(".wrap-1 nav ul li:nth-child(5) a").addClass("active");

        }
        else if (top >= $("#reviews").offset().top - 60) {
            $(".wrap-1 nav ul li a").removeClass("active");
            $(".wrap-1 nav ul li:nth-child(4) a").addClass("active");
        }
        else if (top >= $("#pricing").offset().top - 60) {
            $(".wrap-1 nav ul li a").removeClass("active");
            $(".wrap-1 nav ul li:nth-child(3) a").addClass("active");
        }
        else if (top >= $("#about").offset().top - 60) {
            $(".wrap-1 nav ul li a").removeClass("active");
            $(".wrap-1 nav ul li:nth-child(2) a").addClass("active");
        }
        else {
            $(".wrap-1 nav ul li a").removeClass("active");
            $(".wrap-1 nav ul li:nth-child(1) a").addClass("active");
        }
    })

    $(".mytab").click(function () {
        if (!$(this).hasClass("active")) {
            $(this).addClass("active")
                .siblings(".mytab")
                .removeClass("active");
        }
    });

    $(".mobNav .plus").click(function () {
        $(this).toggleClass("act");
    })
})