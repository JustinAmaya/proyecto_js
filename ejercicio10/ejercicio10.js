let calcular = document.getElementById('calcular')

calcular.addEventListener('click', function() {
    // Obtener edades de los estudiantes
    var edadesManana = obtenerEdades('mañana', 5);
    var edadesTarde = obtenerEdades('tarde', 6);
    var edadesNoche = obtenerEdades('noche', 11);
    
    // Calcular promedios
    var promedioManana = calcularPromedio(edadesManana);
    var promedioTarde = calcularPromedio(edadesTarde);
    var promedioNoche = calcularPromedio(edadesNoche);
    
    // Mostrar resultados
    document.getElementById('promedio-mañana').textContent = 'Promedio Mañana: ' + promedioManana.toFixed(2);
    document.getElementById('promedio-tarde').textContent = 'Promedio Tarde: ' + promedioTarde.toFixed(2);
    document.getElementById('promedio-noche').textContent = 'Promedio Noche: ' + promedioNoche.toFixed(2);
    
    // Determinar el turno con mayor promedio
    var mayorPromedio = obtenerMayorPromedio(promedioManana, promedioTarde, promedioNoche);
    document.getElementById('mayor-promedio').textContent = 'El turno con mayor promedio es: ' + mayorPromedio;
  });
  
  function obtenerEdades(turno, cantidad) {
    var edades = [];
    for (var i = 1; i <= cantidad; i++) {
      var input = document.getElementById('edad-' + turno + '-' + i);
      if (input.value !== '') {
        edades.push(parseInt(input.value));
      }
    }
    return edades;
  }
  
  function calcularPromedio(edades) {
    var total = 0;
    for (var i = 0; i < edades.length; i++) {
      total += edades[i];
    }
    return edades.length > 0 ? total / edades.length : 0;
  }
  
  function obtenerMayorPromedio(promedioManana, promedioTarde, promedioNoche) {
    var mayorPromedio = 'Desconocido';
    var mayor = Math.max(promedioManana, promedioTarde, promedioNoche);
    if (mayor === promedioManana) {
      mayorPromedio = 'Mañana';
    } else if (mayor === promedioTarde) {
      mayorPromedio = 'Tarde';
    } else if (mayor === promedioNoche) {
      mayorPromedio = 'Noche';
    }
    return mayorPromedio;
  }
  