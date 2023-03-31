let indexid = 0;
document.addEventListener("DOMContentLoaded", function() {
    startplayer(indexid);

}, false);
var player;
let updateTimer;
let listmusik = [{
    id: "0",
    development: "Ardesign.eu.org",
    artist: "Ramil'",
    image: "ramil.jpg",
    path: "ramil.mp3",
    judul: "Siyay"
},
    {
        id: "1",
        development: "Ardesign.eu.org",
        artist: "Rauf & Faik",
        image: "rauffaik.jpg",
        path: "faik.mp3",
        judul: "я люб..."
    },
    {
        id: "2",
        development: "Ardesign.eu.org",
        artist: "Walker, Sabr...",
        image: "sabrina.jpg",
        path: "alan.mp3",
        judul: "On My Way"
    },
];

let curr_track = document.querySelectorAll('audio');
let img = document.querySelectorAll('img');
let names = document.querySelectorAll('p');
let jdl = document.querySelectorAll('h1');
let attrs = "src";

function next() {
    if (indexid < listmusik.length - 1)
    indexid += 1;
  else indexid = 0;
    startplayer(indexid);
    play_aud();
}
function prev() {
    if (indexid > 0)
    indexid -= 1;
  else indexid = listmusik.length;
    startplayer(indexid);
    play_aud();
}


function startplayer(indexid) {
    player = document.getElementById('music_player');
    let path = listmusik[indexid].path;
    let foto = listmusik[indexid].image;
    let artisted = listmusik[indexid].artist;
    let dev = listmusik[indexid].development;
    let title = listmusik[indexid].judul;
    player.controls = false;
    updateTimer = setInterval(seekUpdate, 1000);
    curr_track.forEach(setRes => {
        setRes.setAttribute(attrs, path);
    })
    img.forEach(setRes => {
        setRes.setAttribute(attrs, foto);
    })
    names.forEach(setRes => {
        setRes.innerText = ""+artisted+" - "+dev;
    });
    jdl.forEach(setjdl => {
        setjdl.innerText = ""+title+"";
    });
}
var plays = document.getElementById("play_button");
var pauses = document.getElementById("pause_button");
function play_aud() {
    player.play();
    pauses.style.display = "block";;
    plays.style.display = "none";
}
function pause_aud() {
    player.pause();
    pauses.style.display = "none";;
    plays.style.display = "block";
}
let curr_time = document.querySelector(".current-time");
let total_duration = document.querySelector(".total-duration");
let seek_slider = document.querySelector(".seek_slider");
function seekTo() {
    let seekto = player.duration * (seek_slider.value / 100);
    player.currentTime = seekto;
}
function seekUpdate() {
    let seekPosition = 0;

    if (!isNaN(player.duration)) {
        seekPosition = player.currentTime * (100 / player.duration);

        seek_slider.value = seekPosition;
        let currentMinutes = Math.floor(player.currentTime / 60);
        let currentSeconds = Math.floor(player.currentTime - currentMinutes * 60);
        let durationMinutes = Math.floor(player.duration / 60);
        let durationSeconds = Math.floor(player.duration - durationMinutes * 60);

        if (currentSeconds < 10) {
            currentSeconds = "0" + currentSeconds;
        }
        if (durationSeconds < 10) {
            durationSeconds = "0" + durationSeconds;
        }
        if (currentMinutes < 10) {
            currentMinutes = "0" + currentMinutes;
        }
        if (durationMinutes < 10) {
            durationMinutes = "0" + durationMinutes;
        }

        curr_time.textContent = currentMinutes + ":" + currentSeconds;
        total_duration.textContent = durationMinutes + ":" + durationSeconds;
        var totalDucurrent = currentMinutes + ":" + currentSeconds;
        var totalDuration = durationMinutes + ":" + durationSeconds;
        
        if(totalDucurrent == totalDuration){
            next();
        }
    }
}