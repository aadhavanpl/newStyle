import { usersAns, finalAns} from "../components/buttons/Buttons"
import newWord from "./newWord"

function check(){
    if (usersAns.value === finalAns.value) {
        console.log("Correct")
        usersAns.value = ""
        document.getElementById("check").innerHTML = "Correct"
        newWord()
        setTimeout(function(){
            document.getElementById("ans").innerHTML = usersAns.value
            document.getElementById("check").innerHTML = "";
        }, 2000);
    }
    else {
        console.log("Incorrect")
        usersAns.value = ""
        document.getElementById("check").innerHTML = "Incorrect"
        setTimeout(function(){
            document.getElementById("ans").innerHTML = usersAns.value
            document.getElementById("check").innerHTML = "";
        }, 2000);
    }
}
export default check