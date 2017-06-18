/**
 * Created by PauliusJ on 2017.06.09.
 */
function slepti() {
    document.getElementById('demo').style.display = 'none';
}

function parodyti() {
    document.getElementById('demo').style.display = 'block';
}

var arPasleptas = false;

function SleptiRodyti(){
    if (arPasleptas) {
        parodyti();
    } else {
        slepti();
    }
    arPasleptas = !arPasleptas;

}

