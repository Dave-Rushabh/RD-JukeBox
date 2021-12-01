// DOM used for navbar elements : on hover

let h = document.getElementsByClassName('home')
h[0].addEventListener("mouseover", function(){
    h[0].style.color = "yellow";
    h[0].style.fontWeight = "bolder";
})
h[0].addEventListener("mouseout", function(){
    h[0].style.color = "white";
    h[0].style.fontWeight = "normal";
})

let a = document.querySelector('.artists')
a.addEventListener("mouseover", function() {
    a.style.color = "yellow";
    a.style.fontWeight = "bolder";
})
a.addEventListener("mouseout", function() {
    a.style.color = "white";
    a.style.fontWeight = "normal";
})

let c = document.getElementsByClassName('contact')
c[0].addEventListener("mouseover", function (){
    c[0].style.color = "yellow";
    c[0].style.fontWeight = "bolder";
})
c[0].addEventListener("mouseout", function(){
    c[0].style.color = "white";
    c[0].style.fontWeight = "normal";
})

let b = document.querySelector('.btn')
b.addEventListener("mouseover", function () {
    b.classList.toggle('btn-new');
})
b.addEventListener("mouseout", function () {
    b.classList.toggle('btn-new');
})


let line = document.querySelector('.lines')
let home = document.querySelector('.home')
let artists = document.querySelector('.artists')
let search = document.querySelector('.search')
let contact = document.querySelector('.contact')
let genre = document.querySelector('.genre')
let first_line = document.querySelector('.line-1')
let last_line = document.querySelector('.line-3')
let mid_line = document.querySelector('.line-2')

line.addEventListener("click", function () {
    home.classList.toggle('invisible');
    artists.classList.toggle('invisible');
    search.classList.toggle('invisible');
    contact.classList.toggle('invisible');
    genre.classList.toggle('invisible');
    first_line.classList.toggle('changed-top');
    last_line.classList.toggle('changed-bottom');
    mid_line.classList.toggle('changed-middle');
})

let play = document.getElementById('play')
let pause = document.getElementById('pause')
let next = document.getElementById('next')
let previous = document.getElementById('previous')
let singer = document.getElementById('singer-name')
let song = document.getElementById('song-name')

let music_1 = new Audio('./AUDIO FILES/swwedish.mp3')
let music_2 = new Audio('./AUDIO FILES/Jazz.mp3')
let music_3 = new Audio('./AUDIO FILES/Badass.mp3')
let music_4 = new Audio('./AUDIO FILES/Life.mp3')
let music_5 = new Audio('./AUDIO FILES/piano.mp3')

let radio = [music_1,music_2,music_3,music_4,music_5]
let counter = 0;
let length = radio.length
const background = document.getElementById('bcg')


function play_pause(){
    play.style.display = "none";
    pause.style.display = "inline";
}

function pause_play(){
    pause.style.display = "none";
    play.style.display = "inline";
}

let artist_details = [ "Rushabh, 1997", "Gaurav, 2006", "Mukul, 2019", "Vyas, 2004", "Nitin, 1982"]
let song_details = ["Unstoppable", "Rainy Days", "Shor In City", "Miles Away", "Triumph"]

play.addEventListener("click", function(){
    // play.style.display = "none";
    // pause.style.display = "inline";
    play_pause();
    radio[counter].play();
    background.classList.add("rotation");
})

pause.addEventListener("click", function(){
    // pause.style.display = "none";
    // play.style.display = "inline";
    pause_play();
    radio[counter].pause();
    background.classList.remove("rotation");
})

next.addEventListener("click", function(){
    radio[counter].pause();
    radio[counter].currentTime=0;
    background.classList.remove("rotation");

    setTimeout(function(){
        background.classList.add("rotation");
    },250)


    if (counter+1 === length){
        counter = 0;
    }
    else{
        counter++;
    }
    radio[counter].play();
    song.innerHTML = song_details[counter];
    singer.innerHTML = artist_details[counter];
    play_pause();
    // play.style.display = "none";
    // pause.style.display = "inline";

})

previous.addEventListener("click", function (){
    radio[counter].pause();
    radio[counter].currentTime=0;
    background.classList.remove("rotation");

    setTimeout(function(){
        background.classList.add("rotation");
    },250)
    

    if (counter === 0){
        counter = length-1;
    }
    else{
        counter--;
    }
    radio[counter].play();
    song.innerHTML = song_details[counter];
    singer.innerHTML = artist_details[counter];
    play_pause();
})











