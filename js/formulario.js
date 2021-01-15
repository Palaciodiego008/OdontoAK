eventListeners();

function eventListeners() {
  //Cuando se envia el formulario
  document.getElementById("formulario").addEventListener("submit", formulario);
  //contenido cargado
  document.addEventListener("DOMContentLoaded", localStoragelisto);
}

function formulario(e) {
  //Prevenimos el envio del formulario
  e.preventDefault();

  const name = document.getElementById("name").value;
  const lastName = document.getElementById("lastName").value;
  const identification = document.getElementById("identification").value;
  const nPhone = document.getElementById("nPhone").value;
  const nCelphone = document.getElementById("nCelphone").value;
  const country = document.getElementById("country").value;
  const departament = document.getElementById("departament").value;
  const city = document.getElementById("city").value;
  const neighborhood = document.getElementById("neighborhood").value;
  const address = document.getElementById("address").value;
  const email = document.getElementById("email").value;
  const levelOS = document.getElementById("levelOS").value;
  const profession = document.getElementById("profession").value;
  const stratum = document.getElementById("stratum").value;
  const dateOB = document.getElementById("dateOB").value;
  const maritalS = document.getElementById("maritalS").value;
  const tipo = document.querySelector('input[name="tipo"]:checked').value;

  const dato = {
    name,
    lastName,
    identification,
    nPhone,
    nCelphone,
    country,
    departament,
    city,
    neighborhood,
    address,
    email,
    levelOS,
    profession,
    stratum,
    dateOB,
    maritalS,
    tipo
  };

  agregarDatosLocalStorage(dato);
  localStoragelisto();
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
  const dataList = document.getElementById("dataList");

  dataList.innerHTML = '';
  datos.forEach((dato, key) => {
    dataList.innerHTML += `
        <tr id="${key}">
          <td class="mr-2 ml-2 p-2 text-center">${key + 1}</td>
          <td class="mr-2 ml-2 p-2 text-center">${dato.name}</td>
          <td class="mr-2 ml-2 p-2 text-center">${dato.lastName}</td>
          <td class="mr-2 ml-2 p-2 text-center">${dato.identification}</td>
          <td class="mr-2 ml-2 p-2 text-center">${dato.nPhone}</td>
          <td class="mr-2 ml-2 p-2 text-center">${dato.nCelphone}</td>
          <td class="mr-2 ml-2 p-2 text-center">${dato.country}</td>
          <td class="mr-2 ml-2 p-2 text-center">${dato.departament}</td>
          <td class="mr-2 ml-2 p-2 text-center">${dato.city}</td>
          <td class="mr-2 ml-2 p-2 text-center">${dato.neighborhood}</td>
          <td class="mr-2 ml-2 p-2 text-center">${dato.address}</td>
          <td class="mr-2 ml-2 p-2 text-center">${dato.email}</td>
          <td class="mr-2 ml-2 p-2 text-center">${dato.levelOS}</td>
          <td class="mr-2 ml-2 p-2 text-center">${dato.profession}</td>
          <td class="mr-2 ml-2 p-2 text-center">${dato.stratum}</td>
          <td class="mr-2 ml-2 p-2 text-center">${dato.dateOB}</td>
          <td class="mr-2 ml-2 p-2 text-center">${dato.maritalS}</td>
          <td class="mr-2 ml-2 p-2 text-center">${dato.tipo}</td>
          <td class="mr-2 ml-2 p-2 text-center">
            <a href="#" class="delete"><button class="fas fa-trash">Eliminar</button></a>
          </td>
        </tr>`;
  });

  //cuando vaos a eliminar un email
  document.querySelectorAll('.delete').forEach(delet => {
    delet.addEventListener('click', e => {
      e.preventDefault()
      //Obtenemos el iddel local store
      const id = parseInt(e.target.parentElement.parentElement.parentElement.id)
      borrraDatoLocalStorage(id)
      //Eliminamos de la vista
      //e.target.parentElement.parentElement.parentElement.remove()
    })
  })
}

function borrraDatoLocalStorage(id) {
  let datos = obtenerLocalStorage()
  datos = datos.filter((dato, key) => key !== id)
  localStorage.setItem('datos', JSON.stringify(datos))
  localStoragelisto()
}
