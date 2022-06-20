import { usersAns } from "../components/buttons/Buttons"

function userAns(input) {
    usersAns.value = usersAns.value + input;
    console.log(usersAns.value)
    document.getElementById("ans").innerHTML = usersAns.value
}
export default userAns