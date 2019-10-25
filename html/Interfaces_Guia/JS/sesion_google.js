


function login_google() {
    var host = window.location.protocol + "//" + window.location.host + "/";
    $.post(host + 'Index/logingoogle', {}, function (datos) {
        if (datos.carga) {
            $('#form_login_google').attr('action', datos.auth);
            $( "#form_login_google" ).submit();
        }
    }, 'json');
}