let numeroSecreto = 0;
let intentos = 1;
let ListaNumerosSorteados = [];
let numeroMaximo = 10;

console.log(numeroSecreto);


function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);

    console.log(numeroSecreto);
    if (numeroDeUsuario === numeroSecreto){
        asignarTextoElemento('p', `Ganaste!! &#127881; Acertaste el numero en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'} &#128062;`);
        document.getElementById('reiniciar').removeAttribute('disabled');     
    } else {
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p', 'El numero secreto es menor &#128563');
        } else {
            asignarTextoElemento('p', 'El numero secreto es mayor &#128563');
        }
        intentos++;
        limpiarCaja();
    }
}

function limpiarCaja(){
    document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1;
    console.log(numeroGenerado);
    console.log(ListaNumerosSorteados);

    if (ListaNumerosSorteados.length === numeroMaximo) {
        asignarTextoElemento('p', 'Ya se sortearon todos los numeros posibles');
    } else {
        if (ListaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else { 
            ListaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function condicionesIniciales(){
    asignarTextoElemento('h1', 'Juego encontrar numero secreto!!');
    asignarTextoElemento('p', `Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
    console.log(numeroSecreto);
}

function reiniciarJuego(){
    limpiarCaja();
    condicionesIniciales();
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
}

condicionesIniciales();

