import { usersAns, finalAns} from "../components/buttons/Buttons"
import newWord from "./newWord"

function check(){
    if (usersAns.value === finalAns.value) {
        console.log("Correct")
        usersAns.value = ""
        document.getElementById("check").innerHTML = "சரி"
        newWord()
        
        //pulse color
        document.body.style.backgroundColor = "green";
        setTimeout(function() {
            document.body.style.backgroundColor = "#222831";
            document.getElementById("ans").innerHTML = usersAns.value
            document.getElementById("check").innerHTML = "";
            }, 1500)
    }
    else {
        console.log("Incorrect")
        usersAns.value = ""
        document.getElementById("check").innerHTML = "தவறு"

        //pulse color
        document.body.style.backgroundColor = "red";
        setTimeout(function() {
            document.body.style.backgroundColor = "#222831";
            document.getElementById("ans").innerHTML = usersAns.value
            document.getElementById("check").innerHTML = "";
            }, 1500)
    }
}
export default check