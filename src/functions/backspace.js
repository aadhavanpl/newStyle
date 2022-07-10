import { usersAns } from "../components/buttons/Buttons"

function backspace() {
    usersAns.value = usersAns.value.slice(0, -1);
    document.getElementById("ans").innerHTML = usersAns.value
}

export default backspace
