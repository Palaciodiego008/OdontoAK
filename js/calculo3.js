document.getElementById("formcalc3").addEventListener("submit", formcalc3);

function readTextFile(file, callback) {
  var archivo = new XMLHttpRequest();
  archivo.overrideMimeType("application/json");
  archivo.open("GET", file, true);
  archivo.onreadystatechange = function () {
    if (archivo.readyState === 4 && archivo.status == "200") {
      callback(archivo.responseText);
    }
  };
  archivo.send(null);
}

const aumento = document.getElementById("edades");
const precio = document.getElementById("tiposB");
const mensaje = document.getElementById("mensajeB");

function formcalc3(e) {
  //Prevenimos el envio del formulario
  e.preventDefault();

  document.getElementById("mensajeB").classList.remove("d-none");

  readTextFile("../json/preciosB.json", function (text) {
    var pre = JSON.parse(text);
    console.log(pre);

    var edadSeleccionada = aumento.options[aumento.selectedIndex].value;
    var tipoSeleccionado = precio.options[precio.selectedIndex].value;

    function diaF(precioDay) {
      let resultado = 0;
      let porcentaje = 0;

      switch (edadSeleccionada) {
        
        case "ran1":
          porcentaje = (precioDay * 30) / 100;
          resultado = precioDay - porcentaje;
          break;

        case "ran2":
          porcentaje = (precioDay * 20) / 100;
          resultado = precioDay - porcentaje;
          break;

        case "ran3":
          porcentaje = (precioDay * 10) / 100;
          resultado = precioDay - porcentaje;
          break;

        case "ran4":
          porcentaje = (precioDay * 5) / 100;
          resultado = precioDay - porcentaje;
          break;

        case "ran5":
          porcentaje = (precioDay * 10) / 100;
          resultado = precioDay - porcentaje;
          break;

        case "ran6":
          porcentaje = (precioDay * 20) / 100;
          resultado = precioDay - porcentaje;
          break;

        case "ran7":
          porcentaje = (precioDay * 30) / 100;
          resultado = precioDay - porcentaje;
          break;

        default:
          break;
      }
      return resultado;
    }

    switch (tipoSeleccionado) {
      case "ti1":
        renderCalc(diaF(pre[0].val));
        break;
      case "ti2":
        renderCalc(diaF(pre[1].val));
        break;
      case "ti3":
        renderCalc(diaF(pre[2].val));
        break;
      case "ti4":
        renderCalc(diaF(pre[3].val));
        break;
      case "ti5":
        renderCalc(diaF(pre[4].val));
        break;
      case "ti6":
        renderCalc(diaF(pre[5].val));
        break;
      default:
        break;
    }

    function renderCalc(calc) {
      mensaje.innerHTML = `$<strong>${calc}</strong>`;
    }
  });
}
