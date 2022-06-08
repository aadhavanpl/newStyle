import random from "../functions/random";
import { finalAns } from "../components/buttons/Buttons";
import chooseAudio from "./chooseAudio";

function newWord() {
    finalAns.value = random()
    chooseAudio()
}

export default newWord