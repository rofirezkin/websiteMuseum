$(document).ready(function () {
    $('ul[role="menu"]')
        .on('show.bs.collapse', function (e) {
        $(e.target).prev('a[role="menuitem"]').addClass('active');
    })
        .on('hide.bs.collapse', function (e) {
        $(e.target).prev('a[role="menuitem"]').removeClass('active');
    });

    $('a[data-toggle="collapse"]').click(function (event) {

        event.stopPropagation();
        event.preventDefault();

        var drop = $(this).closest(".dropdown");
        $(drop).addClass("open");

        $('.collapse.in').collapse('hide');
        var col_id = $(this).attr("href");
        $(col_id).collapse('toggle');

    });
})