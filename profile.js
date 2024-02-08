$(document).ready(function () {
    let btn = $("#btn");
    let skill = $("#skill");
    let edu = $("#Education");
    let autobiography = $("#autobiography");

    btn.click(function () {
        skill.css("opacity", "1");
        edu.css("opacity", "1");
        autobiography.css("opacity", "1");
    });
});