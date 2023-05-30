
let calcular = document.querySelector('#btncalcular');



calcular.addEventListener('click', () => {

    let celsius = document.querySelector('#datoCelsius').value;
    let resultado = document.querySelector('#resultado');
    
    let faren = (celsius * 9/5) + 32;
        
    

   
  
   if (faren >= 14 && faren <32){
    resultado.innerHTML = `<b>Los grados a Fahrenheit son ${faren} y esta a Temperatura Baja</b>`;
  } else if (faren >= 32 && faren < 68){
    resultado.innerHTML = `<b>Los grados a Fahrenheit son ${faren} y esta a Temperatura Adecuada</b>`;
  } else if (faren >= 68 && faren < 96){
    resultado.innerHTML = `<b>Los grados a Fahrenheit son ${faren} y esta a Temperatura Alta</b>`;
  }else {
    resultado.innerHTML = `<b>temperatura desconocida</b>`;
  }
});


