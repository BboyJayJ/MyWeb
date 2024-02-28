$(document).ready(function () {
    let skill = $("#skill");
    let about = $("#aboutme");
    let blogEf1 = $(".blogEf1");
    let blogEf2 = $(".blogEf2");
    let blogEf3 = $(".blogEf3");
    let blogEfph1 = $(".blogEfph1");
    let blogEfph2 = $(".blogEfph2");
    let blogEfph3 = $(".blogEfph3");

    skill.mouseenter(function () {
        $(this).animate({ padding: "5vw" }, 200);
    });

    skill.mouseleave(function () {
        $(this).animate({ padding: "3vw" }, 200);
    });

    $(window).scroll(function () {

        var scrollPosition = $(window).scrollTop();
        var triggerPosition = 180;
        var triggerPosition1 = 3000;
        var triggerPhonePosition = 2000;
        if (scrollPosition > triggerPosition) {
            about.animate({ opacity: 1, left: "100px" }, 2300);
        }

        if (scrollPosition > triggerPosition1) {
            blogEf1.animate({ opacity: 1, top: "0" }, 1000);
        }

        if (scrollPosition > triggerPosition1) {
            blogEf2.animate({ opacity: 1, top: "0" }, 1500);
        }

        if (scrollPosition > triggerPosition1) {
            blogEf3.animate({ opacity: 1, top: "0" }, 2500);
        }

        /*blog phone EF*/
        if (scrollPosition > triggerPhonePosition) {
            blogEfph1.animate({ opacity: 1, top: "0" }, 1000);
        }

        if (scrollPosition > triggerPhonePosition) {
            blogEfph2.animate({ opacity: 1, top: "0" }, 1500);
        }

        if (scrollPosition > triggerPhonePosition) {
            blogEfph3.animate({ opacity: 1, top: "0" }, 2500);
        }

    });

});