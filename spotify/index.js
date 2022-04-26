console.log("Hello Spotify");
// Initialize variables
let songIndex =0;
let audioElement =  new Audio('songs/1.mp3');
let masterPlay = document.getElementById("masterPlay");
let myProgressBar = document.getElementById("myProgressBar");
let gif = document.getElementById("gif");
let songItems = Array.from(document.getElementsByClassName('songItem'));
let mastersongname = document.getElementById('mastersongname');

let songs=[
    {songname:"Legion", filePath: "song/1.mp3",coverPath : "covers/1.jpg"},
    {songname:"Trap", filePath: "song/2.mp3",coverPath : "covers/2.jpg"},
    {songname:"They Mad", filePath: "song/3.mp3",coverPath : "covers/3.jpg"},
    {songname:"Rich the Kid", filePath: "song/4.mp3",coverPath : "covers/4.jpg"},
    {songname:"Song title", filePath: "song/5.mp3",coverPath : "covers/5.jpg"},
    {songname:"The safety Dance", filePath: "song/6.mp3",coverPath : "covers/6.jpg"},
    {songname:"Back It Up", filePath: "song/7.mp3",coverPath : "covers/7.jpg"},
    {songname:"Nights", filePath: "song/8.mp3",coverPath : "covers/8.jpg"},
    {songname:"Let Me love", filePath: "song/9.mp3",coverPath : "covers/9.jpg"},
    {songname:"True Love", filePath: "song/10.mp3",coverPath : "covers/10.jpg"},


]

songItems.forEach((element , i)=>{
    // console.log(element,i)
    element.getElementsByTagName('img')[0].src = songs[i].coverPath;
    element.getElementsByClassName('songName')[0].innerText = songs[i].songname;

} )

// Handle play/pause click
masterPlay.addEventListener('click', ()=>{
    if (audioElement.paused ||audioElement.currentTime<=0 ){
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
    gif.style.opacity=1;
}
    else{
    audioElement.pause();
    masterPlay.classList.remove('fa-pause-circle');
    masterPlay.classList.add('fa-play-circle');
    gif.style.opacity=0;
    }
} )

// Listen to Events
audioElement.addEventListener('timeupdate', ()=>{
    // console.log('timeupdate')

    // Update Seekbar
    progress =parseInt((audioElement.currentTime/audioElement.duration)*100);
    // console.log(progress);
    myProgressBar.value = progress;
} )

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime=myProgressBar.value * audioElement.duration/100 ;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle')
        element.classList.add('fa-play-circle')
    })
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click' , (e)=>{
        // console.log(e.target);
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `songs/${songIndex+1}.mp3`;
        mastersongname.innerText = songs[songIndex].songname;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity=1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })


    })

document.getElementById('next').addEventListener('click', ()=>{
    if (songIndex>=9){
        songIndex=0
    }
    else{
        songIndex +=1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    mastersongname.innerText = songs[songIndex].songname;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity=1;
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})

document.getElementById('previous').addEventListener('click', ()=>{
    if (songIndex<=0){
        songIndex=0
    }
    else{
        songIndex -=1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    mastersongname.innerText = songs[songIndex].songname;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity=1;
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})