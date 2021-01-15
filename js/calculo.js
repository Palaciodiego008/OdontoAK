
document.getElementById("formcalc").addEventListener("submit", formcalc);

const aumento = document.getElementById("semana");
const precio = document.getElementById("tipos");
const mensaje = document.getElementById("mensaje");

function formcalc(e) {
  //Prevenimos el envio del formulario
  e.preventDefault();

  document.getElementById("mensaje").classList.remove("d-none");

  var diaSeleccionado = aumento.options[aumento.selectedIndex].value;
  var precioSeleccionado = precio.options[precio.selectedIndex].value;

  function diaF(precioDay) {

    let resultado = 0;
    let porcentaje = 0;

    switch (diaSeleccionado) {

      case "dia1":
        resultado = precioDay;
        break;

      case "dia2":
        porcentaje = (precioDay * 10) / 100;
        resultado = precioDay - porcentaje;
        break;

      case "dia3":
        porcentaje = (precioDay * 10) / 100;
        resultado = precioDay - porcentaje;
        break;

      case "dia4":
        resultado = precioDay;
        break;

      case "dia5":
        porcentaje = (precioDay * 10) / 100;
        resultado = precioDay + porcentaje;
        break;

      case "dia6":
        porcentaje = (precioDay * 20) / 100;
        resultado = precioDay + porcentaje;
        break;

      case "dia7":
        porcentaje = (precioDay * 20) / 100;
        resultado = precioDay + porcentaje;
        break;
        
      default:
        break;
    }
    return resultado;
  }

  switch (precioSeleccionado) {
    case "op1":
      renderCalc(diaF(100000));
      break;
    case "op2":
      renderCalc(diaF(230000));
      break;
    case "op3":
      renderCalc(diaF(90000));
      break;
    case "op4":
      renderCalc(diaF(45000));
      break;
    case "op5":
      renderCalc(diaF(50000));
      break;
    case "op6":
      renderCalc(diaF(60000));
      break;
    case "op7":
      renderCalc(diaF(55000));
      break;
    case "op8":
      renderCalc(diaF(120000));
      break;
    case "op9":
      renderCalc(diaF(95000));
      break;
    default:
      break;
  }
  
  function renderCalc(calc) {
    mensaje.innerHTML = `$<strong>${calc}</strong>`;
  }
}
