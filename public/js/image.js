$(document).ready(function () {
    $('select').imagepicker({
        hide_select: true
    });

    $('#button').click(function () {
        alert($('#selectImage :selected').attr('data-img-src'));
    })
});