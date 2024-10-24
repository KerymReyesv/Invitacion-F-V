// Fecha de referencia actual (19 de agosto de 2024 16:01)
const referenceDate = new Date('August 19, 2024 16:01:00').getTime();

// Fecha objetivo (21 de diciembre de 2024 00:00:00)
const targetDate = new Date('December 21, 2024 17:00:00').getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById('days').innerText = days;
    document.getElementById('hours').innerText = hours;
    document.getElementById('minutes').innerText = minutes;
    document.getElementById('seconds').innerText = seconds;

    // Si la cuenta ha terminado, muestra un mensaje
    if (distance < 0) {
        clearInterval(interval);
        document.getElementById('countdown-timer').innerHTML = "¡Felicidades! Ya es el 21 de diciembre de 2024.";
    }
}

// Actualizar el contador cada segundo
const interval = setInterval(updateCountdown, 1000);

// Inicializar con los valores actuales
updateCountdown();


setInterval(function(){
    document.querySelector('iframe').src += '';
}, 30000); // Recarga cada 30 segundos




  window.addEventListener('message', function(event) {
    if (event.origin === 'https://docs.google.com') {
      var iframe = document.querySelector('iframe');
      if (event.data.height) {
        iframe.style.height = event.data.height + 'px';
      }
    }
  });


// CONFIRMAR ASISTENCIA

const invitados = [
  { nombre: "Juan Pérez", acompanantes: 2 },
  { nombre: "María López", acompanantes: 4 },
  { nombre: "Carlos Martínez", acompanantes: 1 },
  { nombre: "Ana Gómez", acompanantes: 0 },
  { nombre: "Irma de Reyes", acompanantes: 3}
];


function buscarNombres() {
  const input = document.getElementById('search').value.toLowerCase();
  const suggestions = document.getElementById('suggestions');
  suggestions.innerHTML = ''; // Limpiar sugerencias previas

  // Filtrar nombres que coincidan con el texto ingresado
  const resultados = invitados.filter(inv => inv.nombre.toLowerCase().includes(input));

  // Crear una lista de sugerencias
  resultados.forEach(inv => {
    const li = document.createElement('li');
    li.textContent = inv.nombre;
    li.onclick = function() { seleccionarInvitado(inv) };
    suggestions.appendChild(li);
  });
}

function seleccionarInvitado(invitado) {
  document.getElementById('search').value = invitado.nombre; // Establecer el nombre seleccionado en el input
  document.getElementById('suggestions').innerHTML = ''; // Limpiar sugerencias

  // Mostrar la información del invitado
  document.getElementById('nombre').textContent = `Nombre: ${invitado.nombre}`;
  document.getElementById('acompanantes').textContent = `Acompañantes: ${invitado.acompanantes}`;
  document.getElementById('resultado').style.display = 'block';
}

function confirmarAsistencia() {
  document.getElementById('confirmacion').style.display = 'block'; // Mostrar confirmación
}