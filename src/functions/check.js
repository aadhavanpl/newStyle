import { usersAns, finalAns} from "../components/buttons/Buttons"
import newWord from "./newWord"

function check(){
    if (usersAns.value === finalAns.value) {
        console.log("Correct")
        usersAns.value = ""
        newWord()
    }
    else {
        console.log("Incorrect")
        usersAns.value = ""
    }
}
export default check