$(document).ready(function(){
    var $btn = $('#enviar');
    var $alert = $('.alert');

    $btn.on('click', function(){
        $alert.removeClass('enviar-novisible')
        $alert.addClass('enviar-visible');
    });
});