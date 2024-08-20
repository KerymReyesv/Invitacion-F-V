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

