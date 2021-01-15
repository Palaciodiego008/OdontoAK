eventListeners();

function eventListeners() {
  //Cuando se envia el formulario
  document.getElementById("formlogin").addEventListener("submit", formlogin);
}

function readTextFile(file, callback) {
  var archivo = new XMLHttpRequest();
  archivo.overrideMimeType("application/json");
  archivo.open("GET", file, true);
  archivo.onreadystatechange = function() {
      if (archivo.readyState === 4 && archivo.status == "200") {
          callback(archivo.responseText);
      }
  }
  archivo.send(null);
}

function formlogin(e) {
  //Prevenimos el envio del formulario
  e.preventDefault();

  readTextFile("../json/usuarios.json", function(text){
    var usuarios = JSON.parse(text);
    console.log(usuarios);

    const user = document.getElementById("user").value;
    const password = document.getElementById("password").value;

    let login = false;
    for (let i = 0; i < usuarios.length; i++) {
      if (usuarios[i].user === user && usuarios[i].password === password) {
        setUserSessionStorage(usuarios[i]);
        login = true;
        break;
      }
    }

    if (login) {
      location.href = "../index.html";
      alert("Bienvenido señor: " + user);
    } else {
      alert("Usuario y/o Contraseña incorrectos");
    }

  });

}

function setUserSessionStorage(user) {
  sessionStorage.setItem("user", JSON.stringify(user));
}
