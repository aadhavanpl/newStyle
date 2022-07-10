import { finalAns } from "../components/buttons/Buttons"

function reveal() {
    console.log(finalAns.value)
    document.getElementById("reveal").innerHTML = finalAns.value
    setTimeout(function() {
        document.getElementById("reveal").innerHTML = ""
        }, 1000)
}

export default reveal