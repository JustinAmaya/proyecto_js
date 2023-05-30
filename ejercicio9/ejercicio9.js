let cantidad = [];
let n = 0;
let p = 0;
let m = 0;
let pa = 0;
let contador = 0;
let agregar = document.querySelector('#btnAgregar');

agregar.addEventListener('click', () =>{

    if (contador < 10){
        let numeros = document.querySelector('#numero').value;

        if(!isNaN(numeros)){
            cantidad.push(numeros);
            if(numeros > 0){
                p++;
            }else if (numeros < 0){
                n++;
            }

            if(numeros % 15 === 0){
                m++;
            }

            if(numeros % 2 === 0){
                pa += numeros;
            }

            numeros.value = '';
            contador++;

            document.getElementById('rePositivo').textContent = p;
            document.getElementById('reNegativo').textContent = n;
            
            document.getElementById('reMultiplos').textContent = m;
            document.getElementById('rePares').textContent = pa;

            if (contador === 10){
                agregar.disabled = true;
                numeros.disabled = true;
            }

        }
    }

})