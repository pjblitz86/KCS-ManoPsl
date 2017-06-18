/**
 * Created by PauliusJ on 2017.06.09.
 */
function keisti(elem) {
    sleptiVisusLapus();
    sleptiVisusTabus();
    var sheet = elem.getAttribute('data-lapas');
    document.getElementById(sheet).style.display = 'block';
    elem.classList.add('active');
}
function sleptiVisusLapus () {
    var lapai = document.getElementsByClassName('sheet');
    for (var i=0; i< lapai.length; i++) {
        lapai[i].style.display = 'none';
    }
}

function sleptiVisusTabus () {
    var tabai = document.getElementsByClassName('tabas');
    for (var i=0; i< tabai.length; i++) {
        tabai[i].classList.remove('active');
    }
}




