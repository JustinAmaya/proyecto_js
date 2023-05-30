
let calculo = document.querySelector('#btncalcular');

calculo.addEventListener('click', () => {

let origen = document.querySelector('#inicio').value;
let destino = document.querySelector('#final').value;
let resultado = document.querySelector('#resultado');

let descuento = 0
let precio = 0

    switch(origen){
        case "cityPalma":
            precio = 250;
           break;

    }
   
    switch (destino){
        case "costaSol":
            descuento = precio * 0.05;
            precio = precio - descuento;

            resultado.innerHTML = `<b> El viaje de ${origen} a ${destino} es de: ${precio} se te desconto el 5%  </b>`

            break;
            case "panchi":
                descuento = precio * 0.10;
                precio = precio - descuento;
    
                resultado.innerHTML = `<b> El viaje de ${origen} a ${destino} es de: ${precio} se te desconto el 10%  </b>`
                
                break;
                case "triunfo":
                    descuento = precio * 0.15;
                    precio = precio - descuento;
        
                    resultado.innerHTML = `<b> El viaje de ${origen} a ${destino} es de: ${precio} se te desconto el 15%  </b>`
                        
            
    }

})
