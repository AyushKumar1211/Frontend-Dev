"use strict";

const usedEmails = ["test@gmail.com", "admin@gmail.com"];

$("#submitBtn").on("click", function () {
    let valid = true;

    const name = $("#name").val().trim();
    const email = $("#email").val().trim();
    const password = $("#password").val().trim();

    $("#name, #email, #password").css("border", "");

    if (name === "") {
        $("#name").css("border", "2px solid red");
        valid = false;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email) || usedEmails.includes(email)) {
        $("#email").css("border", "2px solid red");
        valid = false;
    }

    if (password.length < 8) {
        $("#password").css("border", "2px solid red");
        valid = false;
    }

    if (valid) {
        $("#success").text("Registration Successful").show();
    } else {
        $("#success").hide();
    }
});
