const cover = document.querySelector(".card-image");
const title = document.querySelector(".card-content h5");
const artist = document.querySelector(".artist");
const audio = document.querySelector("audio");

const data = {
  title: "War Pigs",
  artist: "Black Label Society",
  cover: "files/bls.jpg",
  file: "files/bls001.mp3"
}

cover.style.background = `url('${data.cover}')  no-repeat center center / cover`;
title.innerText = `${data.title}`;
artist.innerText = `${data.artist}`;
audio.src = data.file;
