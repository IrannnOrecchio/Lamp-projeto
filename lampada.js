const turnOn = document.getElementById ( 'turnOn' );
const turnOff = document.getElementById ( 'turnOff' );
const lamp = document.getElementById ( 'lamp' );
const consertar = document.getElementById ('consertar')

function isLampBroken () {
    return lamp.src.indexOf ( 'quebrada' ) > -1
}

function lampOn () {
    if ( !isLampBroken () ) {
        lamp.src = './imglampada/ligada.png';
    }
}

function lampOff () {
    if ( !isLampBroken () ) {
        lamp.src = './imglampada/desligada.png';
    }
}

function lampBroken () {
    lamp.src = './imglampada/quebrada.png';
}


function lampadaconserto (){

    lamp.src= './imglampada/desligada.png'
}

consertar.addEventListener('click', lampadaconserto);
turnOn.addEventListener ( 'click', lampOn );
turnOff.addEventListener ( 'click', lampOff );
lamp.addEventListener ( 'mouseover', lampOn );
lamp.addEventListener ( 'mouseleave', lampOff );
lamp.addEventListener ( 'click', lampBroken );


