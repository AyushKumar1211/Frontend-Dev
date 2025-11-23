jq1(function () {
    let index = 0;
    setInterval(function () {
        const slides = jq1("#carousel .slide");
        slides.hide();
        index = (index + 1) % slides.length;
        jq1(slides[index]).show();
    }, 2000);

    jq1(".widget").on("click", function () {
        jq1(".widget").css("background", "");
        jq1(this).css("background", "lightblue");
    });
});

jq2(function () {
    jq2("#openModal").on("click", function () {
        jq2("#modal").fadeIn();
    });

    jq2("#closeModal").on("click", function () {
        jq2("#modal").fadeOut();
    });

    jq2(".widget").hover(function () {
        const t = jq2(this).data("tip");
        jq2(this).attr("title", t);
    });
});
