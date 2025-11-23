"use strict";

$("#addPost").on("click", function () {
    $("#postList").append("<li>New blog post added</li>");
});

$("#prependPost").on("click", function () {
    $("#postList").prepend("<li>Featured Post: Breaking Update</li>");
});

$("#removeLast").on("click", function () {
    $("#postList li:last").remove();
});

$("#addTags").on("click", function () {
    $("#postList li").before("<span>[Tag]</span>");
    $("#postList li").after("<span>[/Tag]</span>");
});

$("#highlightBtn").on("click", function () {
    const key = $("#keyword").val().toLowerCase();
    $("#postList li").each(function () {
        const content = $(this).text().toLowerCase();
        if (content.includes(key) && key !== "") {
            $(this).css("background", "yellow");
        } else {
            $(this).css("background", "");
        }
    });
});
