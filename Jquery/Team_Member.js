$(document).ready(function () {
    $('.manager').click(function () {
        $(this).children('.employee').css('background', 'yellow');
    });
    $('.employee').hover(
        function () {
            $(this).children('.info').show();
        },
        function () {
            $(this).children('.info').hide();
        }
    );
    $('.dept-title').click(function () {
        $(this).parent().children().css('background', '#d0f0ff');
    });
    $('#random').click(function () {
        var employees = $('.employee');
        var randomEmp = employees.eq(Math.floor(Math.random() * employees.length));
        randomEmp.siblings('.employee').css('border', '2px solid green');
    });
    $('#toggleTeams').click(function () {
        $('main').children('.department').find('.manager, .employee, .info').toggle();
    });
});
