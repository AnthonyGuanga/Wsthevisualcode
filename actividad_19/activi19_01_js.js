
function contarNumerosPares() {

    let inicio = parseInt(document.getElementById("inicio").value);
    let fin = parseInt(document.getElementById("fin").value);
    let contador = 0;

    for (let i = inicio; i <= fin; i++) {
      if (i % 2 === 0) {
        contador++;
      }
    }

    document.getElementById("resultado").innerText = "Cantidad de números pares: " + contador;
  }

  function ConversorTemperatura(){

    let inicio2 = parseFloat(document.getElementById("inicio2").value);
    let convertir = document.getElementById("convertir").value;
    let resultado2;

    if (convertir === "CelsiusOP") {
        resultado2 = (inicio2 * (9/5)) + 32;
        document.getElementById("resultadoTWO").innerText = "Fahrenheit: " + resultado2.toFixed(2);

      } else if (convertir === "FahrenheitOP") {
        resultado2 = (inicio2 - 32) * (5/9);
        document.getElementById("resultadoTWO").innerText = "Celsius: " + resultado2.toFixed(2);
      }

  }