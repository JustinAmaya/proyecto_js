
let calcular = document.querySelector('#btncalcular');

    let dato1 = document.querySelector('#txt1');
    let dato2 = document.querySelector('#txt2');
    let resultado = document.querySelector('#resultado');

    function numMayor(dato1, dato2){
        if(dato1 > dato2){
            return dato1;
           // resultado.innerHTML = `El numero mayor es ${dato1}`
        }else{
            return dato2;
           // resultado.innerHTML = `El numero mayor es ${dato2}`
        }
    }


calcular.addEventListener( 'click', () => {

    let respuesta = numMayor(dato1.value, dato2.value);
    resultado.innerHTML = `El numero mayor es ${respuesta}`
   

})