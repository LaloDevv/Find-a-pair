

//esta ver nos permite saber si hemos clicado ya en una carta o no.
let cont = 0;
//contador que si llega a 20 nos dira que hemos perdido.
let contGlobal = 0;

let sec = 0;
let secActu;

let finish = 0;

//para que el alert de que hemos ganado solo salga una vez.
let send = 0;

//en este array guardaremos el id de las cartas que hemos clicado.
a = new Array(1);

//gracias a este array mezclaremos las cartas para que se distribuyan de forma aleatoria.
resultados = new Array(10);


//primero las cartas se distribuiran de forma ascendente.
for (i = 0; i < 10; i++) {

    resultados[i] = i;
}

function shuffle(array) {

    for (let i = array.length - 1; i > 0; i--) {

        const j = Math.floor(Math.random() * (i + 1));

        [array[i], array[j]] = [array[j], array[i]]; // Intercambiar elementos 
    }
}

//mezclamos las cartas.
shuffle(resultados);


/**
 * Comprueba que el src de la img sea la del dorso.
 * Si es la primera carta que clicamos, la cambia por la imagen correspondiente.
 * Si es la segunda, comprueba si las dos cartas clicadas son iguales con la función check.
 * 
 */
function changeimg(nCarta) {

    let imagen = document.getElementById(nCarta);

    if (imagen.src == "file:///C:/Users/Lalo/Documents/lenguajeMarcas/JavaScript(Node.js)/Juego%20cartas/dorso.jpg" && contGlobal < 21) {

        if (cont < 2) {

            contGlobal++;

            if (nCarta == resultados[0] || nCarta == resultados[1]) {
                imagen.src = "fortuna1.jpg";
            } else if (nCarta == resultados[2] || nCarta == resultados[3]) {
                imagen.src = "payaso.jpg";
            } else if (nCarta == resultados[4] || nCarta == resultados[5]) {
                imagen.src = "muerte.jpg";
            } else if (nCarta == resultados[6] || nCarta == resultados[7]) {
                imagen.src = "verdugo.jpg";
            } else if (nCarta == resultados[8] || nCarta == resultados[9]) {
                imagen.src = "gato.jpg";
            }
            cont++;
            if (cont == 2) {
                setTimeout(function () {
                    check(nCarta);
                }, 500)
            } else {
                check(nCarta);
            }
        }
    }
}


//funcion para que el contador de segundos vaya aumentando.
window.setInterval(function () {
    if (contGlobal > 0 && finish < 5 && contGlobal < 21) {
        secActu = document.getElementById("number");
        secActu.innerHTML = sec + " secs";
        sec++;
    } else if (finish == 5 && send == 0) {
        alert("Has ganado");
        send++;
    }
}, 1000);

/**
 * Comprueba si las dos cartas clicadas son iguales.
 * Si lo son, se quedan giradas y aumenta el contador de finish (este contador detiene el tiempo).
 * Si no lo son, se giran las cartas.
 * @param  nCarta 
 */
function check(nCarta) {

    if (cont < 2) {

        a[cont - 1] = nCarta;
    }

    if (cont == 2) {

        let imagen = document.getElementById(a[0]);
        let imagen1 = document.getElementById(nCarta);

        if (imagen.src == imagen1.src) {
            cont = 0;
            finish++;
        } else {

            imagen.src = "dorso.jpg";
            imagen1.src = "dorso.jpg";
            cont = 0;
        }
    }
}

let contador = document.getElementById("contG");

//funcion que aumenta el contador de intentos
function contadorG() {
    contador.innerText = contGlobal + "/21";
}

//funcion que chequea si hemos perdido y termina el juego.
function endgame() {
    if (contGlobal == 21) {
        setTimeout(function () {
            alert("Has perdido")
        }, 500)
    }
}





