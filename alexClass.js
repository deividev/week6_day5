let actualId;
//TODO asignar variable al valor de localStorage.
const localStorage = window.localStorage;
// TODO asignar variable al valor de sessionStorage.
const sessionStorage = window.sessionStorage;
let favorites = [];
let playAll = false;
const replayerList = document.getElementById('replayer-list');
const favList = document.getElementById('favorites');
const replayer = document.getElementById('replayer');
const videos = [];
const videosBBDD = [
    './video/small.mp4',
    'https://file-examples.com/wp-content/uploads/2017/04/file_example_MP4_480_1_5MG.mp4',
    './video/Sony-A77-1440-x-1080-_-30fps-_-MP4-sample-video-YouTube-720p.mp4',
    './video/sample-mp4-video.mp4'
];
playButton.addEventListener('click', playVideo);
pauseButton.addEventListener('click', pauseVideo);
favButton.addEventListener('click', () => {
    addToFavorites(`video${actualId}`);
});
allButton.addEventListener('click', () => {
    playAllVideos()
})
// Event Listener que lanza la siguiente función cuando el documento a cargado
document.addEventListener('DOMContentLoaded', function () {
    //Recorremos el array con los path de los videos
    videosBBDD.forEach((title, id) => {
        createVideoElement(title, id);
    });
    // Comprobamos si existe la key favoritos en localStorage, en caso de que exista creamos los favoritos
    if(!localStorage.favorites) {
        localStorage.setItem('favorites', JSON.stringify([]));
    } else {
        createFavorites(JSON.parse(localStorage.favorites));
    }
    // Fijamos el actualId al primer video del array (index 0), será el video reproduciendose actualmente.
    actualId = 0;
}, false);
//TODO Función que selecciona el video con el actualId y lo reproduce
function playVideo() {
    const video = videos[actualId];
    video.play();
}
//TODO  Función que selecciona el video con el actualId y lo pausa.
function pauseVideo() {
    const video = videos[actualId];
    video.pause();
}
// Función que se encarga de crear el video y la miniatura en el DOM
function createVideoElement(title, id) {
    const video = document.createElement('video');
    const miniatureBox = document.createElement('div');
    miniatureBox.classList.add('miniature');
    const canvas = document.createElement('canvas');
    canvas.setAttribute('id', 'miniature' + id);
    canvas.setAttribute('width', 150);
    canvas.setAttribute('height', 100);
    video.setAttribute('src', title);
    video.setAttribute('id', 'video' + id);
    video.setAttribute('width', 800)
    video.setAttribute('height', 500)
    video.setAttribute('class', 'video');
    video.setAttribute('controls', 'true');
    if(id !== 0) {
        video.setAttribute('hidden', 'hidden')
    }
    miniatureBox.addEventListener('click', function (e) { 
        let num = 0;
        if(e.target && e.target.id) {
            num = e.target.id.match(/\d+/)[0];
        }
        onClickListItem(num)
     }, false);
    video.addEventListener('ended', () => {
        debugger
        if (playAll && actualId < videos.length) {
            onClickListItem(actualId + 1);
        } else {
            playAll = false;
        }
    })
    miniatureBox.appendChild(canvas);
    replayerList.appendChild(miniatureBox);
    replayer.appendChild(video);
    setTimeout(function () {
        canvas.getContext('2d').drawImage(video, 0, 0, 200, 150);
    }, 500);
    videos.push(video);
}
// Función que cambia el video a reproducir, pone el actual en oculto y muestra el seleccionado y pasado por el evento
function onClickListItem(num) {
    videos[num].removeAttribute('hidden', 'hidden');
    videos[actualId].setAttribute('hidden', 'hidden');
    videos[actualId].pause();
    actualId = num;
    debugger
    if (playAll) {
        videos[actualId].play();
    }
}
// Crea las miniaturas en caso de que haya favoritos almacenados en localStorage
function createFavorites(items) {
    // reseteo los favoritos
    const favoritesNode = document.getElementById('favorites');
    while(favoritesNode.firstChild) {
        favoritesNode.removeChild(favoritesNode.firstChild);
    }
    const h4Node = document.createElement('h4');
    h4Node.innerText = 'Mis favoritos';
    favoritesNode.appendChild(h4Node);
    // add tantos favoritos como sean necesarios
    items.forEach((item) => {
        const id = parseInt(item.match(/\d+/)[0]);
        const favorite = videos[id];
        const miniatureFav = document.createElement('div');
        miniatureFav.classList.add('miniature');
        const canvas = document.createElement('canvas');
        canvas.setAttribute('width', 150);
        canvas.setAttribute('height', 100)
        canvas.setAttribute('id', 'miniature' + id);
        miniatureFav.addEventListener('click', function (e) { onClickListItem(e) }, false);
        miniatureFav.appendChild(canvas);
        favList.appendChild(miniatureFav);
        setTimeout(function () {
            canvas.getContext('2d').drawImage(favorite, 0, 0, 200, 150);
        }, 500);
    });
}
// TODO Traer los favoritos de localStorage, almacenar el nuevo video guardado en el arr favorites y
// TODO guardarlo en localStorate, 
// por último llamar a createFavorites con un array que tenga el valor de la id del nuevo video (actualId)
function addToFavorites(id) {
    debugger
    favorites = JSON.parse(localStorage.getItem('favorites'));
    favorites.push(id);
    localStorage.setItem('favorites', JSON.stringify(favorites));
    createFavorites(favorites);
}
function playAllVideos() {
    debugger
    playAll = true;
    videos[actualId].play()
}