
let calcular = document.querySelector('#btncalcular');

calcular.addEventListener('click', () =>{
    let precio = document.querySelector('#precioAuto').value;
    let auto = document.querySelector('#tipoAuto').value;
    let resultado = document.querySelector('#resultado');

    let descuento = 0;

    switch(auto){
        case "fiesta":
            descuento = precio * 0.05;
            precio = precio - descuento;
            resultado.innerHTML = `<b> El precio del auto Ford Fiesta es de ${precio}, se te desconto el 5%  </b>`
            break;
        
        case "focus":
            descuento = precio * 0.10;
            precio = precio - descuento;
            resultado.innerHTML = `<b> El precio del auto Ford Focus es de ${precio}, se te desconto el 10%  </b>`
            break;

         case "escape":
            descuento = precio * 0.20;
            precio = precio - descuento;
            resultado.innerHTML = `<b> El precio del auto Ford Escape es de ${precio}, se te desconto el 20%  </b>`
            break;
    }

} )