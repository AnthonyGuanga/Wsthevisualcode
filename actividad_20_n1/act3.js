let numerosPromedio = [];
let numerosMayor = [];
let numerosParesImpares = [];

function agregarNumero(exercise) {
  let inputId, array;
  
  switch (exercise) {
    case 'promedio':
      inputId = 'promedioInput';
      array = numerosPromedio;
      break;
    case 'mayor':
      inputId = 'mayorInput';
      array = numerosMayor;
      break;
    case 'paresImpares':
      inputId = 'paresImparesInput';
      array = numerosParesImpares;
      break;
    default:
      return;
  }
  
  const numeroInput = document.getElementById(inputId);
  const numero = parseFloat(numeroInput.value);
  
  if (!isNaN(numero)) {
    array.push(numero);
    numeroInput.value = '';
    console.log('Número agregado:', numero);
  } else {
    alert('Por favor ingrese un número válido.');
  }
}

function calcularPromedio() {
  if (numerosPromedio.length === 0) {
    alert('Por favor ingrese al menos un número.');
    return;
  }

  const suma = numerosPromedio.reduce((total, num) => total + num, 0);
  const promedio = suma / numerosPromedio.length;

  const resultadoElement = document.getElementById('promedioResultado');
  resultadoElement.textContent = `El promedio de los números ingresados es: ${promedio.toFixed(2)}`;
}

function encontrarMayor() {
  if (numerosMayor.length === 0) {
    alert('Por favor ingrese al menos un número.');
    return;
  }

  const mayor = Math.max(...numerosMayor);

  const resultadoElement = document.getElementById('mayorResultado');
  resultadoElement.textContent = `El mayor número de los ingresados es: ${mayor}`;
}

function contarParesImpares() {
  if (numerosParesImpares.length === 0) {
    alert('Por favor ingrese al menos un número.');
    return;
  }

  let pares = 0;
  let impares = 0;

  for (let i = 0; i < numerosParesImpares.length; i++) {
    if (numerosParesImpares[i] % 2 === 0) {
      pares++;
    } else {
      impares++;
    }
  }

  const resultadoElement = document.getElementById('paresImparesResultado');
  resultadoElement.textContent = `Número de pares: ${pares}, Número de impares: ${impares}`;
}