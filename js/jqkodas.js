/**
 * Created by PauliusJ on 2017.06.12.
 */
$(document).ready(function () {
    $('#mygtukas').click(function () {
        $('.paveikslas').toggle();
    });
    // $('.paveikslas');
    $('#slepti').click(function () {
        $('.paveikslas').hide();
    });
    $('#rodyti').click(function () {
        $('.paveikslas').show();

    });

    $('.tabass').click(function (e) {

        // prisiskiriam i kitamaji nuoroda kad susietu ka paspaudem
        var tabas = $(this).attr("data-lapas");
        // rodyti slepti tabus priklausomai kuri paspaudem KAIP SUSIETI?
        $('#' + tabas).siblings().hide(); console.log($('#' + tabas));
        $('#' + tabas).show()
        // dabartini taba padaryti aktyviu, kitus ne
        $('.tabass').parent('li').addClass('active').siblings().removeClass('active');

        // uztikrina kad rodys pavadinima tabo taisyklingai
        e.preventDefault();

    })
})

