import { usersAns, finalAns} from "../components/buttons/Buttons"
import newWord from "./newWord"

function check(){
    if (usersAns.value === finalAns.value) {
        console.log("Correct")
        usersAns.value = ""
        document.getElementById("check").innerHTML = "Correct"
        newWord()
        
        //pulse color
        document.body.style.backgroundColor = "green";
        setTimeout(function() {
            document.body.style.backgroundColor = "lightcoral";
            }, 1000)

        setTimeout(function() {
            document.getElementById("ans").innerHTML = usersAns.value
            document.getElementById("check").innerHTML = "";
        }, 2000);
    }
    else {
        console.log("Incorrect")
        usersAns.value = ""
        document.getElementById("check").innerHTML = "Incorrect"

        //pulse color
        document.body.style.backgroundColor = "red";
        setTimeout(function() {
            document.body.style.backgroundColor = "lightcoral";
            }, 1000)
            
        setTimeout(function(){
            document.getElementById("ans").innerHTML = usersAns.value
            document.getElementById("check").innerHTML = "";
        }, 2000);
    }
}
export default check