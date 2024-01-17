console.log("Hello Dedipyaaaaaa");

// Innitialize the variables
let audioelement = new Audio("/songs/1.mp3");
// audioelement.play();
let index = 0;
let masterSongName = document.getElementById("masterSongName");

let MasterPlay = document.getElementById("MasterPlay");
let gif = document.getElementById("gif");
let songItems = Array.from(document.getElementsByClassName("song-name-photo"));
let songs = [
  {
    songname: "Kesariyaa",
    filepath: "/songs/1.mp3",
    coverpath: "/covers/1.jpg",
  },
  {
    songname: "Raatan Lambiyan",
    filepath: "/songs/2.mp3",
    coverpath: "/covers/2.jpg",
  },
  {
    songname: "Agar Tum Saath Ho",
    filepath: "/songs/3.mp3",
    coverpath: "/covers/3.jpg",
  },
  {
    songname: "Ankhon se Batana",
    filepath: "/songs/4.mp3",
    coverpath: "/covers/4.jpg",
  },
  {
    songname: "Baarishein",
    filepath: "/songs/5.mp3",
    coverpath: "/covers/1.jpg",
  },
  {
    songname: "Ranjhanaa",
    filepath: "/songs/6.mp3",
    coverpath: "/covers/1.jpg",
  },
  {
    songname: "Let me Love you",
    filepath: "/songs/7.mp3",
    coverpath: "/covers/1.jpg",
  },
];

// songItems.forEach((Element,index),function(){
//     element.querySelectorAll("img")[0].src = songs[index].filepath;
// });

// Changing song covers and names
songItems.forEach((element, i) => {
  console.log(element, i);
  element.querySelectorAll("img")[0].src = songs[i].coverpath;
  element.querySelectorAll("span")[0].innerHTML = songs[i].songname;
});

// playing music on click
MasterPlay.addEventListener("click", () => {
  if (audioelement.paused || audioelement.currentTime == 0) {
    audioelement.play();
    MasterPlay.classList.remove("fa-circle-play");
    MasterPlay.classList.add("fa-circle-pause");
    gif.style.opacity = 1;
  } else {
    audioelement.pause();
    MasterPlay.classList.remove("fa-circle-pause");
    MasterPlay.classList.add("fa-circle-play");
    gif.style.opacity = 0;
  }
});

// Controlling the Seekbar
let ProgressBar = document.getElementById("ProgressBar");

// for updating the seekbar on its own while playing
audioelement.addEventListener("timeupdate", () => {
  progress = parseInt((audioelement.currentTime / audioelement.duration) * 100);
  ProgressBar.value = progress;
});

ProgressBar.addEventListener("change", () => {
  audioelement.currentTime = (ProgressBar.value * audioelement.duration) / 100;
});

function makeAllPlays() {
  smallPlayCircle = Array.from(document.getElementsByClassName("itemPlay"));
  smallPlayCircle.forEach((element) => {
    element.classList.remove("fa-circle-pause");
    element.classList.add("fa-circle-play");
  });
}

smallPlayCircle = Array.from(document.getElementsByClassName("itemPlay"));
smallPlayCircle.forEach((element) => {
  element.addEventListener("click", (e) => {
    makeAllPlays();
    console.log(parseInt(e.target.id));
    index = parseInt(e.target.id);
    e.target.classList.remove("fa-circle-play");
    e.target.classList.add("fa-circle-pause");
    audioelement.src = `songs/${index + 1}.mp3`;
    masterSongName.innerHTML = songs[index].songname;
    audioelement.currentTime = 0;
    audioelement.play();
    gif.style.opacity = 1;
    MasterPlay.classList.remove("fa-circle-play");
    MasterPlay.classList.add("fa-circle-pause");
  });
});

document.getElementById("next").addEventListener("click", () => {
  if (index >= 6) {
    index = 0;
  } else {
    index += 1;
  }
  audioelement.src = `songs/${index + 1}.mp3`;
  masterSongName.innerText = songs[index].songname;
  audioelement.currentTime = 0;
  audioelement.play();
  MasterPlay.classList.remove("fa-circle-play");
  MasterPlay.classList.add("fa-circle-pause");
});
document.getElementById("previous").addEventListener("click", () => {
  if (index <= 0) {
    index = 0;
  } else {
    index -= 1;
  }
  audioelement.src = `songs/${index + 1}.mp3`;
  masterSongName.innerText = songs[index].songname;
  audioelement.currentTime = 0;
  audioelement.play();
  MasterPlay.classList.remove("fa-circle-play");
  MasterPlay.classList.add("fa-circle-pause");
});
