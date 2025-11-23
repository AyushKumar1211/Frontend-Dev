"use strict";

$("#searchBox").on("keyup", function () {
    const text = $(this).val().toLowerCase();
    let count = 0;

    $("#courseList li").each(function () {
        const content = $(this).text().toLowerCase();

        if (content.includes(text)) {
            $(this).show();
            $(this).css("background", "yellow");
            count++;
        } else {
            $(this).hide();
        }
    });

    $("#matchCount").text(count);
});

$("#clearBtn").on("click", function () {
    $("#searchBox").val("");
    $("#courseList li").show().css("background", "");
    $("#matchCount").text($("#courseList li").length);
});
