eventListeners();

function eventListeners() {
  //Cuando se envia el formulario
  document.getElementById("formO").addEventListener("submit", formO);
  //contenido cargado
  document.addEventListener("DOMContentLoaded", localStoragelisto);
}

function formO(e) {
  //Prevenimos el envio del formulario
  e.preventDefault();

  const aumento = document.getElementById("especializacion").value;
  const precio = document.getElementById("tiposodon").value;
  const valor = calcular();

  const dato = {
    aumento,
    precio,
    valor
  };

  agregarDatosLocalStorage(dato);
  localStoragelisto();
}

function calcular() {
  var SV;

  var aumentoEsp = especializacion.options[especializacion.selectedIndex].value;
  var SalOdon = tiposodon.options[tiposodon.selectedIndex].value;

  function EspA(sueldo) {
    let resultado = 0;
    let aumento = 0;

    switch (aumentoEsp) {
      case "Especialista":
        aumento = (sueldo * 30) / 100;
        resultado = sueldo + aumento;
        break;

      case "Doctorado":
        aumento = (sueldo * 55) / 100;
        resultado = sueldo + aumento;
        break;

      case "Magister":
        aumento = (sueldo * 70) / 100;
        resultado = sueldo + aumento;
        break;

      default:
        break;
    }
    return resultado;
  }

  switch (SalOdon) {
    case "Endodoncistas":
      SV = EspA(127000);
      break;
    case "Patólogo":
      SV = EspA(123000);
      break;
    case "Cirujano oral":
      SV = EspA(128000);
      break;
    case "Ortodoncista":
      SV = EspA(272000);
      break;
    case "Odontopediatras":
      SV = EspA(121000);
      break;
    case "Periodoncista":
      SV = EspA(135000);
      break;
    case "Prostodoncista":
      SV = EspA(170000);
      break;
    case "Radiólogo":
      SV = EspA(162000);
      break;
    case "Profesionales de la salud pública":
      SV = EspA(130000);
      break;
    default:
      break;
  }

  return SV;
}

function agregarDatosLocalStorage(dato) {
  //obtengo los datos del localstore
  const datos = obtenerLocalStorage();
  //añado el email al array
  datos.push(dato);
  //convertimos el array a string
  localStorage.setItem("datos", JSON.stringify(datos));
}

//Comprobar que haya elementos en el localStorage
function obtenerLocalStorage() {
  let datos;
  //Revisamos los valores del localstorage
  if (localStorage.getItem("datos") === null) {
    datos = [];
  } else {
    //Convertimos el texto a un array
    datos = JSON.parse(localStorage.getItem("datos"));
  }
  return datos;
}

function localStoragelisto() {

  const datos = obtenerLocalStorage();
  const dataListOdon = document.getElementById("dataListOdon");

  dataListOdon.innerHTML = "";
  datos.forEach((dato, key) => {
    dataListOdon.innerHTML += `
    <tr id="${key}">
      <td class="mr-2 ml-2 p-2 text-center">${key + 1}</td>
      <td class="mr-2 ml-2 p-2 text-center">${dato.precio}</td>
      <td class="mr-2 ml-2 p-2 text-center">${dato.aumento}</td>
      <td class="mr-2 ml-2 p-2 text-center">${dato.valor}</td>
      <td class="mr-2 ml-2 p-2 text-center">
        <a href="#" class="delete"><button class="fas fa-trash">Eliminar</button></a>
      </td>
    </tr>`;
  });

  //cuando vaos a eliminar un email
  document.querySelectorAll(".delete").forEach((delet) => {
    delet.addEventListener("click", (e) => {
      e.preventDefault();
      //Obtenemos el iddel local store
      const id = parseInt(
        e.target.parentElement.parentElement.parentElement.id
      );
      borrraDatoLocalStorage(id);
      //Eliminamos de la vista
      //e.target.parentElement.parentElement.parentElement.remove()
    });
  });
}

function borrraDatoLocalStorage(id) {
  let datos = obtenerLocalStorage();
  datos = datos.filter((dato, key) => key !== id);
  localStorage.setItem("datos", JSON.stringify(datos));
  localStoragelisto();
}
