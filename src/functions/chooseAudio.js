import { finalAns } from "../components/buttons/Buttons"

function chooseAudio() {
    var source = document.getElementById("source");
    var audio = document.getElementById("idAudio"); 
    source.src =  "http://37.208.160.151:25585/dashboard/" + finalAns.value + ".mp3"
    console.log(source.src)
    audio.load();
}

export default chooseAudio