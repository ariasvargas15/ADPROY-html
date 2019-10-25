$(document).ready(function () {
    var modal = "";
    $('#modaldiasnodispopnibles').html('');

    $( "#diasnodispopnibles" ).change(function() {
    var modal = "<div class='modal modal-info fade' id='modaldiasnodis' tabindex='-1' role='dialog'>" +
        "<div class='modal-dialog' role='document'>" +
        "<div class='modal-content'>" +
        "<div class='modal-header'>" +
        " <button type='button' class='close' data-dismiss='modal' aria-label='Close'><span aria-hidden='true'>&times;</span></button>" +
        "                    <h4 class='modal-title'><i class='fa fa-info-circle'></i> Información Importante</h4>                " +
        "</div>" +
        "<div class='modal-body'>" +
        "<p>Lo sentimos, no existen cupos disponibles para la fecha seleccionada <br>("+$( this ).val()+"). Tenga en cuenta que a las 11 AM se habilitará el siguiente día hábil.</p>" +
        "</div>" +
        "<div class='modal-footer'>" +
        "<button type='button' class='btn btn-primary' data-dismiss='modal'>Cerrar</button>" +
        "</div>" +
        "</div>" +
        "</div>" +
        "</div>";
    $('#modaldiasnodispopnibles').html(modal);
    $('#modaldiasnodis').modal();
    //$('#modal_cierre_sesion').modal({ keyboard: false })
    $('#modaldiasnodis').modal('show');


    });
});