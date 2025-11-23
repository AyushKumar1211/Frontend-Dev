"use strict";

$("#subscribeBtn").on("click", function () {
    $("#message").text("Notifications Enabled");
});

$("#unsubscribeBtn").on("click", function () {
    $("#message").text("Notifications Disabled");
});

$("#addTopicBtn").on("click", function () {
    const name = $("#newTopicInput").val().trim();
    if (name === "") return;

    const li = $(`<li>${name} <button class="remove">Remove</button></li>`);
    $("#topicsList").append(li);

    li.find(".remove").on("click", function () {
        li.off("click");
        li.remove();
        $("#message").text("Subscription Removed");
    });

    $("#message").text("Topic Added");
    $("#newTopicInput").val("");
});
