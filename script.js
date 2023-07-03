var player;
var isPlaying = false;
var isClicked = false;
var isColored = false;
var VIDEO_ID = "jfKfPfyJRdk";
var indexActual = 0;
const links = document.querySelectorAll('li');
const body = document.body;
const watchIconContainer = document.getElementById('watchIcon');
const labelTimeContainer = document.getElementById('labelTime');
const button = document.getElementById('confirmButton');
let changeIconColor; // Variable para almacenar el temporizador
let stopAudioTimeout; // Variable para almacenar el temporizador de finalización

function newID(id, index) {
  if (!(VIDEO_ID === id)) {
    indexActual = index;
    isPlaying = false;
    VIDEO_ID = id;
    player.loadVideoById(VIDEO_ID);
  }
}

function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    height: '0',
    width: '0',
    videoId: VIDEO_ID,
    playerVars: {
      autoplay: 0,
      controls: 0,
      showinfo: 0,
      modestbranding: 1,
      loop: 0,
      fs: 0,
      cc_load_policy: 0,
      iv_load_policy: 3,
      autohide: 0
    },
    events: {
      onReady: onPlayerReady
    }
  });
}

function onPlayerReady(event) {
  event.target.setVolume(100);
}

function togglePlayPause(id, index) {
  newID(id, index);
  if (isPlaying) {
    player.pauseVideo();
  } else {
    player.playVideo();
  }
  isPlaying = !isPlaying;
}

function stopAudio() {
  player.stopVideo();
  isPlaying = false;
}

links.forEach((link, index) => {
  link.addEventListener('click', () => {
    const cover = document.getElementById('cover');
    const tittle = document.getElementById('tittle');

    switch (index) {
      case 0:
        body.style.backgroundImage = "url('./img/fondo LoFi.webp')";
        tittle.textContent = 'LoFi Girl';
        cover.innerHTML = '<img src="./img/LoFi girl.webp" alt="LoFiGirl">';
        break;
      case 1:
        body.style.backgroundImage = "url('./img/fondo sea.webp')";
        tittle.textContent = 'Sea';
        cover.innerHTML = '<img src="./img/sea.webp" alt="Sea">';
        break;
      case 2:
        body.style.backgroundImage = "url('./img/fondo rain.webp')";
        tittle.textContent = 'Rain';
        cover.innerHTML = '<img src="./img/rain.webp" alt="Rain">';
        break;
      case 3:
        body.style.backgroundImage = "url('./img/fondo forest.webp')";
        tittle.textContent = 'Forest';
        cover.innerHTML = '<img src="./img/forest.webp" alt="Forest">';
        break;
      case 4:
        body.style.backgroundImage = "url('./img/fondo otro.webp')";
        tittle.textContent = 'Indie';
        cover.innerHTML = '<img src="./img/otro.webp" alt="Otro">';
    }
    stopAudio();
    document.getElementById('play').classList.remove('active');
  });
});

document.getElementById('play').addEventListener('click', function() {
  this.classList.toggle('active');
  togglePlayPause(VIDEO_ID, indexActual);
});

const stopTimeInput = document.getElementById('stopTime');
const confirmButton = document.getElementById('confirmButton');

confirmButton.addEventListener('click', () => {
  clearTimeout(stopAudioTimeout); // Limpiar el temporizador anterior
  clearInterval(changeIconColor); // Limpiar el temporizador de cambio de color

  const stopTime = stopTimeInput.value;
  const stopTimeInSeconds = convertTimeToSeconds(stopTime);
  const currentTimeInSeconds = getCurrentTimeInSeconds();
  const timeDifference = stopTimeInSeconds - currentTimeInSeconds;

  if (timeDifference > 0) {
    changeIconColor = setInterval(() => {
      if (isColored) {
        watchIconContainer.style.backgroundColor = '#d5b1e1';
      } else {
        watchIconContainer.style.backgroundColor = '#ac9af3';
      }
      isColored = !isColored;
    }, 2000);

    stopAudioTimeout = setTimeout(() => {
      stopAudio();
      document.getElementById('play').classList.remove('active');
      clearInterval(changeIconColor);
      watchIconContainer.style.backgroundColor = '';
    }, timeDifference * 1000);
  } else {
    console.log('La hora de finalización debe ser mayor que la hora actual.');
  }
});

function convertTimeToSeconds(time) {
  const [hours, minutes] = time.split(':');
  return hours * 3600 + minutes * 60;
}

function getCurrentTimeInSeconds() {
  const now = new Date();
  return now.getHours() * 3600 + now.getMinutes() * 60 + now.getSeconds();
}

watchIconContainer.addEventListener("click", function() {
  if (window.innerWidth > 415) {
    if (!isClicked) {
      labelTimeContainer.style.left = "-1.5rem";
      isClicked = true;
    } else {
      labelTimeContainer.style.left = "-13rem";
      isClicked = false;
    }
  } else {
    if (!isClicked) {
      labelTimeContainer.style.left = "-1rem";
      isClicked = true;
    } else {
      labelTimeContainer.style.left = "-11rem";
      isClicked = false;
    }
  }
});

button.addEventListener("click", function() {
  if (window.innerWidth > 415) {
    if (isClicked) {
      labelTimeContainer.style.left = "-13rem";
      isClicked = false;
    }
  } else {
    if (isClicked) {
      labelTimeContainer.style.left = "-11rem";
      isClicked = false;
    }
  }
});
