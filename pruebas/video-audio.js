//Ejecuciones en clase Web-Api
var miLocalStorage = window.localStorage;

miLocalStorage.setItem('name', 'Deivid');
var data = miLocalStorage.getItem('Manjon');
console.log(data);

 
var miObj = {
    name: 'Alejandro',
    edad: '35'
};


miLocalStorage.setItem('persona', JSON.stringify(miObj));//Pasar 

var persona = miLocalStorage.getItem('persona');
console.log(JSON.parse(persona));


//Session Storage

var miSessionStorage = window.sessionStorage;

var profesor = miLocalStorage.setItem('profesor', 'Marco');


window.onstorage = event => {
  
}

//Navigator (geolocation-dispositivo
function getPosition(position) {
  
}

function getPositionError(err) {
  console.log('error');
  
}

function watchPosition(position) {
  var latitude  = position.coords.latitude;
  var longitude = position.coords.longitude;
}
function watchPositionError() {
  console.log('error');
}

if ("geolocation" in navigator) {
    // El navegador actual soporta geolocalización
    
    navigator.geolocation.getCurrentPosition(getPosition, getPositionError);

    navigator.geolocation.watchPosition(watchPosition, watchPositionError);
  } else {
    // El navegador no soporta geolocalización
  }

  //VIDEO

// Obtenemos el elemento con id mi-video
var video = document.getElementById('mi-video');

// Función que llama al método play para iniciar la reproducción.
  function play(){
    video.play();
  }
// Función que comprueba el estado del video y lo pausa o reanuda.
  function pause(){
    if (video.paused){
      video.play();
    }else{
      video.pause();
    }
  }
// Función que simula el comportamiento de stop (no existe nativamente), pausa el video y fija el currentTime al inicio.    
  function stop(){
    video.pause();
    video.currentTime = 0;
  }
// Función que sube el volumen del elemento video. 
  function turnUpVolume(){
    if (video.volumen < 1) {
      video.volumen = video.volumen + 0.1;
    }
  }
 // Función que baja el volumen del elemento video.
  function turnDownVolume(){
    if (video.volumen > 0) {
      video.volumen = video.volumen - 0.1;
    }
  }

buttonPlay.addEventListener('click', play);
buttonPause.addEventListener('click', pause);
buttonStop.addEventListener('click', stop);
buttonUp.addEventListener('click', turnUpVolume);
buttonDown.addEventListener('click', turnDownVolume);


//AUDIO


// Obtenemos el elemento con id mi-audio
var audio = document.getElementById('miAudio');

// Función que llama al método play para iniciar la reproducción.
  function audioPlay(){
    audio.play();
  }
// Función que comprueba el estado del audio y lo pausa o reanuda.
  function audioPause(){
    if (audio.paused){
      audio.play();
    }else{
      audio.pause();
    }
  }
// Función que simula el comportamiento de stop (no existe nativamente), pausa el audio y fija el currentTime al inicio.    
  function audioStop(){
    audio.pause();
    audio.currentTime = 0;
  }
// Función que sube el volumen del elemento audio. 
  function audioturnUpVolume(){
    if (audio.volumen < 1) {
      audio.volumen = audio.volumen + 0.1;
    }
  }
 // Función que baja el volumen del elemento audio.
  function audioturnDownVolume(){
    if (audio.volumen > 0) {
      audio.volumen = audio.volumen - 0.1;
    }
  }

audPlay.addEventListener('click', audioPlay);
audPause.addEventListener('click', audioPause);
audStop.addEventListener('click', audioStop);
audUp.addEventListener('click', audioturnUpVolume);
audDown.addEventListener('click', audioturnDownVolume);