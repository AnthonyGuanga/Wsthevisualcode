
function calcula(operacion){
    let primerNumero = document.cal.primerNumero.value
    let segundoNumero = document.cal.segundoNumero.value

    let result = eval(primerNumero+operacion +segundoNumero)
   document.cal.resultado.value = result
}