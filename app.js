// const resultado = document.getElementById("salida
// const clearBtn = document.querySelector("#clear");
// const puntoBtn = document.getElementById("punto");
// const mod = document.getElementById("mod");
// const mas = document.getElementById("mas");
// const menos = document.getElementById("menos");
// const division = document.getElementById("div");
// const multi = document.getElementById("x");
// const cero = document.getElementById("cero");
// const uno = document.getElementById("uno");
// const dos = document.getElementById("dos");
// const tres = document.getElementById("tres");
// const cuatro = document.getElementById("cuatro");
// const cinco = document.getElementById("cinco");
// const seis = document.getElementById("seis");
// const siete = document.getElementById("siete");
// const ocho = document.getElementById("ocho");
// const nueve = document.getElementById("nueve");
// const igual = document.getElementById("igual");

const botonNumeros = document.getElementsByName("data-number");
const botonOperaciones = document.getElementsByName("data-operacion");
const botonBorrar = document.getElementsByName("data-borrar")[0];
const botonIgual = document.getElementsByName("data-igual")[0];
var result = document.getElementById("result");
const HistoryBtn = document.querySelector("#historialbtn");
const borrarHistorialBtn = document.getElementById("borrarHistorial");
var operaActual = "";
var operaAnt = "";
var operacion = undefined;


borrarHistorialBtn.addEventListener("click", function(){
    const caja = document.querySelector("#caja");
    if(caja.children !== ""){
        caja.removeChild(caja.lastChild);
    } else {
        return;
    }
})

HistoryBtn.addEventListener('click', function(){
    agregarRegistro();
});

botonNumeros.forEach(function(boton){
    boton.addEventListener("click",function (){
        agregarNumero(boton.innerText);
    })
});

botonOperaciones.forEach(function(boton){
    boton.addEventListener("click",function(){
        agregarOperacion(boton.innerText);
    })
});

botonIgual.addEventListener("click", function(){
    calcular();
    actualizar();
    // agregarRegistro();
});

botonBorrar.addEventListener("click", function(){
    borrar();
    actualizar();
});


function agregarNumero(num){
    operaActual = operaActual.toString() + num.toString();
    actualizar();
}

function borrar(){
    operaActual = "";
    operaAnt = "";
    operacion = undefined;
}

function actualizar(){
    result.value = operaActual;
}

function agregarOperacion(op){
    if(operaActual === "") return;
    if(operaAnt !== ""){
        calcular();
    }
    operacion = op.toString();
    operaAnt = operaActual;
    operaActual = "";
}

function calcular(){
    var calculo;
    const ant = parseFloat(operaAnt);
    const actual = parseFloat(operaActual);
    if (isNaN(ant) || isNaN(actual)) return;
    switch(operacion){
        case "+": 
            calculo = ant + actual;
            break;
        case "-":
            calculo = ant - actual;
            break;
        case "÷":
            calculo = ant / actual;
            break;
        case "x":
            calculo = ant * actual;
            break;
        case "%":
            calculo = ant % actual;
        default:
            return;
    }
    operaActual = calculo;
    operacion = undefined;
    operaAnt = ""
}

function agregarRegistro(){
    const caja = document.querySelector("#caja");
    let li = document.createElement("li");
    li.innerText = result.value;
    if(result.value !== ""){
        caja.appendChild(li);
    } else {
        return;
    }
}

// function borrarHistorial(){
//     const padre = document.getElementById("caja");
//     const hijo = caja.firstElementChild;
    
//     padre.removeChild(hijo);
//     console.log(padre);
//     console.log(hijo);
// }
// borrar ();

