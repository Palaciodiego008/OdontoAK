eventListeners();

function eventListeners() {
  // Contenido cargado
  document.addEventListener("DOMContentLoaded", sessionStoragelisto);
}

// Comprobar que haya un usuario en el session storage
function getSessionStorage() {
  // Convertimos el texto a un objeto
  let user = JSON.parse(sessionStorage.getItem('user'))
  return user
}

function sessionStoragelisto() {
  const user = getSessionStorage()

  if (user === null) {
    location.href = 'html/login.html'
  } else {
    const userTipo = document.getElementById('user-tipo')
    userTipo.innerHTML=`<p>${user.user} - ${user.tipo}</p>`
  }
}
