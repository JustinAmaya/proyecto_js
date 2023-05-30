let calcular =  document.querySelector('.calculo');

calcular.addEventListener('click', () => {

    let nombre = document.querySelector('#nombre').value;
    let salario = parseFloat (document.querySelector('#salario').value);
    let categoria = document.querySelector('#categoria').value;
    let datos = document.querySelector('p');


        let aumento = 0;
        switch(categoria){
            case "A":
                aumento = (salario * 0.15); 
                datos.innerHTML = `<b> Nombre: ${nombre} <br> Salario: ${salario} <br> Aumento: ${aumento} </b>`
                break;

            case "B":
                aumento = (salario * 0.30) 
                datos.innerHTML = `<b> Nombre: ${nombre} <br> Salario: ${salario} <br> Aumento: ${aumento} </b>`
                break;

            case "C":
                aumento = (salario * 0.10)  
                datos.innerHTML = `<b> Nombre: ${nombre} <br> Salario: ${salario} <br> Aumento: ${aumento} </b>`
                break;

            case "D":
                aumento = (salario * 0.20) 
                datos.innerHTML = `<b> Nombre: ${nombre} <br> Salario: ${salario} <br> Aumento: ${aumento} </b>`
                break;
                default:
                    datos.textContent = "Elige una categoria"

        }
});