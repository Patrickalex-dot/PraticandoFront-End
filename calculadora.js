function divisao()
{
    let numero1 = document.querySelector("#numero1");
    let numero2 = document.querySelector("#numero2");

    var resultado = parseInt (numero1.value) / parseInt (numero2.value)

    let div = document.querySelector('#Resultado');
    div.innerHTML = resultado;

}
function Soma()
{
    let numero1 = document.querySelector("#numero1");
    let numero2 = document.querySelector("#numero2");

    var resultado = parseInt(numero1.value) + parseInt (numero2.value)

    let div = document.querySelector('#Resultado');
    div.innerHTML = resultado;
}
function subtracao()
{
    let numero1 = document.querySelector("#numero1");
    let numero2 = document.querySelector("#numero2");

    var resultado = parseInt (numero1.value) - parseInt (numero2.value)

    let div = document.querySelector('#Resultado');
    div.innerHTML = resultado;

}
