function stopAudio() {
    var audio = document.getElementById("idAudio"); 
    audio.pause(); 
    audio.currentTime = 0;
}

export default stopAudio