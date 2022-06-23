import { usersAns, finalAns} from "../components/buttons/Buttons"
import newWord from "./newWord"

function check(){
    if (usersAns.value === finalAns.value) {
        console.log("Correct")
        usersAns.value = ""
        document.getElementById("ans").innerHTML = usersAns.value
        document.getElementById("check").innerHTML = "Correct"
        newWord()
    }
    else {
        console.log("Incorrect")
        document.getElementById("check").innerHTML = "Incorrect"
        usersAns.value = ""
    }
}
export default check