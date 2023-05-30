
let calcular = document.querySelector('#calculo');

calcular.addEventListener('click', () => {
    let nota1 = document.querySelector('#textnota1').value;
    let nota2 = document.querySelector('#textnota2').value;

    let resultado = document.querySelector('#resultado');

    nota1 = nota1 * 0.70;
    nota2 = nota2 * 0.30;

    let suma = nota1 + nota2;

    resultado.innerHTML = `<b>La nota ponderada es: ${suma}</b>`;


})