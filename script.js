//Quantidade de pessoas e duração
let inputAdultos = document.getElementById("adultos");
let inputCriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");

//Resultado
let resultado = document.getElementById("resultado")


function calcular() {
    //Pessoas e duração
    let adultos = inputAdultos.value;
    let criancas = inputCriancas.value;
    let duracao = inputDuracao.value;

    //Variaveis de armazenamento
    let qdtTotalCarne = carnePP(duracao) * adultos + (carnePP(duracao) / 2 * criancas);
    let qdtTotalCerveja = cervejaPP(duracao) * adultos;
    let qdtTotalBebidas = bebidasPP(duracao) * adultos + (bebidasPP(duracao) / 2 * criancas);

    if (adultos && duracao > 0) {
        resultado.innerHTML = `<p>${qdtTotalCarne / 1000} Kg de carne</p>`
        resultado.innerHTML += `<p>${Math.ceil(qdtTotalCerveja / 1000)} Litrões de cerveja</p>`
        resultado.innerHTML += `<p>${Math.ceil(qdtTotalBebidas / 2000)} Garrafas de refrigerante de 2 litros</p>`
    } else {
        resultado.innerHTML = `<p>Os valores adultos e duração precisam ser maiores que 0</p>`
    }
}

function carnePP(duracao) {
    return duracao >= 6 ? 650 : 400;
}

function cervejaPP(duracao) {
    return duracao >= 6 ? 2000 : 1200;
}


function bebidasPP(duracao) {
    return duracao >= 6 ? 1500 : 1000
}   
