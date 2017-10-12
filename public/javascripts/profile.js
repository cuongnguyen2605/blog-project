$(document).ready(function () {
    $('.update').on('click', function (e) {
        e.preventDefault();
        $.ajax({
            type: 'PUT',
            url: '/profile/' + $(e.target).val()
        }).done(function () {
            console.log('Success!');
        }).fail(function (exception) {
            console.log(exception);
        });
    });
});